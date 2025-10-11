<template>
    <div class="container" ref="container">
      <div
        v-for="(box, index) in boxes"
        :key="index"
        class="box"   
        :class="{ visible: visibleBoxes[index] }   "
        :style="{
            backgroundImage: `url(${box.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }"
      >
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from "vue";
  
  import tp1 from '@/assets/tuPian/tp_1.jpeg';
  import tp2 from '@/assets/tuPian/tp_2.jpeg';
  import tp3 from '@/assets/tuPian/tp_3.jpeg';
  import tp4 from '@/assets/tuPian/tp_4.jpeg';
  import tp5 from '@/assets/tuPian/tp_5.jpeg';
  import tp6 from '@/assets/tuPian/tp_6.jpeg';
  import tp7 from '@/assets/tuPian/tp_7.jpeg';
  import tp8 from '@/assets/tuPian/tp_8.jpeg';
  import tp9 from '@/assets/tuPian/tp_9.jpeg';
  import tp10 from '@/assets/tuPian/tp_10.jpeg';
  
  // 创建包含图片的数组
  const boxes = [
    { image: tp1 },
    { image: tp2 },
    { image: tp3 },
    { image: tp4 },
    { image: tp5 },
    { image: tp6 },
    { image: tp7 },
    { image: tp8 },
    { image: tp9 },
    { image: tp10 }
  ];

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
  gap: 15px;  
  align-items: center;
  justify-content: center;
  height: 140vh;
  padding: 10px 1%;
  overflow: hidden;
}

/* 每行固定 5 个：5 列，4 个缝隙 */
.box {
  width: calc((99% - 4 *15px) / 5);
  height: 48%;
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