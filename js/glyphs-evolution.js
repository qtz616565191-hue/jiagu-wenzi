// 《甲骨问字》演变帧字形 v1 —— 14 字的金文、小篆自绘 SVG
// 据汉典金文/小篆参考（01_字料考据/金文小篆参考.png）自行摹绘，教学规范化处理
// 统一 viewBox 0 0 200 200，currentColor；⚠️ 待指导教师终审
// 隶书/楷书帧不在这里——直接用开源字体排印

const GLYPHS_JIN = {
  // 日：敦实杯形
  '日': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="13" stroke-linejoin="round"><path d="M56 60 Q100 46 144 60 L136 128 Q100 146 64 128 Z"/></svg>`,
  // 月：D 形弯月
  '月': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M70 46 Q140 46 146 94 Q144 138 98 154 Q72 150 64 128 Q52 84 70 46 Z"/><path d="M96 84 Q114 90 116 108"/></svg>`,
  // 山：U 底三锋
  '山': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"><path d="M48 142 C48 102 60 88 70 80 M152 142 C152 102 140 88 130 80 M100 150 V58 M48 142 Q100 158 152 142"/></svg>`,
  // 雨：厚边框 + 雨棂
  '雨': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round"><path d="M42 54 H158 V126 M42 54 V126 M78 54 V130 M122 54 V130 M60 130 V150 M100 130 V152 M140 130 V150"/></svg>`,
  // 火：过渡形（金文罕见，取简）
  '火': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round"><path d="M48 142 Q58 108 72 92 M152 142 Q142 108 128 92 M100 150 Q94 112 100 70"/></svg>`,
  // 目：竖 D 眼
  '目': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linejoin="round"><path d="M66 52 C50 62 46 92 54 118 C62 142 86 150 104 144 C130 136 142 110 138 82 C135 58 116 46 92 48 Z"/><circle cx="86" cy="92" r="8" fill="currentColor" stroke="none"/></svg>`,
  // 人：躬身侧立
  '人': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round"><path d="M82 44 Q66 96 78 156"/><path d="M84 86 Q118 104 132 150"/></svg>`,
  // 牛：简式牛头
  '牛': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path d="M100 46 V156 M100 74 L64 48 M100 74 L136 48 M78 112 C88 122 112 122 122 112"/></svg>`,
  // 羊：Y 角下垂
  '羊': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"><path d="M100 56 V156 M100 96 L62 64 M100 96 L138 64 M100 96 L88 112 M100 96 L112 112"/></svg>`,
  // 鱼：竖写全鱼
  '鱼': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M100 30 L128 58 L100 74 L72 58 Z M76 76 C68 100 72 128 88 146 M124 76 C132 100 128 128 112 146 M84 94 H116 M82 112 H118 M86 130 H114 M90 146 L80 170 M110 146 L120 170 M74 98 L56 90 M126 98 L144 90"/><circle cx="92" cy="58" r="4.5" fill="currentColor" stroke="none"/></svg>`,
  // 鸟：侧立禽
  '鸟': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M44 78 L72 74 M72 66 C58 72 58 90 70 100 M74 70 C106 62 138 70 146 90 M146 94 C138 112 110 118 86 114 C72 112 66 104 68 94"/><circle cx="78" cy="82" r="4.5" fill="currentColor" stroke="none"/><path d="M90 114 L86 160 M114 114 L118 158 M86 160 L76 166 M86 160 L96 165 M118 158 L108 164 M118 158 L128 164"/></svg>`,
  // 鹿：枝角四足（拓本不清，取通行金文形）
  '鹿': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M80 46 C72 30 74 20 80 10 M70 34 L56 26 M94 40 C106 26 118 22 130 18 M76 48 C94 40 112 52 110 72 C130 78 138 98 130 118 C122 130 104 132 92 126"/><circle cx="94" cy="64" r="4.5" fill="currentColor" stroke="none"/><path d="M88 126 L82 168 M102 128 L98 168 M118 126 L122 164 M130 116 L140 160"/></svg>`,
  // 水：中流 + 两侧
  '水': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round"><path d="M104 30 C86 62 122 82 98 108 C78 130 116 146 96 176 M64 72 C80 82 82 98 66 110 M136 72 C120 82 118 98 134 110 M62 130 C76 136 80 150 64 160 M138 130 C124 136 120 150 136 160"/></svg>`,
  // 家：宀 + 豕
  '家': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M46 84 L100 50 L154 84 M58 84 V104 M142 84 V104 M58 84 H142 M78 132 C86 114 112 110 128 124 C140 134 136 152 120 156 C102 160 84 156 74 146 M128 124 L144 118 M84 154 L80 172 M100 157 L98 174 M118 155 L122 172"/></svg>`,
};

const GLYPHS_ZHUAN = {
  // 日：竖椭圆 + 中横
  '日': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"><rect x="58" y="32" width="84" height="136" rx="30"/><path d="M62 100 H138"/></svg>`,
  // 月：篆月
  '月': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M72 40 Q132 40 138 92 Q140 140 104 160 Q72 156 66 120 Q60 78 72 40 Z M84 84 H120 M84 116 H116"/></svg>`,
  // 山：中峰高、U 连
  '山': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><path d="M58 150 V96 M100 154 V52 M142 150 V96 M58 150 Q100 120 142 150"/></svg>`,
  // 雨：篆雨
  '雨': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"><path d="M36 52 H164 M100 52 V152 M62 52 V118 Q100 138 138 118 V52 M74 130 V150 M126 130 V150 M60 86 H86 M114 86 H140"/></svg>`,
  // 火：篆火（人臂 + 两星）
  '火': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"><path d="M100 156 C96 120 100 92 104 60 M100 96 Q72 92 60 70 M100 96 Q128 92 140 70"/><circle cx="62" cy="124" r="5" fill="currentColor" stroke="none"/><circle cx="138" cy="124" r="5" fill="currentColor" stroke="none"/></svg>`,
  // 目：竖目 + 两横
  '目': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linejoin="round"><rect x="60" y="36" width="80" height="128" rx="22"/><path d="M64 82 H136 M64 118 H136"/></svg>`,
  // 人：篆人
  '人': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"><path d="M78 44 Q112 84 98 160 M80 80 Q132 102 140 156"/></svg>`,
  // 牛：篆牛
  '牛': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"><path d="M62 56 L100 78 L138 56 M100 50 V156 M72 110 H128"/></svg>`,
  // 羊：篆羊（上对角 + 两横 + 竖）
  '羊': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"><path d="M64 48 L88 78 M136 48 L112 78 M70 92 H130 M76 114 H124 M100 78 V158"/></svg>`,
  // 鱼：篆魚（头 + 田 + 火尾简化）
  '鱼': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M78 34 L100 26 L122 34 L112 54 H88 Z M74 54 H126 V120 H74 Z M74 76 H126 M74 98 H126 M100 54 V120 M84 128 L72 160 M100 128 V164 M116 128 L128 160"/></svg>`,
  // 鸟：篆鳥简化
  '鸟': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M72 36 L60 30 L74 48 M68 52 Q60 72 70 84 M70 52 C106 44 136 58 138 88 V118 M70 84 H138 M74 106 H134 M76 128 L68 160 M96 128 L94 162 M116 128 L122 160 M134 128 L142 158"/><circle cx="80" cy="64" r="3.5" fill="currentColor" stroke="none"/></svg>`,
  // 鹿：篆鹿（枝角 + 横目 + 身腿）
  '鹿': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M78 40 L64 26 M90 36 L88 20 M110 36 L124 24 M74 52 H120 Q130 52 130 64 V78 M74 66 H130 M80 82 Q66 98 76 116 H124 Q134 98 120 82 M82 116 L76 160 M99 116 L97 162 M116 116 L120 160 M128 110 L138 154"/><circle cx="88" cy="60" r="3.5" fill="currentColor" stroke="none"/></svg>`,
  // 水：篆水
  '水': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round"><path d="M100 28 C84 60 120 80 98 106 C80 128 118 144 100 174 M64 60 C80 74 80 96 62 108 C50 116 52 132 66 140 M136 60 C120 74 120 96 138 108 C150 116 148 132 134 140"/></svg>`,
  // 家：篆家
  '家': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M46 78 L100 44 L154 78 M58 78 V100 M142 78 V100 M58 78 H142 M80 106 C96 98 118 102 128 116 C136 128 130 144 114 148 C96 152 82 146 76 136 C72 128 74 114 80 106 M126 118 L142 112 M84 148 L78 172 M100 150 L98 174 M116 148 L122 172"/></svg>`,
};
