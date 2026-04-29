<template>
  <div class="settle-area">
    <button class="settle-button" @click="$emit('settle')">
      ✦ 揭 示 人 格 ✦
    </button>
  </div>
</template>

<script setup>
defineEmits(['settle'])
</script>

<style scoped>
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

@media (max-width: 580px) {
  .settle-button {
    width: 90%;
    font-size: 0.9rem;
  }
}
</style>