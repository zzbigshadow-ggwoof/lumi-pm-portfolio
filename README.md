# Lumi PM Portfolio

软硬一体 / 非侵入脑机方向 PM 个人作品集网站。Next.js 14 + TailwindCSS，纯静态导出，可一键部署 Vercel。

## 本地预览

```bash
npm install
npm run dev
# 打开 http://localhost:3000（支持 Trae 内置预览）
```

## 怎么发给别人看（三种方式）

### 方式 A：Vercel 部署，拿公开链接转发（推荐，免费）

1. 把代码推到 GitHub：
   ```bash
   git init && git add . && git commit -m "init"
   # 在 GitHub 新建仓库后：
   git remote add origin https://github.com/<你的用户名>/<仓库名>.git
   git push -u origin main
   ```
2. 打开 [vercel.com](https://vercel.com) → **Add New Project** → 导入该仓库 → Framework 自动识别 Next.js → **Deploy**
3. 1 分钟左右拿到形如 `https://your-portfolio.vercel.app` 的链接，**直接发给 HR / 面试官**即可
4. 以后每次 push，Vercel 自动重新部署

### 方式 B：拖拽上线（不碰 Git，最快 30 秒）

1. 本地执行 `npm run build`，会生成 `out/` 文件夹
2. 打开 [app.netlify.com/drop](https://app.netlify.com/drop)，把 `out/` 文件夹整个拖进去
3. 立刻得到一个公开链接

### 方式 C：同一 WiFi 下给别人看（临时演示）

```bash
npm run dev -- -H 0.0.0.0
# 然后把你电脑的局域网 IP（如 http://192.168.1.8:3000）发给对方
```

### 绑定自定义域名

Vercel 项目 → **Settings → Domains** → 添加域名 → 按提示配置 DNS：
- 根域名：A 记录指向 `76.76.21.21`
- 子域名：CNAME 指向 `cname.vercel-dns.com`

## 怎么自己改内容

见 **[EDITING.md](./EDITING.md)**（非技术向修改手册）：想改什么 → 改哪个文件，覆盖文案 / 图片 / PDF / 配色 / 新增项目与笔记。

要点速览：
- 所有文案集中在 `data/`：`profile.ts`、`lumi.ts`、`other-projects.ts`、`notes.ts`
- 图片放 `public/images/`，给 `<ImagePlaceholder>` 加 `src="/images/xxx.jpg"` 即可显示
- PDF 直接替换 `public/portfolio.pdf`、`public/resume.pdf`
- 敏感数字用 `█` 打码占位，替换成真实数据即可

## 动效说明

全部为 CSS + IntersectionObserver 实现，无第三方动画库，静态导出可用：

| 效果 | 说明 |
|---|---|
| 滚动渐入 | 区块进入视口淡入上移，卡片按 90~110ms 阶梯依次出现 |
| 首屏入场 | 标签 / 标题 / 简介 / 按钮逐行淡入 |
| 架构图 | 五层从左到右逐层出现；悬浮高亮 + 说明条（唯一重交互） |
| 飞轮 | 环形箭头路径描绘动画，节点依次出现 |
| 时间轴 | 主线从左向右生长 |
| 卡片悬浮 | 轻微抬升 + 薄荷蓝边框 + 柔和投影 |
| 导航 | 链接下划线从左展开，PDF 按钮轻微上浮 |
| 背景 | 极缓呼吸光晕（14s），无粒子 / 流光 / 3D |

系统开启「减少动态效果」时全部动画自动关闭。

## 结构

```
app/            页面（首页 / projects / projects/lumi / notes / about）
components/     通用组件 + components/lumi/ 项目页专属区块（SVG 架构图、飞轮、Tab）
data/           全部文案数据
public/         图片与 PDF 占位
out/            构建产物（npm run build 后生成）
```

## 技术备注

- `output: 'export'` 纯静态，无服务端依赖
- `package.json` 已声明 `engines.node >= 20.9.0`，与 Vercel 默认 Node 20 一致
