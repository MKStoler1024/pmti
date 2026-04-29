// 题目数据
export const questions = [
  // 第一部分 价值倾向 (1-10)
  { text: "如果你必须在“秩序”和“自由”之间选择，你更倾向：", options: [
    { text: "A. 秩序", score: "O" }, { text: "B. 自由", score: "I" }, { text: "C. 看情况", score: "S" }, { text: "D. 两者都不可信", score: "W" }
  ] },
  { text: "你更相信：", options: [
    { text: "A. 规则能维持世界", score: "O" }, { text: "B. 人能改变规则", score: "I" }, { text: "C. 世界本身是错误的", score: "R" }, { text: "D. 世界只是工具", score: "W" }
  ] },
  { text: "面对残酷现实，你会：", options: [
    { text: "A. 接受并适应", score: "S" }, { text: "B. 尝试改善", score: "I" }, { text: "C. 反抗", score: "R" }, { text: "D. 旁观分析", score: "W" }
  ] },
  { text: "你更害怕：", options: [
    { text: "A. 失去控制", score: "O" }, { text: "B. 失去意义", score: "I" }, { text: "C. 失去他人", score: "E" }, { text: "D. 失去自我", score: "R" }
  ] },
  { text: "你对“牺牲”的看法：", options: [
    { text: "A. 必要手段", score: "O" }, { text: "B. 不可避免", score: "S" }, { text: "C. 不应发生", score: "E" }, { text: "D. 视对象而定", score: "W" }
  ] },
  { text: "你如何看待情绪：", options: [
    { text: "A. 应压制", score: "O" }, { text: "B. 应理解", score: "E" }, { text: "C. 是力量来源", score: "R" }, { text: "D. 是危险源", score: "W" }
  ] },
  { text: "如果必须伤害一个人来救多数人：", options: [
    { text: "A. 会做", score: "O" }, { text: "B. 会犹豫后做", score: "S" }, { text: "C. 不会", score: "E" }, { text: "D. 重新寻找方案", score: "I" }
  ] },
  { text: "你如何理解“正义”：", options: [
    { text: "A. 执行规则", score: "O" }, { text: "B. 维护弱者", score: "E" }, { text: "C. 实现理想", score: "I" }, { text: "D. 不存在真正正义", score: "W" }
  ] },
  { text: "你更欣赏：", options: [
    { text: "A. 冷静理性的人", score: "O" }, { text: "B. 坚持信念的人", score: "I" }, { text: "C. 有温度的人", score: "E" }, { text: "D. 强大的人", score: "R" }
  ] },
  { text: "当被误解时你会：", options: [
    { text: "A. 解释", score: "O" }, { text: "B. 沉默", score: "S" }, { text: "C. 无所谓", score: "W" }, { text: "D. 记住这件事", score: "R" }
  ] },
  // 第二部分 都市生存 (11-20)
  { text: "在危险环境中，你的第一反应是：", options: [
    { text: "A. 分析", score: "W" }, { text: "B. 保护同伴", score: "E" }, { text: "C. 进攻", score: "R" }, { text: "D. 撤退", score: "S" }
  ] },
  { text: "如果你在翼公司任职：", options: [
    { text: "A. 严格执行指标", score: "O" }, { text: "B. 试图改善制度", score: "I" }, { text: "C. 暗中破坏不合理规则", score: "R" }, { text: "D. 观察整个结构", score: "W" }
  ] },
  { text: "当上级下达不合理命令：", options: [
    { text: "A. 执行", score: "O" }, { text: "B. 质疑", score: "I" }, { text: "C. 表面执行", score: "S" }, { text: "D. 拒绝", score: "R" }
  ] },
  { text: "你更适合：", options: [
    { text: "A. 管理者", score: "O" }, { text: "B. 战斗者", score: "R" }, { text: "C. 谋划者", score: "W" }, { text: "D. 记录者", score: "I" }
  ] },
  { text: "如果你被背叛：", options: [
    { text: "A. 冷处理", score: "W" }, { text: "B. 复仇", score: "R" }, { text: "C. 理解原因", score: "E" }, { text: "D. 切断关系", score: "S" }
  ] },
  { text: "你如何面对失败：", options: [
    { text: "A. 总结", score: "S" }, { text: "B. 自责", score: "E" }, { text: "C. 愤怒", score: "R" }, { text: "D. 无感", score: "W" }
  ] },
  { text: "你更重视：", options: [
    { text: "A. 结果", score: "O" }, { text: "B. 过程", score: "I" }, { text: "C. 情感", score: "E" }, { text: "D. 真相", score: "W" }
  ] },
  { text: "当团队出现分歧：", options: [
    { text: "A. 强制统一", score: "O" }, { text: "B. 调解", score: "E" }, { text: "C. 等自然发展", score: "S" }, { text: "D. 利用分歧", score: "W" }
  ] },
  { text: "如果资源有限：", options: [
    { text: "A. 精准分配", score: "O" }, { text: "B. 优先重要的人", score: "E" }, { text: "C. 平均分配", score: "S" }, { text: "D. 自己少拿", score: "I" }
  ] },
  { text: "你愿意为理想付出：", options: [
    { text: "A. 时间", score: "S" }, { text: "B. 金钱", score: "O" }, { text: "C. 生命", score: "I" }, { text: "D. 一切", score: "R" }
  ] },
  // 第三部分 极端状态 (21-35)
  { text: "当你走到精神极限：", options: [
    { text: "A. 变冷静", score: "O" }, { text: "B. 崩溃", score: "E" }, { text: "C. 扭曲执念", score: "R" }, { text: "D. 彻底沉默", score: "W" }
  ] },
  { text: "你是否容易执着于某件事：", options: [
    { text: "A. 是", score: "R" }, { text: "B. 偶尔", score: "S" }, { text: "C. 不会", score: "O" }, { text: "D. 视意义而定", score: "I" }
  ] },
  { text: "如果世界与你为敌：", options: [
    { text: "A. 适应", score: "S" }, { text: "B. 改变世界", score: "I" }, { text: "C. 与世界对抗", score: "R" }, { text: "D. 旁观世界毁灭", score: "W" }
  ] },
  { text: "你对“实验”的态度：", options: [
    { text: "A. 必要", score: "W" }, { text: "B. 谨慎", score: "S" }, { text: "C. 反对", score: "E" }, { text: "D. 看对象", score: "O" }
  ] },
  { text: "你如何看待他人的痛苦：", options: [
    { text: "A. 数据", score: "W" }, { text: "B. 责任", score: "O" }, { text: "C. 共鸣", score: "E" }, { text: "D. 不属于我", score: "R" }
  ] },
  { text: "你更可能：", options: [
    { text: "A. 成为制定规则的人", score: "O" }, { text: "B. 成为执行者", score: "S" }, { text: "C. 成为反叛者", score: "R" }, { text: "D. 成为观察者", score: "W" }
  ] },
  { text: "你对权力的看法：", options: [
    { text: "A. 工具", score: "O" }, { text: "B. 负担", score: "E" }, { text: "C. 诱惑", score: "R" }, { text: "D. 危险", score: "W" }
  ] },
  { text: "当爱与目标冲突：", options: [
    { text: "A. 选目标", score: "O" }, { text: "B. 选爱", score: "E" }, { text: "C. 两者都要", score: "I" }, { text: "D. 放弃一切", score: "R" }
  ] },
  { text: "你是否害怕孤独：", options: [
    { text: "A. 不怕", score: "O" }, { text: "B. 有一点", score: "S" }, { text: "C. 非常怕", score: "E" }, { text: "D. 已习惯", score: "W" }
  ] },
  { text: "你认为自己最大的优点：", options: [
    { text: "A. 理性", score: "O" }, { text: "B. 坚持", score: "I" }, { text: "C. 同理心", score: "E" }, { text: "D. 冷静", score: "W" }
  ] },
  { text: "最大的缺点：", options: [
    { text: "A. 控制欲", score: "O" }, { text: "B. 偏执", score: "R" }, { text: "C. 过度共情", score: "E" }, { text: "D. 冷漠", score: "W" }
  ] },
  { text: "如果可以重来一次：", options: [
    { text: "A. 不需要", score: "S" }, { text: "B. 会改变关键选择", score: "I" }, { text: "C. 会改变一切", score: "R" }, { text: "D. 不确定", score: "W" }
  ] },
  { text: "你相信救赎吗：", options: [
    { text: "A. 相信", score: "I" }, { text: "B. 不信", score: "W" }, { text: "C. 只对少数人", score: "E" }, { text: "D. 无所谓", score: "S" }
  ] },
  { text: "你是否愿意成为“必要的恶”：", options: [
    { text: "A. 是", score: "O" }, { text: "B. 看情况", score: "S" }, { text: "C. 不愿", score: "E" }, { text: "D. 已经是", score: "R" }
  ] },
  { text: "当你失去一切：", options: [
    { text: "A. 重建", score: "S" }, { text: "B. 寻找意义", score: "I" }, { text: "C. 扭曲", score: "R" }, { text: "D. 消失", score: "W" }
  ] },
  // 第四部分 核心本质 (36-45)
  { text: "你更像：", options: [
    { text: "A. 规划者", score: "O" }, { text: "B. 守护者", score: "E" }, { text: "C. 追寻者", score: "I" }, { text: "D. 破坏者", score: "R" }
  ] },
  { text: "你更看重：", options: [
    { text: "A. 逻辑", score: "O" }, { text: "B. 情感", score: "E" }, { text: "C. 理念", score: "I" }, { text: "D. 结果", score: "S" }
  ] },
  { text: "你能接受世界没有意义吗：", options: [
    { text: "A. 能", score: "W" }, { text: "B. 不能", score: "E" }, { text: "C. 会创造意义", score: "I" }, { text: "D. 不在乎", score: "R" }
  ] },
  { text: "你更相信：", options: [
    { text: "A. 自己", score: "O" }, { text: "B. 团队", score: "E" }, { text: "C. 理念", score: "I" }, { text: "D. 无", score: "W" }
  ] },
  { text: "你对命运的态度：", options: [
    { text: "A. 规划", score: "O" }, { text: "B. 抗争", score: "R" }, { text: "C. 顺从", score: "S" }, { text: "D. 打碎", score: "I" }
  ] },
  { text: "你是否会隐藏真实想法：", options: [
    { text: "A. 经常", score: "W" }, { text: "B. 偶尔", score: "S" }, { text: "C. 很少", score: "E" }, { text: "D. 从不", score: "R" }
  ] },
  { text: "你更接近：", options: [
    { text: "A. 冷", score: "O" }, { text: "B. 热", score: "R" }, { text: "C. 灰", score: "I" }, { text: "D. 空", score: "W" }
  ] },
  { text: "如果必须选择一种结局：", options: [
    { text: "A. 成为顶端", score: "O" }, { text: "B. 守护他人", score: "E" }, { text: "C. 追寻真理", score: "I" }, { text: "D. 与世界同归", score: "R" }
  ] },
  { text: "你更想被记住为：", options: [
    { text: "A. 强者", score: "O" }, { text: "B. 领导者", score: "E" }, { text: "C. 理想者", score: "I" }, { text: "D. 无名者", score: "W" }
  ] },
  { text: "如果都市注定残酷，你会：", options: [
    { text: "A. 维持秩序", score: "O" }, { text: "B. 改变结构", score: "I" }, { text: "C. 燃烧自己", score: "E" }, { text: "D. 看着它运转", score: "W" }
  ] }
]

// 结果数据
export const characterResults = {
  angela: { name: "安吉拉", desc: "秩序 · 冰冷的建筑者\n\n你会建立体系。\n你会压制混乱。\n你也会在某个夜晚意识到——\n你是否也只是规则的一部分。\n\n✦ 生存率：高\n✦ 扭曲风险：低\n✦ 精神稳定度：高" },
  roland: { name: "罗兰", desc: "现实 · 无法折断的刀刃\n\n你不会成为最耀眼的人。\n但你会活到最后。\n代价是——\n你会失去一些再也回不来的东西。\n\n✦ 生存率：中高\n✦ 扭曲风险：中\n✦ 精神韧性：极强" },
  kali: { name: "卡莉", desc: "执念 · 撕裂规则的利刃\n\n你不会向制度低头。\n你会战斗到无法再站起。\n你会改变什么。\n或者，你会被写进悲剧。\n\n✦ 生存率：低\n✦ 扭曲风险：极高\n✦ 意志燃烧度：∞" },
  benjamin: { name: "本杰明", desc: "理想 · 长夜的举火者\n\n你愿意为未来付出现在。\n即使没有人理解。\n即使结局不属于你。\n\n✦ 生存率：中\n✦ 扭曲风险：高\n✦ 信念刻度：永不熄灭" },
  ishmael: { name: "以实玛利", desc: "共情 · 被浪潮冲刷的灵魂\n\n你会崩溃。\n但你不会放弃人性。\n即使它让你流血。\n\n✦ 生存率：中\n✦ 扭曲风险：中高\n✦ 深海之心：仍在跳动" }
}

// 维度映射
export const typeMap = {
  O: 'angela',
  S: 'roland',
  I: 'benjamin',
  E: 'ishmael',
  R: 'kali'
}