<template>
  <div class="test-container">
    <div class="test-header">
      <h1>人格投影测试</h1>
      <div class="sub">镜世界人格投影</div>
    </div>
    <div class="progress-area">
      <span>人格观测</span>
      <span class="counter">{{ currentIndex + 1 }} / {{ questions.length }}</span>
    </div>
    <div class="question-area" v-if="!showResult">
      <div class="question-text">{{ currentQuestion.text }}</div>
      <div class="options-grid">
        <button
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          class="option-btn"
          :class="{ selected: answers[currentIndex] === index }"
          @click="selectOption(index)"
        >
          {{ option.text }}
        </button>
      </div>
    </div>
    <div class="nav-buttons" v-if="!showResult">
      <button class="nav-btn" @click="prevQuestion" :disabled="currentIndex === 0">◀ 上一题</button>
      <button class="nav-btn reset" @click="resetTest">⟳ 重置</button>
      <button class="nav-btn primary" @click="nextQuestion" v-if="currentIndex < questions.length - 1">下一题 ▶</button>
    </div>

    <!-- 神秘结算按钮区域 -->
    <div class="settle-area" v-if="currentIndex === questions.length - 1 && !showResult">
      <button class="settle-button" @click="showResultFn">✦ 揭 示 人 格 ✦</button>
    </div>

    <div id="resultArea" class="result-area" :class="{ visible: showResult }">
      <div class="result-card">
        <div id="resultImageContainer" class="result-image">
          <img v-if="result.imageBase64" :src="result.imageBase64" :alt="result.name" />
          <span v-else>未找到图像</span>
        </div>
        <div class="result-name">{{ result.name }}</div>
        <div class="result-desc">{{ result.desc }}</div>
      </div>
    </div>
    <footer>「抉择即是镜世界的人格倒影 · 唯有完成全部观测方可提取」</footer>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

// 题目数据
const questions = [
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
const characterResults = {
  angela: { name: "安吉拉", desc: "秩序 · 冰冷的建筑者\n\n你会建立体系。\n你会压制混乱。\n你也会在某个夜晚意识到——\n你是否也只是规则的一部分。\n\n✦ 生存率：高\n✦ 扭曲风险：低\n✦ 精神稳定度：高" },
  roland: { name: "罗兰", desc: "现实 · 无法折断的刀刃\n\n你不会成为最耀眼的人。\n但你会活到最后。\n代价是——\n你会失去一些再也回不来的东西。\n\n✦ 生存率：中高\n✦ 扭曲风险：中\n✦ 精神韧性：极强" },
  kali: { name: "卡莉", desc: "执念 · 撕裂规则的利刃\n\n你不会向制度低头。\n你会战斗到无法再站起。\n你会改变什么。\n或者，你会被写进悲剧。\n\n✦ 生存率：低\n✦ 扭曲风险：极高\n✦ 意志燃烧度：∞" },
  benjamin: { name: "本杰明", desc: "理想 · 长夜的举火者\n\n你愿意为未来付出现在。\n即使没有人理解。\n即使结局不属于你。\n\n✦ 生存率：中\n✦ 扭曲风险：高\n✦ 信念刻度：永不熄灭" },
  ishmael: { name: "以实玛利", desc: "共情 · 被浪潮冲刷的灵魂\n\n你会崩溃。\n但你不会放弃人性。\n即使它让你流血。\n\n✦ 生存率：中\n✦ 扭曲风险：中高\n✦ 深海之心：仍在跳动" }
}

// 状态
const currentIndex = ref(0)
const answers = ref([])
const showResult = ref(false)
const scores = reactive({
  O: 0, S: 0, I: 0, E: 0, R: 0, W: 0
})
const result = ref({ name: '', desc: '', imageBase64: '' })

// 初始化答案数组
for (let i = 0; i < questions.length; i++) {
  answers.value.push(null)
}

// 计算当前题目
const currentQuestion = computed(() => questions[currentIndex.value])

// 选择选项
const selectOption = (index) => {
  answers.value[currentIndex.value] = index
}

// 上一题
const prevQuestion = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}

// 下一题
const nextQuestion = () => {
  if (currentIndex.value < questions.length - 1) {
    currentIndex.value++
  }
}

// 重置测试
const resetTest = () => {
  currentIndex.value = 0
  answers.value = []
  for (let i = 0; i < questions.length; i++) {
    answers.value.push(null)
  }
  showResult.value = false
  // 重置分数
  Object.keys(scores).forEach(key => {
    scores[key] = 0
  })
}

// 计算结果
const calculateResult = () => {
  // 统计分数
  Object.keys(scores).forEach(key => {
    scores[key] = 0
  })
  
  for (let i = 0; i < questions.length; i++) {
    const answerIndex = answers.value[i]
    if (answerIndex !== null && answerIndex !== undefined) {
      const score = questions[i].options[answerIndex].score
      if (score && scores.hasOwnProperty(score)) {
        scores[score]++
      }
    }
  }
  
  // 找出最高分
  let maxScore = 0
  let maxType = 'O'
  
  Object.keys(scores).forEach(key => {
    if (scores[key] > maxScore) {
      maxScore = scores[key]
      maxType = key
    }
  })
  
  // 根据最高分确定角色
  const typeMap = {
    O: 'angela',
    S: 'roland',
    I: 'benjamin',
    E: 'ishmael',
    R: 'kali'
  }
  
  const resultKey = typeMap[maxType] || 'angela'
  result.value = characterResults[resultKey]
}

// 显示结果
const showResultFn = () => {
  calculateResult()
  showResult.value = true
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0b0c0f;
  font-family: 'Inter', system-ui, 'Segoe UI', 'Roboto', monospace;
  padding: 1.5rem 1rem;
  color: #e3e4e8;
}

.test-container {
  max-width: 780px;
  margin: 0 auto;
  background: #14161c;
  border-radius: 36px;
  box-shadow: 0 20px 35px -12px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255,255,255,0.05);
  overflow: hidden;
  transition: all 0.2s;
  border: 1px solid #2a2c34;
}

.test-header {
  padding: 1.5rem 1.8rem 0.8rem;
  border-bottom: 1px solid #262a32;
  background: #0f1117;
}

.test-header h1 {
  font-size: 1.9rem;
  font-weight: 550;
  letter-spacing: -0.5px;
  background: linear-gradient(130deg, #cfcfdd, #a8abb9);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 0.25rem;
}

.sub {
  font-size: 0.7rem;
  color: #7e8493;
  letter-spacing: 0.3px;
  margin-top: 4px;
}

.progress-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 1.8rem;
  background: #0c0e13;
  border-bottom: 1px solid #22262e;
  font-size: 0.8rem;
  color: #b9beca;
}

.counter {
  background: #20242c;
  padding: 0.2rem 0.8rem;
  border-radius: 30px;
  font-family: monospace;
  font-weight: 500;
  font-size: 0.75rem;
  color: #ccd6f0;
}

.question-area {
  padding: 2rem 1.8rem 1.2rem;
}

.question-text {
  font-size: 1.45rem;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 2rem;
  color: #f0f2f5;
  letter-spacing: -0.2px;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 1.8rem;
}

.option-btn {
  background: #1e212a;
  border: 1px solid #2f3340;
  border-radius: 60px;
  padding: 0.8rem 1.3rem;
  font-size: 0.95rem;
  text-align: left;
  font-weight: 450;
  color: #dddfe5;
  cursor: pointer;
  transition: 0.2s ease;
  letter-spacing: -0.2px;
}

.option-btn:hover {
  background: #2b2f3a;
  border-color: #4c5264;
  transform: translateY(-1px);
}

.option-btn.selected {
  background: #3c3f4f;
  border-color: #8a8fa0;
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}

.nav-buttons {
  display: flex;
  justify-content: space-between;
  padding: 0.2rem 1.8rem 1rem;
  gap: 1rem;
}

.nav-btn {
  background: transparent;
  border: 1px solid #323742;
  padding: 0.6rem 1rem;
  border-radius: 48px;
  font-size: 0.85rem;
  font-weight: 480;
  cursor: pointer;
  transition: 0.2s;
  color: #cbd0db;
  flex: 1;
  text-align: center;
}

.nav-btn.reset {
  border-color: #4e3a2e;
  color: #dbbd9a;
}

.nav-btn.reset:hover {
  background: #2a241e;
  border-color: #aa8b6e;
}

.nav-btn.primary {
  background: #2d313e;
  border-color: #5f667b;
  color: #eef2ff;
}

.nav-btn.primary:hover {
  background: #3e4355;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* 神秘结算按钮区域 */
.settle-area {
  padding: 0.2rem 1.8rem 1.5rem;
  display: flex;
  justify-content: center;
}

.settle-button {
  background: linear-gradient(145deg, #252a36, #191d26);
  border: 1px solid #5f6a80;
  border-radius: 60px;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: #eaeef5;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  width: 70%;
  text-align: center;
}

.settle-button:hover {
  background: linear-gradient(145deg, #2f3545, #1e222e);
  border-color: #8d99b0;
  transform: scale(1.02);
  letter-spacing: 4px;
  text-shadow: 0 0 3px rgba(220, 200, 140, 0.5);
}

/* 结果区域暗色风格 + 渐现动画 */
.result-area {
  margin-top: 0.5rem;
  border-top: 1px solid #262a32;
  background: #11131a;
  padding: 1.8rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1), transform 0.5s ease;
}

.result-area.visible {
  opacity: 1;
  transform: translateY(0);
}

.result-card {
  background: #181c24;
  border-radius: 28px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.3);
  border: 1px solid #2a2e38;
}

.result-image {
  max-width: 100%;
  border-radius: 24px;
  margin-bottom: 1.2rem;
  background: #0f1119;
  min-height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  color: #7c8292;
  overflow: hidden;
}

.result-image img {
  max-width: 100%;
  border-radius: 20px;
  display: block;
}

.result-name {
  font-size: 1.8rem;
  font-weight: 580;
  margin: 0.5rem 0 0.6rem;
  letter-spacing: -0.3px;
  background: linear-gradient(135deg, #f0e6cf, #bcafa2);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.result-desc {
  font-size: 0.92rem;
  line-height: 1.5;
  color: #b9bfd0;
  white-space: pre-wrap;
  text-align: left;
  margin-top: 12px;
}

footer {
  text-align: center;
  font-size: 0.65rem;
  color: #454a57;
  padding: 1rem;
  background: #0c0e13;
  border-top: 1px solid #20242c;
}

@media (max-width: 580px) {
  .question-text {
    font-size: 1.2rem;
  }
  .option-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
  .nav-btn {
    padding: 0.5rem 0.6rem;
  }
  .settle-button {
    width: 90%;
    font-size: 0.9rem;
  }
}
</style>