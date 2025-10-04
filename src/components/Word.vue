<template>
  <div class="word-container">
    <span
      v-for="(char, index) in textArray"
      :key="index"
      class="word-char"
      :style="{ animationDelay: `${index * 0.2}s` }"
    >
      {{ char }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const text = ref("你好，欢迎使用跳动文字效果！");
const textArray = ref<string[]>([]);

onMounted(() => {
  textArray.value = text.value.split("");
});
</script>

<style scoped>
.word-container {
  display: flex;
  font-size: 20px;
  color: black;
}

.word-char {
  opacity: 0;
  transform: translateY(20px);
  animation: bounceIn 0.3s forwards;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>