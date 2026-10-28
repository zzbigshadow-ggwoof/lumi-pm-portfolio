'use client';

import { useState } from 'react';
import { lumi } from '@/data/lumi';

/** 商业模式飞轮（SVG）：四节点环形，悬浮显示说明 */
export default function FlywheelDiagram() {
  const [active, setActive] = useState<number | null>(null);
  const nodes = lumi.flywheel.nodes;

  // 四个节点坐标（viewBox 520x360，椭圆排布）
  const pos = [
    { x: 260, y: 46 },   // 上
    { x: 452, y: 180 },  // 右
    { x: 260, y: 314 },  // 下
    { x: 68, y: 180 },   // 左
  ];

  return (
    <div>
      <svg viewBox="0 0 520 360" className="w-full max-w-2xl" onMouseLeave={() => setActive(null)}>
        <defs>
          <marker id="fw-arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="#87E8DE" opacity="0.7" />
          </marker>
        </defs>

        {/* 环形箭头路径（椭圆弧） */}
        <path
          d="M 330 60 A 200 130 0 0 1 440 150 M 440 210 A 200 130 0 0 1 330 300 M 190 300 A 200 130 0 0 1 80 210 M 80 150 A 200 130 0 0 1 190 60"
          fill="none"
          stroke="#87E8DE"
          strokeWidth="1.5"
          opacity="0.4"
          markerEnd="url(#fw-arrow)"
          className="draw-line"
          style={{ ['--dash' as string]: '1100' }}
        />

        {nodes.map((n, i) => {
          const isActive = active === i;
          const dim = active !== null && !isActive;
          return (
            <g
              key={n.label}
              className="arch-layer"
              onMouseEnter={() => setActive(i)}
              style={{ cursor: 'pointer', transition: 'opacity .2s', animationDelay: `${300 + i * 90}ms` }}
              opacity={dim ? 0.35 : 1}
            >
              <rect
                x={pos[i].x - 92}
                y={pos[i].y - 30}
                width={184}
                height={60}
                rx={12}
                fill={isActive ? 'rgba(135,232,222,0.12)' : '#181B20'}
                stroke={isActive ? '#87E8DE' : 'rgba(135,232,222,0.3)'}
                strokeWidth={isActive ? 2 : 1}
              />
              <text x={pos[i].x} y={pos[i].y + 5} textAnchor="middle" fill={isActive ? '#87E8DE' : '#fff'} fontSize={15} fontWeight={600}>
                {n.label}
              </text>
            </g>
          );
        })}
      </svg>

      <div
        className={`mt-4 max-w-2xl rounded-xl border border-line bg-surface p-4 transition-opacity ${
          active !== null ? 'opacity-100' : 'opacity-40'
        }`}
      >
        <p className="text-sm text-body">
          {active !== null ? nodes[active].tip : '悬浮于飞轮节点查看说明'}
        </p>
      </div>
    </div>
  );
}
