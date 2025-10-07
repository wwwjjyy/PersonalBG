<template>
    <div class="container" ref="container">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="box"   
        :class="{ visible: visibleBoxes[index] }   "
        :style="{
            backgroundImage: `url(../src/assets/tuPian/tp_${index+1}.jpeg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }"
      >
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  
  const boxes = Array(10).fill(null);
  const visibleBoxes = ref<boolean[]>(Array(5).fill(false)); 
  const container = ref<HTMLElement | null>(null);
  
  const handleScroll = () => {
    if (!container.value) return;
  
    const rect = container.value.getBoundingClientRect();
    const containerHeight = rect.height;
    const viewportHeight = window.innerHeight;
  
    const scrollProgress = Math.min(
      Math.max(0, viewportHeight - rect.top),
      containerHeight
    );
  
    // 根据滚动进度设置每个盒子的可见状态
    const boxHeight = containerHeight / boxes.length;
    boxes.forEach((_, index) => {
        if(index<5){
            visibleBoxes.value[index] = scrollProgress >= boxHeight *  index;
        }else{
            visibleBoxes.value[9-(index-5)] = scrollProgress >= boxHeight *  index;
        }
    });
  };
  
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  
  <style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;  
  align-items: center;
  justify-content: center;
  height: 110vh;
  padding: 10px 10px;
  overflow: hidden;
}

/* 每行固定 5 个：5 列，4 个缝隙 */
.box {
  width: calc((95% - 4 *12px) / 5);
  height: 49%;
  color: white;
  border-radius: 20px;
  opacity: 0;
  filter: saturate(0%);
  transform-origin: center center;
  z-index: 1;
  transform: translateY(50px);
  box-shadow:   5px 12px 4px rgba(0, 0, 0, 0.2);
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    filter 0.5s ease;
}

.box.visible {
  opacity: 1;
  transform: translateY(0);
}

.box:hover {
  filter: saturate(100%);
  transform: translateY(0) scale(0.95);
  z-index: 10;
}
  </style>