<template>
    <div class="ct">
        <h1>个人经历</h1>
        <div class="uni">
            <div class="uni-left">
                <div class="uni-info">
                    <img class="imgUn" src="@/assets/jingli/OSK.png">
                    <div>
                        <h2>重庆科技大学</h2>
                        <p>本科</p>
                        <p>智能科学与技术 2022.9-2026.6</p>
                    </div>
                </div>
            </div>
            <div class="uni-right">
                <p>主修课程</p>
                <ul>
                    <li>Web开发技术，Web程序设计基础，计算机网络，计算机组成原理，面向对象的程序设计方法，数据结构，数据库原理及应用，Python语言与应用，数据分析与挖掘技术</li>
                </ul>
            </div>
        </div>

        <!-- 项目一：文字在左，卡片在右 -->
        <div class="pj1 project-item">
            <div class="project-info">
                <h2>个人博客</h2>
                <p class="description">
                    利用vite脚手架创建项目，
                    采用vue3 +css + ts + pinia + axios 构建单页面应用。
                    使用 element-plus,inspira ui 组件库，Flex实现响应式设计，确保跨设备兼容性，
                    pinia + axios实现ai交流对话，
                    通过 CSS 样式和组件逻辑实现导航跳转，卡片悬停效果，明暗主题切换等

                </p>
                <div class="links">
                    <p>访问地址: <a href="https://hiyuan.xyz/" target="_blank">https://hiyuan.xyz/</a></p>
                    <p>项目地址: <a href="https://github.com/wwwjjyy/PersonalBG" target="_blank">https://github.com/wwwjjyy/PersonalBG</a></p>
                </div>
            </div>
            <div class="project-card">
                <Cardd1 />
            </div>
        </div>

        <!-- 项目二：卡片在左，文字在右 (对应图片中的“支付系统”) -->
        <div class="pj2 project-item">
            <div class="project-card">
                <Cardd2 />
            </div>
            <div class="project-info">
                <h2>智能视疲劳守护系统</h2>
                <p class="description">
                    基于Python+haar的人脸特征检测系统，通过摄像头实时识别面部特征，无人使用时自动关机节能。
                </p>
                <div class="links">
                    <p>项目地址: <a href="https://github.com/wwwjjyy/FACE" target="_blank">https://github.com/wwwjjyy/FACE</a></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import Cardd1 from './Cardd1.vue';
import Cardd2 from './Cardd2.vue';
</script>

<style>
/* ... 您之前的 .ct, .uni 等样式保持不变 ... */
.ct {
    padding: 150px 0 20px; /* 调整了上下间距，使其不那么空旷 */
}

.ct>h1 {
    font-weight: 540;
    font-size: 3rem;
    text-align: center;
    margin-bottom: 80px; /* 增加标题和下方内容的间距 */
}

.uni {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    padding-top: 30px;
    width: 80%;
    /* height: 300px; - 移除固定高度，让内容自适应 */
    margin-bottom: 100px; /* 增加与项目部分的间距 */
}

.uni-left {
    flex: 0 0 50%;
}

.uni-left p {
    font-size: 20px;
}

.uni-left h2 {
    font-size: 20px;
    font-weight: bold;
}

.uni-info {
    display: flex;
    align-items: flex-start;
}

.imgUn {
    width: 34px;
    height: 34px;
    margin-right: 10px;
}

.uni-right {
    flex: 0 0 50%;
    font-size: 20px;
}

.uni-right p {
    font-weight: bold;
    margin-bottom: 5px;
}

.uni-right ul {
    list-style-type: disc;
    padding-left: 20px;
}

/* --- 以下是为项目布局新增和修改的样式 --- */

/* 通用项目容器样式 */
.project-item {
    display: flex;
    align-items: center;  /* 核心：让左右两边的内容垂直居中对齐 */
    gap: 60px;            /* 核心：在卡片和文字之间创建间隙 */
    margin: 120px auto;   /* 增加每个项目之间的垂直间距 */
    width: 80%;
}
 
/* 项目的左右两个子容器（卡片和信息） */
.project-item > div {
    flex: 1; /* 让两个子容器平分宽度 */
}

/* 项目信息部分的样式 */
.project-info h2 {
    font-size: 2.5rem; /* 字体更大，作为焦点 */
    font-weight: 600;
    margin-bottom: 20px;
}

.project-info .description {
    font-size: 1.1rem;
    line-height: 1.7;   /* 增加行高，更易读 */
    color: #888;       /* 描述文字颜色稍浅 */
    margin-bottom: 30px;
}

.project-info .links p {
    font-size: 1rem;
    color: #666;
    margin-bottom: 8px;
}

.project-info .links a {
    color: #4a90e2; /* 链接颜色 */
    text-decoration: none;
    transition: color 0.3s ease;
}

.project-info .links a:hover {
    color: #2a6db9;
    text-decoration: underline;
}
@media (max-width: 1000px) {
    .ct {
        padding: 100px 0 20px;
    }
    
    .ct>h1 {
        font-size: 2.2rem;
        margin-bottom: 50px;
    }
    
    .uni, .project-item {
        gap: 30px; /* 减小间距 */
        margin: 60px auto;
    }
    
    .project-item {
        flex-direction: column; /* 手机端改为垂直布局 */
    }
    
    /* 反转第二个项目的顺序，保持视觉一致性 */
    .pj2 {
        flex-direction: column-reverse;
    }
    
    .uni-right, .uni-left p {
        font-size: 1rem;
    }
}
</style>