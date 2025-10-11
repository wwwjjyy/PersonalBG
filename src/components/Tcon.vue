<template>
    <h1></h1>
    <div class="tcvt">
        <div class="ltc">
      <div class="contact-content">
        <div class="contact-row">
          <span class="label">邮箱：</span>
          <span class="value">2932063245@qq.com</span>
        </div>
        <div class="contact-row">
          <span class="label">微信：</span>
          <span class="value">jy1847595</span>
        </div>
        <div class="contact-row">
          <span class="label">GitHub：</span>
          <span class="value">github.com/wwwjjyy</span>
        </div>
        <div class="contact-row">
          <span class="label">Gitee：</span>
          <span class="value">gitee.com/yiersna</span>
        </div>
      </div>
      <div class="icons">
        <a href="mailto:2932063245@qq.com" class="icon-item">
          <span>📧</span>
        </a>
        <a href="weixin://wxid/jy1847595" class="icon-item">
          <span>🟢</span>
        </a>
        <a href="https://github.com/wwwjjyy" class="icon-item">
          <span>🔧</span>
        </a>
        <a href="https://gitee.com/yiersna" class="icon-item">
          <span>💻</span>
        </a>
      </div>
    </div>
        <!-- 右边 -->
        <div class="rtc">
            <!-- 上面 -->
            <AiTall />

        </div>
    </div>
</template>

<script setup lang='ts'>
import AiTall from './AiTall.vue';
</script>

<style>
.tcvt {
    display: flex;
    width: 100%;
    border-radius: 10px;
    align-items: center;
    gap: 2%;

}
.ltc{
    width: 49%;
    flex-grow: 1;

}
.rtc{
    width: 49%;
    flex-grow: 1;

}
.contact-content {
  margin-bottom: 10px;
}
.contact-row {
  margin-bottom: 5px;
}
.icons {
  display: flex;
  gap: 10px;
}
.icon-item {
  display: inline-block;
  font-size: 20px;
  /* 可根据需要添加样式，如 hover 效果等 */
}
</style>