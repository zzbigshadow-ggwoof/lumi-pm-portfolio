import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#121418',        // 深炭灰背景
        surface: '#181B20',    // 卡片背景
        line: 'rgba(135,232,222,0.15)',
        mint: '#87E8DE',       // 薄荷蓝主色
        body: '#C9D1D9',       // 正文
        muted: '#8B949E',      // 次级文字
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'PingFang SC', 'Helvetica Neue', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: { site: '72rem' },
    },
  },
  plugins: [],
};
export default config;
