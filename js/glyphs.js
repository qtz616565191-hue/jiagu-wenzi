// 《甲骨问字》自绘甲骨字形 v3 —— 对照汉典甲骨实例二次摹写（2026-09-14）
// 统一规范：viewBox 0 0 200 200，currentColor，刀口圆笔，线宽 9-12
// 定位：教学标准摹写形（比拓本规整，构形据真实刻辞）｜待指导教师终审
// 所据实例：03_视觉素材/字源核验/<字>/

const GLYPHS_V2 = {
  // 日：圆角方框 + 中横（保留 v2）
  '日': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linejoin="round">
    <path d="M52 62 C46 62 42 70 42 82 L42 120 C42 134 48 142 60 142 L140 142 C154 142 158 134 158 120 L158 82 C158 70 154 62 146 62 Z"/>
    <path d="M58 101 L142 101" stroke-linecap="round"/>
  </svg>`,

  // 月：竖脊 D 形（据实例1/2：直脊+外鼓弧），内两点
  '月': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round">
    <path d="M72 46 L72 152"/>
    <path d="M72 46 C120 44 146 72 146 100 C146 130 120 154 72 152"/>
    <path d="M92 84 H116 M92 116 H112"/>
  </svg>`,

  // 山：三峰高低错落，底横相连（不做对称几何三角）
  '山': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round">
    <path d="M30 152 L56 122 L80 150"/>
    <path d="M97 58 L103 152"/>
    <path d="M120 150 L146 114 L170 150"/>
    <path d="M28 154 C80 148 122 156 172 150"/>
  </svg>`,

  // 雨：平横 + 下垂雨丝雨点（保留 v2，微调）
  '雨': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round">
    <path d="M36 58 H164"/>
    <path d="M62 58 V96 M100 58 V104 M138 58 V96"/>
    <path d="M62 116 V146 M138 116 V146"/>
    <circle cx="62" cy="106" r="5.5" fill="currentColor" stroke="none"/>
    <circle cx="138" cy="106" r="5.5" fill="currentColor" stroke="none"/>
  </svg>`,

  // 火：火塘弧底上三簇火苗，中焰最高（据实例2，形近"山"故互为干扰）
  '火': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round">
    <path d="M46 146 Q100 158 154 146"/>
    <path d="M66 142 C60 116 52 98 44 84"/>
    <path d="M100 148 C95 118 96 92 100 64"/>
    <path d="M134 142 C140 116 148 98 156 84"/>
  </svg>`,

  // 目：横置杏眼，瞳孔偏前
  '目': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linejoin="round">
    <path d="M34 106 C28 86 58 66 98 64 C138 66 168 88 164 106 C158 126 130 140 96 140 C62 140 40 124 34 106 Z"/>
    <circle cx="88" cy="102" r="13" fill="currentColor" stroke="none"/>
  </svg>`,

  // 人：侧立两笔（保留 v2）
  '人': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="12" stroke-linecap="round">
    <path d="M116 36 C104 76 88 114 62 170"/>
    <path d="M106 84 C118 110 126 134 132 158"/>
  </svg>`,

  // 牛：中竖 + 两角平直上翘带尖 + 下略示脸吻（据实例2，删繁）
  '牛': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round">
    <path d="M100 44 V154"/>
    <path d="M100 76 L66 48 M66 48 L58 62"/>
    <path d="M100 76 L134 48 M134 48 L142 62"/>
    <path d="M100 126 L88 146 M100 126 L112 146"/>
  </svg>`,

  // 羊：中竖 + 双角外展后折而向内下勾（对勾角，角尖低于分叉点，与牛明确区分）
  '羊': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round" stroke-linejoin="round">
    <path d="M100 44 V158"/>
    <path d="M100 70 L70 52 L56 54 L68 82"/>
    <path d="M100 70 L130 52 L144 54 L132 82"/>
    <path d="M100 114 L88 132 M100 114 L112 132"/>
  </svg>`,

  // 鱼：竖写全鱼，尖首菱形（据实例2）
  '鱼': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M100 28 L126 58 L100 76 L74 58 Z"/>
    <path d="M76 76 C68 102 72 130 88 148 M124 76 C132 102 128 130 112 148"/>
    <path d="M84 94 H116 M82 112 H118 M86 130 H114"/>
    <path d="M90 148 L82 172 M110 148 L118 172"/>
    <path d="M74 100 L56 92 M126 100 L144 92"/>
    <circle cx="92" cy="56" r="4.5" fill="currentColor" stroke="none"/>
  </svg>`,

  // 鸟：侧立，头在左前、喙前伸、横身高足利爪（据实例2）
  '鸟': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M40 80 L68 76"/>
    <circle cx="72" cy="84" r="4.5" fill="currentColor" stroke="none"/>
    <path d="M68 78 C58 84 58 98 68 106"/>
    <path d="M74 72 C106 64 138 70 146 90"/>
    <path d="M146 92 C138 110 110 116 86 112 C72 110 66 102 68 94"/>
    <path d="M88 96 C106 102 128 98 138 88"/>
    <path d="M92 112 L88 160 M114 112 L118 158"/>
    <path d="M88 160 L78 166 M88 160 L98 165 M118 158 L108 164 M118 158 L128 164"/>
  </svg>`,

  // 鹿：枝角分叉、首、竖身四腿（据实例3）
  '鹿': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M80 48 C72 32 74 20 80 10 M72 36 L58 28 M78 24 L68 16"/>
    <path d="M92 42 C104 28 116 22 128 20 M104 30 L116 22"/>
    <path d="M76 50 C94 42 112 54 110 74 C130 80 138 100 130 120 C122 132 104 134 92 128"/>
    <circle cx="94" cy="64" r="4.5" fill="currentColor" stroke="none"/>
    <path d="M88 128 L82 170 M102 130 L98 170 M118 128 L122 168 M130 118 L140 162"/>
  </svg>`,

  // 水：中水脉 + 两侧浪花（保留 v2）
  '水': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="11" stroke-linecap="round">
    <path d="M106 28 C88 60 124 80 100 106 C80 128 118 144 98 176"/>
    <path d="M64 74 C80 82 82 98 66 110 M136 74 C120 82 118 98 134 110"/>
    <path d="M62 128 C76 134 80 150 64 160 M138 128 C124 134 120 150 136 160"/>
  </svg>`,

  // 家：宀 + 侧视豕（拱背、鬃、四腿），去圆脸
  '家': `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
    <path d="M48 86 L100 52 L152 86"/>
    <path d="M58 86 V108 M142 86 V108 M58 86 H142"/>
    <path d="M74 134 C82 114 112 110 128 124 C140 134 136 152 120 156 C102 160 84 156 74 146 Z"/>
    <path d="M128 124 L144 118"/>
    <circle cx="134" cy="132" r="3.5" fill="currentColor" stroke="none"/>
    <path d="M82 118 L72 106 M94 114 L88 100 M108 113 L108 98"/>
    <path d="M84 154 L80 172 M100 157 L98 174 M118 155 L122 172"/>
  </svg>`,
};
