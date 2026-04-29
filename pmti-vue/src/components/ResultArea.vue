<template>
  <div class="result-area" :class="{ visible: show }">
    <div class="result-card">
      <div class="result-image">
        <span v-if="!result.imageBase64">未找到图像</span>
      </div>
      <div class="result-name">{{ result.name }}</div>
      <div class="result-desc">{{ result.desc }}</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  result: {
    type: Object,
    default: () => ({ name: '', desc: '' })
  }
})
</script>

<style scoped>
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
</style>