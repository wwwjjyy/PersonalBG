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
        <div class="pj1">
            <div></div>
            <div></div>
        </div>
        <div class="pj2">
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>

<style>
.ct>h1 {
    font-weight: 540;
    font-size: 3rem;
    text-align: center;
    margin: 100px 0 50px;
}

.uni {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 auto;
    width: 80%; /* 可根据实际情况调整宽度 */
}

.uni-left {
    flex: 0 0 50%; /* 左侧占比，可调整 */
}

.uni-left p{
    font-size: 20px;

}

.uni-info {
    display: flex;
    align-items: flex-start;
}

.imgUn {
    position: relative;
    top:20px;
    width: 40px; /* 图片大小可调整 */
    height: 40px;
    margin-right: 10px;
}

.uni-right {
    flex: 0 0 50%; /* 右侧占比，可调整 */
    left: 0;
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

.pj1,
.pj2 {
    display: flex;
    margin: 20px auto;
    width: 80%; 
}
</style>