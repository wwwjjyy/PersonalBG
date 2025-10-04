

<template>
  <div class="nav" >
    <a href=""  class="nF" @click="tiaoZ($event, 'zhuYe') ">
      <el-icon :size="22">
      <User /></el-icon>  主页</a>

    <div class="cNav">
      <a href="" @click="tiaoZ($event, 'jingLi')">个人经历</a>
      <a href=""  @click="tiaoZ($event, 'xiangMu')">个人项目</a>
      <a href="" @click="tiaoZ($event, 'jiNeng')">个人技能</a>
      <a href="" @click="tiaoZ($event, 'lianXi')">联系方式</a>
    </div>
    <div id="navR">
      <el-icon :size="20">
        <Sunrise/> 
      </el-icon>
      <el-switch v-model="switchValue"     
      style="--el-switch-on-color: #ffffffa8; --el-switch-off-color: black ;--el-switch-height: 24px"
      @change="handleSwitchChange"
        />
        <el-icon :size="20">
        <MoonNight/> 
      </el-icon>
    </div>
  </div>    
  <!-- //主页 -->
  <div id="zhuYe">
    <Word :text="'aojdoaijasoidjoaisd'"
    fsize="30px"
    />
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
import useTheme from './hooks/useTheme';
import Word from './components/Word.vue';
import useNavscoll from './hooks/useNavscoll';
import { ref } from 'vue'
import { Sunrise, MoonNight } from '@element-plus/icons-vue'


const { tiaoZ } = useNavscoll('.nav');

const { switchValue, handleSwitchChange } = useTheme()

</script>

<style scoped>
.nav .el-icon{
  position: relative;
  top: 2px;
}
#navR .el-icon{
  position: relative;
  top: 8px;
}
.nav .cNav {
  display: flex;
  gap: 15px;
}

.nav .nF {
  position: fixed;
  left: 0;
}
.nav #navR {
  display: flex;
  gap: 10px;
  position: fixed;
  right: 0;
  margin-right: 40px;
}

.nav a {
  margin: 0 15px;
  line-height: 50px;
  text-decoration: none;
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
