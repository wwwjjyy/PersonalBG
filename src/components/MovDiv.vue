<template>
  <div class="container" ref="container">
    <div
      v-for="(box, index) in boxes"
      :key="index"
      class="box"
      :class="{ visible: visibleBoxes[index] }"
      :style="{
        backgroundImage: `url(../src/assets/tuPian/tp_${index + 1}.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// script 逻辑保持不变，因为动画触发机制仍然适用
const boxes = Array(12).fill(null);
const visibleBoxes = ref<boolean[]>(Array(12).fill(false)); // 注意: 数组长度应与 boxes 匹配
const container = ref<HTMLElement | null>(null);

const handleScroll = () => {
  if (!container.value) return;

  const rect = container.value.getBoundingClientRect();
  const containerHeight = rect.height;
  const viewportHeight = window.innerHeight;

  // 触发动画的阈值，当容器顶部进入视口下方 triggerPoint 时开始动画
  const triggerPoint = viewportHeight * 0.8; 

  if (rect.top < triggerPoint) {
    const scrollProgress = Math.min(
      Math.max(0, triggerPoint - rect.top),
      containerHeight + triggerPoint // 确保滚动到底部时所有动画都能完成
    );

    // 总的动画行程
    const totalAnimationHeight = containerHeight / 1.5; // 让动画在滚动完容器2/3时就全部完成，感觉更灵敏

    // 根据滚动进度设置每个盒子的可见状态
    // 这里可以设计一个更有趣的出现顺序，而不是简单的线性或对称
    const step = totalAnimationHeight / boxes.length;
    boxes.forEach((_, index) => {
        // 让动画出现得更随机、自然一些
        const delayFactor = (index % 3) * 50; // 根据列给一个小的延迟错位
        if (scrollProgress >= step * index + delayFactor) {
            visibleBoxes.value[index] = true;
        }
    });
  } else {
    // 当容器完全滚动出视口上方时，可以重置状态（可选）
    // visibleBoxes.value.fill(false);
  }
};

onMounted(() => {
  // 初始检查一次，如果刷新时就在位置上，则直接显示
  handleScroll(); 
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.container {
  display: grid; /* 使用 CSS Grid 布局 */
  grid-template-columns: repeat(6, 1fr); /* 定义 6 个等宽的列 */
  grid-template-rows: repeat(4, 24vh);    /* 定义 4 个等高的行，总高度接近 100vh */
  gap: 12px;
  height: 100vh;
  padding: 12px; /* 给容器一些内边距，避免元素贴边 */
  box-sizing: border-box;
}

.box {
  /* 移除固定的 width 和 height，由 grid area 决定 */
  color: white;
  border-radius: 20px;
  opacity: 0;
  filter: saturate(0%);
  transform: translateY(50px) scale(0.95); /* 初始状态稍微缩小，增加动感 */
  transition:
    opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    filter 0.5s ease;
  overflow: hidden; /* 确保背景图片不会溢出圆角 */
}

.box.visible {
  opacity: 1;
  transform: translateY(0) scale(1); /* 恢复正常大小 */
}

.box:hover {
  filter: saturate(100%);
  transform: scale(1.05); /* 悬浮时放大效果更明显 */
  z-index: 10;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2); /* 增加阴影提升层次感 */
}

/* --- 使用 :nth-child 为每个盒子分配 grid 区域，创造错落感 --- */
/* grid-area: row-start / col-start / row-end / col-end; */

.box:nth-child(1) {
  grid-area: 1 / 1 / 3 / 3; /* 第1个盒子：占据1-2行，1-2列 (大方块) */
}

.box:nth-child(2) {
  grid-area: 1 / 3 / 2 / 5; /* 第2个盒子：占据第1行，3-4列 (横向矩形) */
}

.box:nth-child(3) {
  grid-area: 1 / 5 / 3 / 7; /* 第3个盒子：占据1-2行，5-6列 (竖向矩形) */
}

.box:nth-child(4) {
  grid-area: 2 / 3 / 4 / 5; /* 第4个盒子：占据2-3行，3-4列 (竖向矩形) */
}

.box:nth-child(5) {
  grid-area: 3 / 1 / 4 / 3; /* 第5个盒子：占据第3行，1-2列 (横向矩形) */
}

.box:nth-child(6) {
  grid-area: 4 / 1 / 5 / 2; /* 第6个盒子：小方块 */
}

.box:nth-child(7) {
  grid-area: 4 / 2 / 5 / 3; /* 第7个盒子：小方块 */
}

.box:nth-child(8) {
  grid-area: 3 / 5 / 5 / 7; /* 第8个盒子：占据3-4行，5-6列 (大方块) */
}

.box:nth-child(9) {
  grid-area: 4 / 5 / 5 / 6; /* 与第8个重叠，但可以通过 hover 交互看到，或者调整布局 */
   /* 注意：这里的设计让 8 和 9 重叠了，我们调整一下布局 */
}

/* --- 重新设计的布局，避免重叠 --- */
.box:nth-child(1) { grid-area: 1 / 1 / 3 / 3; } /* 大方块 */
.box:nth-child(2) { grid-area: 1 / 3 / 2 / 5; } /* 横向矩形 */
.box:nth-child(3) { grid-area: 1 / 5 / 3 / 7; } /* 竖向矩形 */
.box:nth-child(4) { grid-area: 3 / 1 / 5 / 3; } /* 竖向矩形 */
.box:nth-child(5) { grid-area: 2 / 3 / 4 / 5; } /* 中间的竖向矩形 */
.box:nth-child(6) { grid-area: 4 / 3 / 5 / 4; } /* 小方块 */
.box:nth-child(7) { grid-area: 4 / 4 / 5 / 5; } /* 小方块 */
.box:nth-child(8) { grid-area: 3 / 5 / 5 / 7; } /* 大方块 */

/* 剩下的 4 个可以用来填补空隙或创建更复杂的布局 */
.box:nth-child(9) { grid-area: 2 / 5 / 3 / 6; }
.box:nth-child(10) { grid-area: 2 / 6 / 3 / 7; }
.box:nth-child(11) { grid-area: 3 / 3 / 4 / 4; }
.box:nth-child(12) { grid-area: 3 / 4 / 4 / 5; }
</style>