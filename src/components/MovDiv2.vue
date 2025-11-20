<template>
  <div class="container" ref="container">
    <div
      v-for="(box, index) in boxes"
      :key="index"
      class="box"
      :class="{ visible: visibleBoxes[index] }"
      v-lazy-load="() => loadImage(box, index)"
      @click="openPreview(box.image)" 
    >
      <img
        v-if="box.loaded"
        :src="box.image"
        :alt="`Image ${index}`"
        class="box-img"
      >
    </div>

    <!-- 图片预览 -->
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="showPreview" class="preview-overlay" @click="closePreview">
          <div class="preview-content" @click.stop>
            <img :src="currentPreviewImage" class="preview-image" alt="Preview" />
          </div>
        </div>
      </Transition>
    </Teleport>
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

const boxes = ref([
  { image: tp1, loaded: false },
  { image: tp2, loaded: false },
  { image: tp3, loaded: false },
  { image: tp4, loaded: false },
  { image: tp5, loaded: false },
  { image: tp6, loaded: false },
  { image: tp7, loaded: false },
  { image: tp8, loaded: false },
  { image: tp9, loaded: false },
  { image: tp10, loaded: false }
]);


const loadImage = (box: any, index: number) => {
  if (boxes.value && boxes.value[index]) {
    boxes.value[index].loaded = true;
  }
}

const visibleBoxes = ref<boolean[]>(Array(10).fill(false)); 
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

  const boxHeight = containerHeight / boxes.value.length;
  boxes.value.forEach((_, index) => {
    if (index < 5) {
      visibleBoxes.value[index] = scrollProgress >= boxHeight * index;
    } else {
      visibleBoxes.value[9 - (index - 5)] = scrollProgress >= boxHeight * index;
    }
  });
};

const showPreview = ref(false);
const currentPreviewImage = ref('');

const openPreview = (imageSrc: string) => {
  if (!imageSrc) return;
  currentPreviewImage.value = imageSrc;
  showPreview.value = true;
  document.body.style.overflow = 'hidden';
};

const closePreview = () => {
  showPreview.value = false;
  currentPreviewImage.value = '';
  document.body.style.overflow = '';
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  document.body.style.overflow = ''; 
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
  width: calc((99% - 4 * 15px) / 5);
  height: 48%;
  color: white;
  border-radius: 20px;
  opacity: 0;
  filter: saturate(0%);
  transform-origin: center center;
  z-index: 1;
  transform: translateY(50px);
  box-shadow: 5px 12px 4px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease,
    filter 0.5s ease;
  cursor: zoom-in; 
}

.box-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
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

.preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.preview-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-image {
  max-width: 100%;
  max-height: 90vh;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  object-fit: contain;
}

/* 进出效果 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>