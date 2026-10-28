# Lumi PM 作品集网站 · 方案文档

> 定位：软硬一体 / 非侵入脑机方向 PM 求职作品集
> 调性：克制、科技感、信息优先；拒绝赛博朋克 / 粒子特效 / 3D 轮播

---

## 1. 技术方案

| 项 | 选型 | 说明 |
|---|---|---|
| 框架 | Next.js 14（App Router） | `output: 'export'` 纯静态导出 |
| 样式 | TailwindCSS | 主色 `#87E8DE`（薄荷蓝）+ 背景 `#121418`（深炭灰），文字白色 |
| 部署 | Vercel | 零配置一键部署，支持自定义域名 |
| 图片 | `public/images/` | 全部使用占位图（placeholder div / 占位 SVG），后续自行替换 |
| 文案 | 集中在 `data/` 目录的 TS 文件 | 改文案不动组件 |
| 动效 | 仅平缓滚动渐入（IntersectionObserver + CSS transition） | 架构图悬浮高亮是唯一重交互 |

## 2. 站点地图（5 个页面）

```
/            首页 Home
/projects/lumi   Lumi 项目页（核心）
/projects      其他项目页
/notes        笔记 / 复盘页
/about        About 我
```

## 3. 全局元素

- **顶部固定导航**：Logo 文案 + 5 个页面链接 + 「下载 PDF」按钮（链接预留 `#` / `public/portfolio.pdf` 占位）
- **Footer**：联系方式、版权
- **全局组件**：`Navbar` / `Footer` / `SectionTitle` / `ImagePlaceholder` / `RevealOnScroll`
- **设计规范**：
  - 标题层级、卡片、表格全部统一圆角 `12px`、1px 半透明边框 `rgba(135,232,222,0.15)`
  - 强调色仅用于标签、高亮、链接 hover
  - 移动端：导航折叠为汉堡菜单；所有多栏布局降为单栏

## 4. 页面结构详案

### 4.1 首页 `/`
1. Hero：一句话个人介绍（软硬一体 · 非侵入脑机方向 PM）+ 两个按钮（查看 Lumi 项目 / 下载 PDF 作品集）
2. 核心项目入口卡片：Lumi 项目（头图占位 + 一句话简介 + 进入链接）
3. 其他入口：其他项目 / 笔记 / About 三张卡片
4. 简短能力标签条（需求定义 / SDK 规范 / 蓝牙协议 / 跨团队协调 / 上架跟进 / 商务方案）

### 4.2 Lumi 项目页 `/projects/lumi`（核心，严格按以下叙事顺序）
| # | 区块 | 内容与实现 |
|---|---|---|
| 1 | 项目头图 | 大图占位（头戴+脑波灯+香薰灯实拍位）+ 标题 + 角色标签 + 一句话简介（脑波 SDK 底座，一套能力支撑 ToC 硬件与 ToB 算法服务，采集-解析-声光反馈-数据沉淀闭环） |
| 2 | 项目背景 & 行业机会 | 文字段落 + 竞品对比表格：Dreem / Brainco / Lumi ×（商业模式 / 客群 / 短板） |
| 3 | 产品闭环架构图 | **SVG 横向 5 层架构图**：感知层(脑波头戴) → 能力层(标准化SDK) → 反馈层(灯/香薰) → 数据层(APP) → 商业层(ToB/ToC)。鼠标悬浮高亮该层并弹出简短说明 tooltip（纯 React state + SVG，无第三方库） |
| 4 | 用户分层 | 左右两栏：ToC 用户（痛点/核心需求）｜ToB 客户（痛点/核心需求） |
| 5 | 商业模式飞轮 | SVG 环形飞轮图：C 端样板 → 反哺 B 端获客 → B 端收入 → 反哺 SDK 迭代 → 更好 C 端体验 |
| 6 | 需求策略 & 取舍 | 表格：问题 ｜ 约束 ｜ 我的决策 ｜ 取舍代价 |
| 7 | Tab 切换 | Tab A「ToC 消费方案」：APP 截图占位×2 + 硬件实拍占位 + 套装能力 + 盈利方式；Tab B「ToB SDK 交付方案」：SDK 交付包内容 / 客户类型 / 收费模式 / 智融合合作落地案例（金额用 `███` 打码样式） |
| 8 | 里程碑时间轴 | 横向时间轴（移动端竖向）：V1.0 打通链路 → V1.1 香薰联动 → V1.2 APP 上架 → V1.3 SDK 对外交付 |
| 9 | 落地成果 | 三列：C 端上架成果 / B 端商务成果 / 沉淀资产（数字+说明，数字均为占位文案） |
| 10 | 复盘风险 & 迭代路线 | 两栏：已知风险 / 后续迭代路线 |
| 11 | 项目小结 | PM 核心职责清单：需求定义、SDK 规范对齐、蓝牙协议评审、跨团队协调、上架跟进、商务方案输出 |

### 4.3 其他项目页 `/projects`
- 项目卡片网格（2~4 张占位卡片：缩略图占位 + 标题 + 一句话 + 标签），数据来自 `data/other-projects.ts`

### 4.4 笔记/复盘页 `/notes`
- 博客列表式：标题 + 日期 + 摘要 + 标签，占位 3~4 篇（脑机行业思考 / 竞品笔记），数据来自 `data/notes.ts`（暂不支持点进详情，或仅展开摘要——建议第一版列表即可）

### 4.5 About 页 `/about`
- 头像占位 + 自我介绍（产品设计 → 软硬一体脑机方向 PM 的转型叙述）
- 能力栈标签
- 简历下载按钮 + PDF 作品集下载按钮 + 联系方式（邮箱 / 微信 / LinkedIn 占位）

## 5. 代码结构

```
temp_20261024_01/
├── app/
│   ├── layout.tsx          # 全局布局 + Navbar + Footer
│   ├── page.tsx            # 首页
│   ├── globals.css         # Tailwind + 设计变量
│   ├── projects/
│   │   ├── page.tsx        # 其他项目
│   │   └── lumi/page.tsx   # Lumi 核心项目页
│   ├── notes/page.tsx
│   └── about/page.tsx
├── components/
│   ├── Navbar.tsx  Footer.tsx
│   ├── SectionTitle.tsx  ImagePlaceholder.tsx  RevealOnScroll.tsx
│   └── lumi/               # Lumi 页专属区块组件
│       ├── ArchDiagram.tsx     # SVG 5层架构图（悬浮高亮）
│       ├── FlywheelDiagram.tsx # SVG 飞轮
│       ├── CompareTable.tsx  TradeoffTable.tsx
│       ├── SolutionTabs.tsx  Timeline.tsx  ...
├── data/                   # 所有文案集中在此，方便替换
│   ├── lumi.ts  other-projects.ts  notes.ts  profile.ts
├── public/
│   ├── images/             # 占位图位置（你后续替换实拍图/SVG）
│   └── portfolio.pdf       # PDF 占位（后续替换）
├── tailwind.config.ts  next.config.js(output:'export')
└── README.md               # 本地预览 & Vercel 部署 & 换图/换文案说明
```

## 6. 交互与约束对照

| 要求 | 实现 |
|---|---|
| 导航固定顶部 | `fixed top-0` + 半透明毛玻璃背景 |
| 仅平缓滚动动画 | `RevealOnScroll`：opacity/translateY 渐入，其余无动效 |
| 图片占位 | `ImagePlaceholder` 组件：灰蓝底色 + 居中说明文字，标明建议尺寸 |
| PC 优先 + 移动端自适应 | Tailwind 响应式断点 |
| 全局 PDF 下载按钮 | Navbar 常驻，链接 `data/profile.ts` 中一处配置 |
| 代码干净易改 | 文案全部抽离到 `data/`，图片统一走 `ImagePlaceholder` |

## 7. 预览与部署

- 本地：`npm install && npm run dev` → Trae 内置预览 `http://localhost:3000`
- 部署：GitHub 仓库关联 Vercel → 自动识别 Next.js → 一键部署；Vercel 后台绑定自定义域名

---

**待确认点**
1. 笔记页第一版只做列表（无详情页），可以吗？
2. 竞品/成果等具体文案我会先写占位文案（合理但虚构程度低），你后续在 `data/` 里替换为真实数据——OK？
3. 是否需要中英文双语？（默认仅中文）
