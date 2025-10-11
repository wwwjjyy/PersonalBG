<template>
  <div class="nav">
    <div class="cNav">
      <a href="" class="nF" @click="tiaoZ($event, 'zhuYe')">      
        <!-- <el-icon :size="22">
        <User />
      </el-icon> -->主页 
    </a>
      <a href="" @click="tiaoZ($event, 'jingLi')">个人经历</a>
      <a href="" @click="tiaoZ($event, 'jiNeng')">个人技能</a>
      <a href="" @click="tiaoZ($event, 'lianXi')">联系方式</a>
    </div>
    <div id="navR">
      <el-icon :size="20">
        <Sunrise />
      </el-icon>
      <el-switch v-model="switchValue"
        style="--el-switch-on-color: #ffffffa8; --el-switch-off-color: black ;--el-switch-height: 24px"
        @change="handleSwitchChange" />
      <el-icon :size="20">
        <MoonNight />
      </el-icon>
    </div>
  </div>
  <!-- //主页 -->
  <div id="zhuYe">
    <div class="zLe">

      <Word :text="'H ELLO！ ' " :speed="10"/>
      <Word :text="'   很高兴你能驻足我的个人小站！这里记录着我的教育历程、掌握的技能，还有那些亲手打磨过的项目故事。不妨多留片刻逛逛，这份始终未减的热忱与未完待续的探索，一直在这里等你发现。'" 
      :speed="20"
      />
    </div>
    <div class="zRi"></div>

  </div>
  <div id="tuPian">    
    <h1>瞬间</h1>
    <MovDiv2/>
  </div>
  <!-- 个人经历 -->
  <div id="jingLi">
    <PassHis/>
  </div>
  <!-- 个人技能 -->
  <div id="jiNeng">
      <h1>个人技能</h1>
      <ItWallp/>
  </div>
  <!-- 联系方式 -->
  <div id="lianXi">
    <h1>联系方式</h1>
    <Tcon/>

  </div>


</template>

<script setup lang="ts">
import useTheme from './hooks/useTheme';
import Word from './components/Word.vue';
import useNavscoll from './hooks/useNavscoll';
import { Sunrise, MoonNight } from '@element-plus/icons-vue'
import PassHis from './components/PassHis.vue';
import MovDiv2 from './components/MovDiv2.vue';
import ItWallp from './components/ItWallp.vue';
import Tcon from './components/Tcon.vue';


const { tiaoZ } = useNavscoll('.nav');

const { switchValue, handleSwitchChange } = useTheme()

</script>

<style scoped>

.zLe {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 100px; /* 缩小上下文字间距 */
  font-family: 'Noto Sans SC', sans-serif;
  padding: 60px 30px; /* 调整内边距 */
  flex-grow: 1;
  flex: 0 0 40%; 
  padding-right: 3rem;
}
.zLe :first-child{
  font-size: clamp(2rem, 5vw, 3.7rem); /* 响应式字体：最小2rem，最大3.5rem，基于视口宽度5vw */
  font-weight: 700;
  margin-bottom: 1rem;
}
.zLe :nth-child(2){
  font-size: clamp(1rem, 2vw, 1.5rem); /* 响应式字体：最小1rem，最大1.25rem，基于视口宽度2vw */
  line-height: 1.6;
}
.zRi {
  width: 40%;
  height: 95%;
  border-radius: 10px;
  flex-grow: 1;
  background-image: url('@/assets/image11.png');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

#zhuYe,
#jingLi,
#jiNeng,
#lianXi,
#tuPian {
  width: 90%;
  margin-top: 20px;
  margin: 20px auto 2px auto;
}
#lianXi{
  margin-top: 150PX;

}
#tuPian {
  padding: 50px 10px;
  width: 90%;
  height: 145vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
h1 {
  font-weight: 540;
  font-size: 3rem;
  text-align: center;
  margin : 50px 0;
}
#zhuYe {
  display: flex;
  align-content: center;
  align-items: center; 
  border-radius: 10px;
  gap: 150px;
  margin-top: 100px;
  height: 90vh;
;

}


.nav .el-icon {
  position: relative;
  top: 2px;
}

#navR .el-icon {
  position: relative;
  top: 8px;
}

.nav .cNav {
  display: flex;
  gap: 15px;
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
  font-weight: 500;
  font-size: clamp(1rem, 3vw, 1.8rem);  
  transition: font-size 0.3s ease;}

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
</style>
