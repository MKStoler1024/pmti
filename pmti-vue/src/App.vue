<template>
  <div class="test-container">
    <TestHeader />
    <ProgressBar :current="currentIndex + 1" :total="questions.length" />
    
    <QuestionArea 
      v-if="!showResult" 
      :question="currentQuestion" 
      :selected-index="answers[currentIndex]"
      @select="selectOption"
    />
    
    <NavButtons 
      v-if="!showResult"
      :current="currentIndex" 
      :total="questions.length"
      @prev="prevQuestion"
      @next="nextQuestion"
      @reset="resetTest"
    />

    <SettleButton 
      v-if="currentIndex === questions.length - 1 && !showResult"
      @settle="showResultFn"
    />

    <ResultArea :show="showResult" :result="result" />
    
    <footer>「抉择即是镜世界的人格倒影 · 唯有完成全部观测方可提取」</footer>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { questions, characterResults, typeMap } from './data/questions.js'
import TestHeader from './components/TestHeader.vue'
import ProgressBar from './components/ProgressBar.vue'
import QuestionArea from './components/QuestionArea.vue'
import NavButtons from './components/NavButtons.vue'
import SettleButton from './components/SettleButton.vue'
import ResultArea from './components/ResultArea.vue'

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
  Object.keys(scores).forEach(key => {
    scores[key] = 0
  })
}

// 计算结果
const calculateResult = () => {
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
  
  let maxScore = 0
  let maxType = 'O'
  
  Object.keys(scores).forEach(key => {
    if (scores[key] > maxScore) {
      maxScore = scores[key]
      maxType = key
    }
  })
  
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

footer {
  text-align: center;
  font-size: 0.65rem;
  color: #454a57;
  padding: 1rem;
  background: #0c0e13;
  border-top: 1px solid #20242c;
}
</style>