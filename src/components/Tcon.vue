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
                <button class="icon-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                        <path d="M2.25 9.75h19.5v9.75H2.25v-9.75z" />
                        <path d="M2.25 3.75a3 3 0 013-3h13.5a3 3 0 013 3v5.25h-19.5V3.75z" />
                    </svg>
                </button>
                <!-- 电话图标 -->
                <button class="icon-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                        <path d="M1.5 5.25a3 3 0 013-3h13.5a3 3 0 013 3v8.25a3 3 0 01-3 3h-13.5a3 3 0 01-3-3v-8.25z" />
                        <path d="M7.5 15.75a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" />
                        <path d="M16.5 12a.75.75 0 00.75-.75v-3a.75.75 0 00-1.5 0v3a.75.75 0 00.75.75z" />
                    </svg>
                </button>
                <!-- GitHub图标 -->
                <a href="https://github.com/wwwjjyy">
                    <button class="icon-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="icon-svg">
                            <path
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-3 10.5a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6zm0-3.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6zm0-3.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5h-6z" />
                        </svg>
                    </button>
                </a>
                <!-- Gitee图标 -->
                <button class="icon-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
                        <path
                            d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3h18a3 3 0 00-3-3v-3A5.25 5.25 0 0012 1.5zm0 13.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0-6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
                    </svg>
                </button>
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

.icon-btn.dark {
    background-color: black;
    color: white;
}

.icon-btn:hover.dark {
    background-color: white;
    color: black;
    border: white;
}

.icon-svg {
    width: 24px;
    /* 图标本身尺寸 */
    height: 24px;
}
</style>