<template>
  <div class="progress-area">
    <span>人格观测</span>
    <span class="counter">{{ current }} / {{ total }}</span>
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
</script>

<style scoped>
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
</style>