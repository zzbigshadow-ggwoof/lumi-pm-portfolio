export interface ProjectCard {
  title: string;
  desc: string;
  tags: string[];
  imageHint: string;
}

export const otherProjects: ProjectCard[] = [
  {
    title: '冥想 APP 冷启动增长',
    desc: '负责冥想工具型产品 0→1 增长，通过内容分层与分享裂变将次留提升 ██%。',
    tags: ['ToC', '增长', '内容策略'],
    imageHint: '项目封面占位（16:9）',
  },
  {
    title: '智能硬件 OTA 中台',
    desc: '设计多品类硬件统一 OTA 升级中台，升级成功率从 ██% 提升至 ██%。',
    tags: ['ToB', '平台化', '硬件'],
    imageHint: '项目封面占位（16:9）',
  },
  {
    title: '睡眠监测算法看板',
    desc: '为算法团队搭建数据标注与效果评估看板，缩短算法迭代周期 ██%。',
    tags: ['数据', '效率工具'],
    imageHint: '项目封面占位（16:9）',
  },
  {
    title: '校园心理筛查小程序',
    desc: '主导的心理健康筛查工具落地，覆盖 █ 所学校 ████ 名学生。',
    tags: ['ToG', '公益', '小程序'],
    imageHint: '项目封面占位（16:9）',
  },
];
