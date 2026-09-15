// 《甲骨问字》题库 v0.3 —— 14 字，字形取自 glyphs.js（据汉典甲骨实例自绘 v2）
// 字料与核验：../../01_字料考据/字料表-v2-勘误增补.md、字形核验报告-v1.md
// 依赖：先加载 glyphs.js 提供 GLYPHS_V2

const QUESTIONS = [
  { char: '日', options: ['日', '目', '白', '月'], answer: '日',
    explain: '像太阳之形，中一横为太阳的光，刀刻之外缘多作方折圆角。' },
  { char: '月', options: ['月', '夕', '肉', '日'], answer: '月',
    explain: '月以缺时常见，故像一弯新月，中有点画为月光，后人加笔以别"夕"。' },
  { char: '山', options: ['山', '火', '丘', '卅'], answer: '山',
    explain: '像三峰并起、中峰最高，下有横连；"丘"只有两峰且更低，可作辨析。' },
  { char: '雨', options: ['雨', '水', '雪', '霖'], answer: '雨',
    explain: '上一横为天，下垂者为雨丝、间夹雨点，就是下雨的"雨"。' },
  { char: '火', options: ['火', '山', '赤', '炎'], answer: '火',
    explain: '像火塘上三簇火苗上腾，中焰最高；与"山"形近，正是辨字的关窍。' },
  { char: '目', options: ['目', '日', '耳', '自'], answer: '目',
    explain: '甲骨文"目"是一只横着的眼睛，眼眶加瞳孔；秦以后才竖起来写。' },
  { char: '人', options: ['人', '入', '匕', '大'], answer: '人',
    explain: '像人侧面垂臂、躬身而立，长笔为身腿，短笔为垂下的手臂。' },
  { char: '牛', options: ['牛', '羊', '告', '半'], answer: '牛',
    explain: '取牛头正面：双角平直向上翘起，中竖为面，下略示其吻。角向上者为牛。' },
  { char: '羊', options: ['羊', '牛', '美', '羌'], answer: '羊',
    explain: '亦取羊头正面：双角外展后折而向下勾卷。角尖朝下者为羊，与"牛"成对。' },
  { char: '鱼', options: ['鱼', '鲁', '龟', '贝'], answer: '鱼',
    explain: '整条鱼的写生：尖首、鳞身、鳍尾俱全；甲骨多竖写，鱼头在上。' },
  { char: '鸟', options: ['鸟', '乌', '隹', '鸡'], answer: '鸟',
    explain: '像鸟侧立：长喙前伸、羽身、高有利爪。"乌"少一点，俗谓乌鸦黑不见眼。' },
  { char: '鹿', options: ['鹿', '麋', '兔', '麟'], answer: '鹿',
    explain: '枝杈般的角、大眼、修长的腿，是甲骨文里最优美的动物写生。' },
  { char: '水', options: ['水', '川', '雨', '冰'], answer: '水',
    explain: '中间蜿蜒一竖为水脉主流，两侧点撇为飞溅的浪花，后规整成"水"。' },
  { char: '家', options: ['家', '牢', '室', '逐'], answer: '家',
    explain: '上"宀"为屋，下"豕"为猪——有屋有畜，三千年前便是安居成家。' },
];

// 五阶段标签
const EVO_LABELS = ['商·甲骨', '周·金文', '秦·小篆', '汉·隶书', '今·楷书'];

// 字形装配：甲骨/金文/小篆用自绘 SVG；隶书/楷书用字体排印（阶段切换时加 class 区分字体）
QUESTIONS.forEach(q => {
  q.glyph = GLYPHS_V2[q.char];
  q.evolution = [
    { type: 'svg', html: GLYPHS_V2[q.char] },
    { type: 'svg', html: GLYPHS_JIN[q.char] },
    { type: 'svg', html: GLYPHS_ZHUAN[q.char] },
    { type: 'text', text: q.char, cls: 'li' },   // 隶书
    { type: 'text', text: q.char, cls: 'kai' },  // 楷书
  ];
});

// 五阶段一句话说明
const EVO_NOTES = [
  '商·甲骨：刀刻于龟甲兽骨，字取物象，笔画方折天真。',
  '周·金文：铸于青铜礼器，笔画浑厚，线条趋于圆转。',
  '秦·小篆：书同文，线条匀圆对称，字形修长规整。',
  '汉·隶书：方折波磔，字形趋扁，古今文字的分水岭。',
  '今·楷书：方正平直，笔画定型，沿用至今。',
];

// 卜辞评级（按首次答对率）
function grade(score, total) {
  const r = score / total;
  if (r >= 0.9) return { title: '大吉', text: '汝与三千年前之刻辞，心有灵犀。' };
  if (r >= 0.65) return { title: '吉', text: '字形初成，再问可通天象。' };
  if (r >= 0.35) return { title: '小吉', text: '龟甲半启，甲骨之奥尚待深观。' };
  return { title: '待问', text: '问字之途始展，来日方长。' };
}
