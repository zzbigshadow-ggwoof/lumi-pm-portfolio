# 修改手册

所有内容都在项目文件夹里，不需要懂代码也能改。改完保存，浏览器会自动刷新。

---

## 1. 想改什么 → 改哪个文件

| 想改的内容 | 打开的文件 | 找什么 |
|---|---|---|
| 名字、职位、首页一句话介绍 | `data/profile.ts` | `name` / `role` / `oneLiner` |
| 邮箱、微信、LinkedIn | `data/profile.ts` | `email` / `wechat` / `linkedin` |
| 首页底部的能力标签 | `data/profile.ts` | `skills` 数组 |
| Lumi 项目全部文字 | `data/lumi.ts` | 按区块分好：`hero` / `background` / `competitors` / `arch` / `segments` / `flywheel` / `tradeoffs` / `tabs` / `milestones` / `outcomes` / `retro` / `summary` |
| 其他项目卡片 | `data/other-projects.ts` | 一个 `{ ... }` 就是一张卡片，复制一段可新增 |
| 笔记列表 | `data/notes.ts` | 同上，复制一段可新增一篇 |
| 导航栏文字 | `components/Navbar.tsx` | 顶部 `links` 数组 |
| About 页自我介绍段落 | `app/about/page.tsx` | 搜「自我介绍」，改三段 `<p>` |
| 主题色（薄荷蓝 / 背景灰） | `tailwind.config.ts` | `mint` / `ink` / `surface` |
| PDF 文件 | 直接替换 `public/portfolio.pdf`、`public/resume.pdf` | 文件名保持不变 |
| 图片 | 放进 `public/images/`，见第 2 节 | — |

> 文案里出现的 `█` 是打码占位（金额、百分比、人数），改成你的真实数字即可。

## 2. 怎么换图片

1. 把图片放进 `public/images/`，例如 `public/images/lumi-hero.jpg`
2. 打开对应页面文件，找到 `<ImagePlaceholder ... />`，加一个 `src`：

```tsx
<ImagePlaceholder src="/images/lumi-hero.jpg" label="Lumi 项目头图" ratio="aspect-[16/9]" />
```

常用位置：
- 首页项目头图：`app/page.tsx`
- Lumi 头图 / APP 截图 / 硬件实拍：`app/projects/lumi/page.tsx` 和 `components/lumi/SolutionTabs.tsx`
- 个人照片：`app/about/page.tsx`
- 其他项目封面：`app/projects/page.tsx`（数据里没有图，图在页面里）

建议尺寸：头图 16:9、≥1600px 宽；APP 截图 9:19.5 竖屏；个人照片 3:4 竖版。

## 3. 怎么新增一篇笔记 / 一个项目

打开 `data/notes.ts` 或 `data/other-projects.ts`，复制一个花括号块，粘在数组里改文字：

```ts
{
  title: '新笔记标题',
  date: '2026-10-01',
  summary: '一两句话摘要……',
  tags: ['脑机接口', '行业思考'],
},
```

保存即生效，不用改任何其他文件。

## 4. 改完怎么看到效果

- 本地：终端里 `npm run dev`，浏览器打开 http://localhost:3000 ，保存文件页面自动刷新
- 线上：把改动 push 到 GitHub，Vercel 会自动重新部署（约 1 分钟）

## 5. 动画在哪里调

| 效果 | 位置 |
|---|---|
| 滚动渐入速度 | `app/globals.css` 里 `.reveal` 的 `0.7s` |
| 卡片阶梯出现间隔 | 页面里 `style={{ animationDelay: '...' }}`，例如 `i * 100` |
| 卡片悬浮抬升 | `globals.css` 的 `.lift:hover`（`translateY(-4px)`） |
| 背景光晕呼吸 | `globals.css` 的 `.halo`（`breathe 14s`） |
| 彻底关掉动画 | 系统设置里开启「减少动态效果」即可，代码已适配 |
