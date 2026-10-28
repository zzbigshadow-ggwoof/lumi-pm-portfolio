export interface Note {
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export const notes: Note[] = [
  {
    title: '非侵入脑机消费化的三个前提',
    date: '2026-08-12',
    summary: '传感器成本下探只是表象，真正的前提是：采集标准化、反馈可感知、数据可沉淀。三者缺一，脑机就只能是演示玩具……',
    tags: ['脑机接口', '行业思考'],
  },
  {
    title: 'Dreem 之死：为什么好产品也会失败',
    date: '2026-06-30',
    summary: 'Dreem 的临床数据堪称优秀，但单品硬件 + 高客单价 + 无生态反馈的模式撑不起持续现金流。复盘其商业模式的三个断点……',
    tags: ['竞品笔记', 'Dreem'],
  },
  {
    title: 'ToB SDK 定价的三种模型对比',
    date: '2026-05-18',
    summary: 'License 按量阶梯、年费制、分成制各适合什么阶段的客户？结合 Lumi 的报价实践，聊聊软硬一体公司的现金流设计……',
    tags: ['商业模式', 'ToB'],
  },
  {
    title: '蓝牙多设备联动的稳定性清单',
    date: '2026-03-05',
    summary: 'BLE 一拖多场景下的重连风暴、信道竞争与电量焦虑——一份来自 Lumi 联调一线的工程问题清单与产品侧解法……',
    tags: ['工程笔记', 'BLE'],
  },
];
