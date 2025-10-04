

<template>
  <div class="nav" >
    <a href=""  class="nF" @click="tiaoZ($event, 'zhuYe') ">
      <el-icon :size="20">
      <User /></el-icon>  主页</a>

    <div class="cNav">
      <a href="" @click="tiaoZ($event, 'jingLi')">个人经历</a>
      <a href=""  @click="tiaoZ($event, 'xiangMu')">个人项目</a>
      <a href="" @click="tiaoZ($event, 'jiNeng')">个人技能</a>
      <a href="" @click="tiaoZ($event, 'lianXi')">联系方式</a>
    </div>
  </div>    
  <!-- //主页 -->
  <div id="zhuYe">
    <Word/>
  </div>
  <!-- 个人经历 -->
  <div id="jingLi"></div>
  <!-- 个人项目 -->
  <div id="xiangMu"></div>
  <!-- 个人技能 -->
  <div id="jiNeng"></div>
  <!-- 联系方式 -->
  <div id="lianXi"></div>


</template>

<script setup lang="ts">
import Word from './components/Word.vue';
import useNavscoll from './hooks/useNavscoll';
const { tiaoZ } = useNavscoll('.nav');
</script>

<style scoped>
.nav .cNav {
  display: flex;
  gap: 15px;
}

.nav .nF {
  position: fixed;
  left: 0;
}

.nav a {
  margin: 0 15px;
  line-height: 50px;
  text-decoration: none;
  color: black;
  font-size: 24px;
}

.nav {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background-color: white;
  height: 100px;  
}

#zhuYe,#jingLi,#xiangMu,#jiNeng,#lianXi {
  width: 100%;
  height: 600px;
  margin-top: 20px;

  background-color: #f0f0f0;
}
#zhuYe{
  margin-top: 100px;
}
</style>
