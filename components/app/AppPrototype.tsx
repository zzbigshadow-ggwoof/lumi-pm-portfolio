'use client';

import { useEffect, useState } from 'react';

const MODES = [
  { id: 1, name: '冥想模式' },
  { id: 2, name: '助眠模式' },
  { id: 3, name: '氛围灯' },
];

const COLORS = [
  { t: 0, name: '暖橙', rgb: [255, 100, 50] },
  { t: 0.4, name: '青绿', rgb: [100, 200, 150] },
  { t: 0.8, name: '天蓝', rgb: [50, 150, 255] },
  { t: 1, name: '柔紫', rgb: [80, 50, 180] },
];

const SOUNDS = [
  { id: '1', name: '风' },
  { id: '2', name: '雨声' },
  { id: '3', name: '溪流' },
];

const DURATIONS = [5, 10, 15, 20];

function lerpColor(t: number) {
  for (let i = 0; i < COLORS.length - 1; i++) {
    const a = COLORS[i];
    const b = COLORS[i + 1];
    if (t >= a.t && t <= b.t) {
      const k = (t - a.t) / (b.t - a.t || 1);
      return a.rgb.map((v, j) => Math.round(v + (b.rgb[j] - v) * k));
    }
  }
  return COLORS[COLORS.length - 1].rgb;
}

function rgbStr(rgb: number[], alpha = 1) {
  return `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha})`;
}

export default function AppPrototype() {
  const [screen, setScreen] = useState<'login' | 'home' | 'connect' | 'session' | 'me'>('login');
  const [phone, setPhone] = useState('');
  const [mode, setMode] = useState(1);
  const [scene, setScene] = useState<'个人模式' | '团课模式'>('个人模式');
  const [colorT, setColorT] = useState(0.4);
  const [sound, setSound] = useState('2');
  const [duration, setDuration] = useState(10);
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [sn, setSn] = useState('');
  const [left, setLeft] = useState(0);

  const rgb = lerpColor(colorT);
  const colorName =
    colorT < 0.2 ? '暖橙' : colorT < 0.6 ? '青绿' : colorT < 0.9 ? '天蓝' : '柔紫';

  useEffect(() => {
    if (screen !== 'session') return;
    const timer = setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          clearInterval(timer);
          setScreen('home');
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [screen]);

  function startConnect() {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
      setScreen('home');
    }, 1600);
  }

  function startSession() {
    setLeft(duration * 60);
    setScreen('session');
  }

  const mm = String(Math.floor(left / 60)).padStart(2, '0');
  const ss = String(left % 60).padStart(2, '0');

  return (
    <div className="flex flex-col items-center gap-4">
      {/* 手机外框 */}
      <div
        className="relative h-[700px] w-[340px] overflow-hidden rounded-[42px] border border-white/15 shadow-[0_24px_70px_-20px_rgba(0,0,0,.8)]"
        style={{ background: '#2b2f28' }}
      >
        {/* 背景 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/app-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

        {/* 状态栏 */}
        <div className="relative z-10 flex items-center justify-between px-6 pt-3 text-[11px] font-medium text-white/85">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="opacity-70">{connected ? 'BWL 已连接' : '未连接'}</span>
            <span className="ml-1">▮▮▮</span>
          </span>
        </div>

        {screen === 'login' && (
          <div className="relative z-10 flex h-[calc(100%-32px)] flex-col px-7 pt-20">
            <p className="text-2xl font-semibold text-white">欢迎回来</p>
            <p className="mt-2 text-xs leading-relaxed text-white/60">
              登录后即可连接你的脑波灯，开始一次冥想。
            </p>
            <div className="mt-10 space-y-3">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入手机号"
                className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/45 outline-none backdrop-blur-md focus:border-white/50"
              />
              <div className="flex gap-2">
                <input
                  placeholder="验证码"
                  className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/45 outline-none backdrop-blur-md focus:border-white/50"
                />
                <button className="shrink-0 rounded-xl border border-white/25 bg-white/20 px-3 text-xs text-white backdrop-blur-md">
                  获取验证码
                </button>
              </div>
            </div>
            <button
              onClick={() => setScreen('home')}
              className="mt-6 w-full rounded-full bg-[#668062] py-3.5 text-sm font-medium text-white shadow-lg transition hover:brightness-110"
            >
              登录
            </button>
            <p className="mt-6 text-center text-[10px] leading-relaxed text-white/40">
              登录即代表同意《用户协议》与《隐私政策》
            </p>
          </div>
        )}

        {screen === 'home' && (
          <div className="relative z-10 flex h-[calc(100%-32px)] flex-col px-6 pt-6">
            {/* 模式胶囊 */}
            <div className="flex justify-center gap-2">
              {MODES.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`rounded-lg px-3 py-1.5 text-[11px] transition ${
                    mode === m.id
                      ? 'bg-white/85 text-[#414F3C] shadow'
                      : 'bg-white/15 text-white/80'
                  }`}
                >
                  {m.name}
                </button>
              ))}
            </div>

            <div className="mt-2 flex justify-center">
              <button
                onClick={() => setScene(scene === '个人模式' ? '团课模式' : '个人模式')}
                className="text-[10px] text-white/55"
              >
                {scene} ⌄
              </button>
            </div>

            {/* 脑波灯 */}
            <div className="mt-8 flex flex-1 flex-col items-center justify-center">
              <div
                className="relative flex h-40 w-40 items-center justify-center rounded-full transition-all duration-500"
                style={{
                  background: `radial-gradient(circle at 50% 45%, ${rgbStr(rgb, 0.95)} 0%, ${rgbStr(
                    rgb,
                    0.15,
                  )} 62%, transparent 72%)`,
                }}
              >
                <div
                  className="h-24 w-24 rounded-[40%] transition-all duration-500"
                  style={{
                    background: `linear-gradient(180deg, ${rgbStr(rgb, 0.95)}, ${rgbStr(rgb, 0.45)})`,
                    boxShadow: `0 0 48px ${rgbStr(rgb, 0.55)}`,
                  }}
                />
              </div>
              <p className="mt-2 text-[11px] tracking-wide text-white/70">
                {connected ? `脑波灯 · ${colorName}` : '请先连接脑波灯'}
              </p>
            </div>

            {/* 颜色滑杆 */}
            <div className="pb-2">
              <div className="flex justify-between px-1 text-[10px] text-white/55">
                {COLORS.map((c) => (
                  <span key={c.name} className={colorName === c.name ? 'text-white' : ''}>
                    {c.name}
                  </span>
                ))}
              </div>
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={colorT}
                onChange={(e) => setColorT(Number(e.target.value))}
                className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-full outline-none [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow"
                style={{
                  background:
                    'linear-gradient(90deg,#FF6432 0%,#64C896 40%,#3296FF 80%,#5032B4 100%)',
                }}
              />
            </div>

            {/* 音效 */}
            <div className="mt-4 flex justify-center gap-3">
              {SOUNDS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSound(s.id)}
                  className={`rounded-full px-3.5 py-1.5 text-[11px] transition ${
                    sound === s.id ? 'bg-white/85 text-[#414F3C]' : 'bg-white/15 text-white/70'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>

            {/* 时长 */}
            <div className="mt-3 flex justify-center gap-2">
              {DURATIONS.map((d) => (
                <button
                  key={d}
                  onClick={() => setDuration(d)}
                  className={`rounded-lg px-2.5 py-1 text-[10px] transition ${
                    duration === d ? 'bg-[#668062] text-white' : 'bg-white/10 text-white/60'
                  }`}
                >
                  {d} 分
                </button>
              ))}
            </div>

            <button
              onClick={() => (connected ? startSession() : setScreen('connect'))}
              className="mt-4 w-full rounded-full bg-[#668062] py-3.5 text-sm font-medium text-white shadow-lg transition hover:brightness-110"
            >
              {connected ? '开始冥想' : '连接设备'}
            </button>

            <div className="mt-4 flex justify-between border-t border-white/15 pt-3 text-[10px] text-white/60">
              <button onClick={() => setScreen('connect')}>我的设备</button>
              <button onClick={() => setScreen('me')}>我的</button>
            </div>
          </div>
        )}

        {screen === 'connect' && (
          <div className="relative z-10 flex h-[calc(100%-32px)] flex-col px-6 pt-6">
            <button
              onClick={() => setScreen('home')}
              className="self-start text-xs text-white/60"
            >
              ← 返回
            </button>
            <p className="mt-4 text-lg font-semibold text-white">我的设备</p>
            <p className="mt-1 text-[11px] text-white/55">
              {connecting ? '·连接中' : connected ? '·已连接脑波仪' : '·头戴仪未连接'}
            </p>

            <p className="mt-6 text-[11px] text-white/50">扫描到的设备</p>
            <div className="mt-2 space-y-2">
              {connecting ? (
                <div className="rounded-xl border border-white/20 bg-white/15 px-4 py-3 text-xs text-white/85 backdrop-blur">
                  BWL_0921 · 连接中…
                </div>
              ) : (
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-xs text-white/45 backdrop-blur">
                  未发现脑波灯设备，点击刷新扫描
                </div>
              )}
            </div>

            <p className="mt-6 text-[11px] text-white/50">或输入序列号</p>
            <div className="mt-2 flex gap-2">
              <input
                value={sn}
                onChange={(e) => setSn(e.target.value)}
                placeholder="请输入序列号"
                className="w-full rounded-xl border border-white/25 bg-white/15 px-4 py-3 text-sm text-white placeholder-white/45 outline-none backdrop-blur-md focus:border-white/50"
              />
              <button
                onClick={startConnect}
                className="shrink-0 rounded-xl bg-[#668062] px-4 text-xs text-white"
              >
                连接
              </button>
            </div>

            {connected && (
              <div className="mt-auto mb-4 rounded-xl border border-white/25 bg-white/15 px-4 py-3 backdrop-blur">
                <p className="text-xs text-white">BWL_0921 · 已连接</p>
                <p className="mt-1 text-[10px] text-white/55">电量 82% · 信号良好</p>
              </div>
            )}
          </div>
        )}

        {screen === 'session' && (
          <div className="relative z-10 flex h-[calc(100%-32px)] flex-col items-center justify-center px-6 text-center">
            <div
              className="h-44 w-44 rounded-full"
              style={{
                background: `radial-gradient(circle at 50% 45%, ${rgbStr(rgb, 0.9)} 0%, ${rgbStr(
                  rgb,
                  0.12,
                )} 60%, transparent 72%)`,
                animation: 'breathe 4s ease-in-out infinite',
              }}
            />
            <p className="mt-6 text-lg font-medium text-white">
              {mode === 1 ? '冥想进行中' : mode === 2 ? '助眠进行中' : '氛围灯已开启'}
            </p>
            <p className="mt-2 font-mono text-3xl tracking-wider text-white/90">
              {mm}:{ss}
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-white/55">
              脑波灯浮动中，请勿划掉应用
            </p>
            <button
              onClick={() => setScreen('home')}
              className="mt-8 rounded-full border border-white/30 px-8 py-2.5 text-xs text-white/85 backdrop-blur"
            >
              结束
            </button>
          </div>
        )}

        {screen === 'me' && (
          <div className="relative z-10 flex h-[calc(100%-32px)] flex-col px-6 pt-6">
            <button
              onClick={() => setScreen('home')}
              className="self-start text-xs text-white/60"
            >
              ← 返回
            </button>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 text-lg text-white backdrop-blur">
                L
              </div>
              <div>
                <p className="text-sm text-white">李惠涓</p>
                <p className="mt-0.5 text-[10px] text-white/50">已绑定 · 138****0000</p>
              </div>
            </div>
            <div className="mt-6 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
              {['我的设备', '账号与安全', '隐私与权限设置', '清理缓存'].map((item) => (
                <button
                  key={item}
                  onClick={() => item === '我的设备' && setScreen('connect')}
                  className="flex w-full items-center justify-between px-4 py-3.5 text-left text-xs text-white/85"
                >
                  {item}
                  <span className="text-white/35">›</span>
                </button>
              ))}
            </div>
            <button className="mt-auto mb-4 w-full rounded-full border border-white/25 py-3 text-xs text-white/70">
              退出登录
            </button>
          </div>
        )}

        {/* Home indicator */}
        <div className="absolute bottom-1.5 left-1/2 z-10 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40" />
      </div>

      <p className="text-xs text-muted">
        可点击：选模式 → 连接设备 → 调灯光 → 选音效与时长 → 开始冥想
      </p>
    </div>
  );
}
