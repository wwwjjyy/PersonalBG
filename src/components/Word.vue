<template>
  <div class="word-container">
    <span v-for="(char, index) in textArray" :key="index" class="word-char"
      :style="{ animationDelay: `${index * 0.2}s`,fontSize: fsize }">
      {{ char }}
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const textArray = ref<string[]>([]);

const props = defineProps<{
  text: string;
  fsize: string;
}>();
onMounted(() => {
  textArray.value = props.text.split("");
});
</script>

<style scoped>
.word-container {
  display: flex;
  color: black;
}

.word-char {
  opacity: 0;
  transform: translateY(20px);
  animation: bounceIn 0.4s forwards;
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  80% {
    opacity: 1;
    transform: translateY(-5px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>