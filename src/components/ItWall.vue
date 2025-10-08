<template>        
    <div class="grid-container">
        <!-- 使用 v-for 循环遍历 gridItems 数组来生成格子 -->
        <div v-for="item in gridItems" :key="item.id" class="grid-item">
            <img :src="item.image" :alt="item.text" class="grid-item-icon" />
            <p class="grid-item-text">{{ item.text }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// 使用 ref 创建一个响应式数组来存储格子数据
// 您可以轻松地在这里添加、删除或修改项目
const gridItems = ref([
    {
        id: 1,
        text: 'Python',
        // 图标来自 https://www.svgrepo.com/ 或其他图标库
        image: 'https://www.svgrepo.com/show/374016/python.svg',
    },
    {
        id: 2,
        text: 'JMeter',
        image: 'https://jmeter.apache.org/images/jmeter_square.svg',
    },
    {
        id: 3,
        text: 'Postman',
        image: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
    },
    {
        id: 4,
        text: 'Selenium',
        image: 'https://www.svgrepo.com/show/374069/selenium.svg',
    },
    {
        id: 5,
        text: '功能测试',
        image: 'https://www.svgrepo.com/show/443210/testing.svg',
    },
    {
        id: 6,
        text: '自动化测试',
        image: 'https://www.svgrepo.com/show/404958/briefcase-check.svg',
    },
    {
        id: 7,
        text: 'Git',
        image: 'https://www.svgrepo.com/show/373623/git.svg',
    },
    {
        id: 8,
        text: 'MySQL',
        image: 'https://www.svgrepo.com/show/373848/mysql.svg',
    },
    {
        id: 9,
        text: 'Linux',
        image: 'https://www.svgrepo.com/show/373758/linux.svg',
    },
]);
</script>

<style scoped>
/* 网格容器样式 */
.grid-container {
    display: grid;
    /* 创建一个三列的网格，每列宽度平分剩余空间 */
    grid-template-columns: repeat(3, 1fr);
    /* 设置格子之间的间距 */
    gap: 20px;
    padding: 20px;
    /* 浅灰色背景，让卡片更突出 */
    width: 100%;
    margin: auto;
    /* 居中显示 */
}

/* 单个格子的样式 */
.grid-item {
    display: flex;
    /* 垂直排列内部元素（图片和文字） */
    flex-direction: column;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    border: 3px solid #030303;
    /* 圆角 */
    border-radius: 12px;
    /* 阴影效果 */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
    /* 过渡效果，让悬停动画更平滑 */
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
    height: 300px;
    /* 固定高度，让格子更整齐 */
}

/* 鼠标悬停在格子上的效果 */
.grid-item:hover {
    /* 向上轻微移动 */
    transform: translateY(-5px);
    /* 阴影加深 */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    /* 背景变色，模仿图片中的选中效果 */
    background-color: #000000;
    
}
.grid-item:hover .grid-item-text {
  color: #ffffff;
}

/* 格子中图标的样式 */
.grid-item-icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
    /* 保证图片比例不失真 */
    margin-bottom: 15px;
    /* 图片和文字之间的距离 */
}

/* 格子中文字的样式 */
.grid-item-text {
    margin: 0;
    /* 移除 p 标签的默认边距 */
    font-size: 16px;
    color: #333;
    font-weight: 500;
}

/* 响应式设计：在小屏幕上（如手机），每行显示2个格子 */
@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* 在更小的屏幕上，每行显示1个格子 */
@media (max-width: 480px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
</style>