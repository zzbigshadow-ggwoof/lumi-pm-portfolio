# Lumi PM Portfolio

软硬一体 / 非侵入脑机方向 PM 个人作品集网站。Next.js 14 + TailwindCSS，纯静态导出，部署到 Netlify。

## 线上地址

https://papaya-blancmange-11546c.netlify.app

## 本地预览

```bash
npm install
npm run dev
# 打开 http://localhost:3000（支持 Trae 内置预览）
```

## 改完代码怎么上线（一行命令）

```bash
npm run deploy
```

会自动构建 `out/` 并部署到 Netlify 生产环境。约 1 分钟后线上地址更新。

> 本项目已通过 Netlify CLI 链接到站点 `papaya-blancmange-11546c`，CLI 凭证已保存。
> 本地放了一份 Node 20（`.tools/`），因为 netlify-cli 与系统 Node 26 不兼容；脚本已自动用它，不用管。

## 怎么发给别人看

直接把线上链接发出去即可：**https://papaya-blancmange-11546c.netlify.app**

如需换个好看的名字：Netlify 后台 → Site configuration → Change site name。

### 绑定自定义域名

Netlify 后台 → Site configuration → Domain management → Add custom domain，按提示配置 DNS（CNAME 指向 Netlify）。

### （可选）绑定 GitHub 自动部署

如果你能访问 GitHub（需代理），可在 Netlify 站点后台 → Site configuration → Build & deploy → Continuous deployment → Link repository，绑定仓库后每次 `git push` 自动构建部署。没有代理时用上面的 `npm run deploy` 即可。

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
