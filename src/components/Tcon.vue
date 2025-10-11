<template>
    <h1></h1>
    <div class="tcvt">
        <div class="ltc">
            <div class="contact-info">
                <span class="label">邮箱：</span>
                <span class="value">2932063245@qq.com</span>
                <span class="label">微信：</span>
                <span class="value">jy1847595</span>
                <span class="label">GitHub：</span>
                <span class="value">github.com/wwwjjyy</span>
                <span class="label">Gitee：</span>
                <span class="value">gitee.com/yiersna</span>
            </div>
            <div class="contact-icons">
                <!-- 邮箱图标 -->
                <a href="https://wx.mail.qq.com/">
                    <button class="icon-btn">
                        <img src="../assets/lx/mail.svg" alt="" class="icon-svg">
                    </button>
                </a>
                <a href="weixin://wxid/jy1847595">

                    <button class="icon-btn">
                        <img src="../assets/lx/wx.svg" alt="" class="icon-svg">
                    </button>
                </a>
                <!-- GitHub图标 -->
                <a href="https://github.com/wwwjjyy">
                    <button class="icon-btn">
                        <img src="../assets/lx/github.svg" alt="" class="icon-svg">

                    </button>
                </a>
                <!-- Gitee图标 -->
                <a href="https://gitee.com/yiersna">
                    <button class="icon-btn">
                        <img src="../assets/lx/gitee.svg" alt="" class="icon-svg">

                    </button>
                </a>
            </div>
            <p style="text-align: center;color: #8c8c8c;">(如果无聊，你还可以跟AI联系联系------>)</p>
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

.ltc {
    width: 49%;
    flex-grow: 1;

}

.rtc {
    width: 49%;
    flex-grow: 1;

}

.contact-info {
    display: grid;
    grid-template-columns: max-content auto;
    /* 第一列随标签宽度，第二列自动填充 */
    gap: 1.5rem 1rem;
    /* 行间距 0.5rem，列间距 1rem */
    font-size: 1.3rem;
    align-items: center;
    /* 垂直居中 */
    margin-bottom: 3rem;
    justify-content: center
}

.label {
    font-weight: bold;
    text-align: right;
    /* 标签右对齐 */
}

.value {
    text-align: left;
    /* 值左对齐 */
}

/* 图标区域 */
.contact-icons {
    display: flex;
    justify-content: center;
    /* 图标水平居中 */
    gap: 2rem;
    margin-bottom: 30px;
    /* 图标之间的间距 */
}

.icon-btn {
    border: 5px solid black;
    /* 3px黑色边框 */
    border-radius: 6px;
    /* 可选：圆角优化视觉 */
    width: 70px;
    /* 图标按钮尺寸 */
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    cursor: pointer;
    transition: background-color 0.5s ease, border 0.3s ease;
    /*  hover时提示可点击 */
}

.icon-btn:hover {
    background-color: black;
    color: white;
}

.icon-btn:hover .icon-svg {
    filter: invert(100%);
}

.icon-btn.dark {
    background-color: black;
    color: white;
}

.icon-btn.dark .icon-svg {
    filter: invert(100%);
}

.icon-btn:hover.dark {
    background-color: white;
    color: black;
    border: white;
}

.icon-btn:hover.dark .icon-svg {
    filter: invert(0);

}

.icon-svg {
    width: 24px;
    /* 图标本身尺寸 */
    height: 24px;
}
</style>