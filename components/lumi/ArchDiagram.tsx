'use client';

import { useState } from 'react';
import { lumi } from '@/data/lumi';

/**
 * 五层横向架构图（SVG）：悬浮高亮对应层并显示说明。
 * PC 横向 5 层 + 连接箭头；移动端自动换行网格。
 */
export default function ArchDiagram() {
  const [active, setActive] = useState<number | null>(null);
  const layers = lumi.arch.layers;

  return (
    <div className="relative">
      {/* PC：SVG 横向架构 */}
      <svg
        viewBox="0 0 1000 240"
        className="hidden w-full md:block"
        onMouseLeave={() => setActive(null)}
      >
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill={active !== null ? '#87E8DE' : '#3a4149'} />
          </marker>
        </defs>

        {layers.map((l, i) => {
          const x = 10 + i * 200;
          const isActive = active === i;
          const dim = active !== null && !isActive;
          return (
            <g
              key={l.name}
              className="arch-layer"
              onMouseEnter={() => setActive(i)}
              style={{ cursor: 'pointer', transition: 'opacity .2s', animationDelay: `${i * 90}ms` }}
              opacity={dim ? 0.35 : 1}
            >
              <rect
                x={x}
                y={60}
                width={176}
                height={110}
                rx={12}
                fill={isActive ? 'rgba(135,232,222,0.10)' : '#181B20'}
                stroke={isActive ? '#87E8DE' : 'rgba(135,232,222,0.25)'}
                strokeWidth={isActive ? 2 : 1}
              />
              <text x={x + 88} y={100} textAnchor="middle" fill={isActive ? '#87E8DE' : '#8B949E'} fontSize={13}>
                {l.name}
              </text>
              <text x={x + 88} y={132} textAnchor="middle" fill="#fff" fontSize={16} fontWeight={600}>
                {l.module}
              </text>
              {i < layers.length - 1 && (
                <line
                  x1={x + 178}
                  y1={115}
                  x2={x + 198}
                  y2={115}
                  stroke={isActive || active === i + 1 ? '#87E8DE' : '#3a4149'}
                  strokeWidth={1.5}
                  markerEnd="url(#arrow)"
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* 移动端：纵向堆叠 */}
      <div className="space-y-3 md:hidden">
        {layers.map((l, i) => (
          <button
            key={l.name}
            onClick={() => setActive(active === i ? null : i)}
            style={{ animationDelay: `${i * 90}ms` }}
            className={`arch-layer w-full rounded-xl border p-4 text-left transition-colors ${
              active === i ? 'border-mint bg-mint/10' : 'border-line bg-surface'
            }`}
          >
            <p className="text-xs text-muted">{l.name}</p>
            <p className="mt-1 font-semibold text-white">{l.module}</p>
            {active === i && <p className="mt-2 text-xs leading-relaxed text-body">{l.tip}</p>}
          </button>
        ))}
      </div>

      {/* PC 悬浮说明条 */}
      <div
        className={`mt-6 hidden rounded-xl border border-line bg-surface p-5 transition-opacity md:block ${
          active !== null ? 'opacity-100' : 'opacity-40'
        }`}
      >
        {active !== null ? (
          <>
            <p className="text-sm font-semibold text-mint">
              {layers[active].name} · {layers[active].module}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-body">{layers[active].tip}</p>
          </>
        ) : (
          <p className="text-sm text-muted">悬浮于任意层级查看说明</p>
        )}
      </div>
    </div>
  );
}
