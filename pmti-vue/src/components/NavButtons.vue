<template>
  <div class="nav-buttons">
    <button 
      class="nav-btn" 
      @click="$emit('prev')" 
      :disabled="current === 0"
    >
      ◀ 上一题
    </button>
    <button class="nav-btn reset" @click="$emit('reset')">
      ⟳ 重置
    </button>
    <button 
      class="nav-btn primary" 
      @click="$emit('next')" 
      v-if="current < total - 1"
    >
      下一题 ▶
    </button>
  </div>
</template>

<script setup>
defineProps({
  current: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  }
})

defineEmits(['prev', 'next', 'reset'])
</script>

<style scoped>
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

@media (max-width: 580px) {
  .nav-btn {
    padding: 0.5rem 0.6rem;
  }
}
</style>