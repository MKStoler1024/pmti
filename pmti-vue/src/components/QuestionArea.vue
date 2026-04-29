<template>
  <div class="question-area">
    <div class="question-text">{{ question.text }}</div>
    <div class="options-grid">
      <button
        v-for="(option, index) in question.options"
        :key="index"
        class="option-btn"
        :class="{ selected: selectedIndex === index }"
        @click="$emit('select', index)"
      >
        {{ option.text }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  question: {
    type: Object,
    required: true
  },
  selectedIndex: {
    type: Number,
    default: null
  }
})

defineEmits(['select'])
</script>

<style scoped>
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

@media (max-width: 580px) {
  .question-text {
    font-size: 1.2rem;
  }
  .option-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
}
</style>