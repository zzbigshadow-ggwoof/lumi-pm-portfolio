'use client';

import { useEffect, useState } from 'react';

const PRESETS = [
  { name: '暖橙', rgb: [255, 100, 50], note: '冥想开始 · 唤醒' },
  { name: '青绿', rgb: [100, 200, 150], note: '专注区间 · 稳定' },
  { name: '天蓝', rgb: [50, 150, 255], note: '深度放松 · 助眠' },
  { name: '柔紫', rgb: [80, 50, 180], note: '睡前低亮度' },
];

export default function LampDemo() {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    if (!playing) return;
    const timer = setInterval(() => setActive((v) => (v + 1) % PRESETS.length), 2800);
    return () => clearInterval(timer);
  }, [playing]);

  const [r, g, b] = PRESETS[active].rgb;
  const rgbStr = `rgb(${r},${g},${b})`;

  return (
    <div className="mt-10 rounded-2xl border border-line bg-surface p-6 md:p-8">
      <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
        {/* 产品 + 灯光 */}
        <div className="relative isolate overflow-hidden rounded-xl bg-[#F2EEE7]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/lamp-studio.jpg"
            alt="Lumi 脑波灯产品实拍"
            className="h-full w-full object-contain"
          />
          {/* 灯罩着色：只在灯罩椭圆范围内生效，木头不受影响 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-[background] duration-700 ease-out"
            style={{
              mixBlendMode: 'color',
              opacity: 0.92,
              background: `radial-gradient(ellipse 27% 34% at 50.5% 38%, ${rgbStr} 0%, rgba(${r},${g},${b},0.75) 52%, rgba(${r},${g},${b},0) 78%)`,
            }}
          />
          {/* 溢出的光晕 */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 transition-[background] duration-700 ease-out"
            style={{
              mixBlendMode: 'screen',
              opacity: 0.32,
              background: `radial-gradient(ellipse 42% 30% at 50% 62%, rgba(${r},${g},${b},0.9) 0%, rgba(${r},${g},${b},0) 72%)`,
            }}
          />
        </div>

        {/* 控制 */}
        <div>
          <div className="flex items-baseline gap-2">
            <p className="text-2xl font-semibold text-white">{PRESETS[active].name}</p>
            <p className="text-xs text-muted">{PRESETS[active].note}</p>
          </div>
          <p className="mt-2 font-mono text-xs text-muted">rgb {r}, {g}, {b}</p>

          <div className="mt-5 flex gap-2">
            {PRESETS.map((p, i) => (
              <button
                key={p.name}
                onClick={() => {
                  setActive(i);
                  setPlaying(false);
                }}
                aria-label={p.name}
                className={`h-9 w-9 rounded-full border transition ${
                  active === i ? 'scale-110 border-white/70' : 'border-white/20 hover:scale-105'
                }`}
                style={{ background: `rgb(${p.rgb.join(',')})` }}
              />
            ))}
          </div>

          <button
            onClick={() => setPlaying((v) => !v)}
            className="mt-5 rounded-full border border-line px-4 py-2 text-xs text-body hover:border-mint/50 hover:text-mint"
          >
            {playing ? '暂停循环演示' : '播放循环演示'}
          </button>

          <p className="mt-6 text-xs leading-relaxed text-muted">
            同一盏灯，四种状态。颜色由 APP 下发，用户看到的是光的变化，而不是脑波数值。
          </p>
        </div>
      </div>
    </div>
  );
}
