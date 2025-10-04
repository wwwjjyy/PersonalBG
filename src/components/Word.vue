<template>
    <span>{{ displayText }}</span>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue';

// 要显示的文本
const typingText = ref("分享前端技术与成长思考");
// 正在显示的文本
const displayText = ref("");

// 是否完成打字
const isFinished = ref(false);

onMounted(() => {
        let index = 0;
        const timer = setInterval(() => {
                if (index < typingText.value.length) {
                        // 逐个添加字符
                        displayText.value += typingText.value[index];
                        index++;
                } else {
                        // 完成打字后清除定时器
                        clearInterval(timer);
                        isFinished.value = true;

                }
        }, 100); // 每100ms显示一个字符，控制打字速度
});
</script>

<style></style>