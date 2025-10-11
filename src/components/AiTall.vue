<template>
    <div class="allCon">
        <div class="aiT" ref="messageListRef">
            <div v-for="item in talkListStore.talkList" :key="item.id" style="margin: 20px 0 ;
            
            ">
                <!-- AI 头像 -->
                <div v-if="item.role === 'ai'" style="display: flex;width: 80% ;

                " class="message-item xioaxi">
                    <span style="line-height: 1.4;">
                        <Word :text=item.msg        
                        :speed="20"
                        />
                        <!-- <span style="line-height: 1.4;">{{ item.msg }}</span> -->

                    </span>

                </div>
                <!-- 用户头像 -->
                <div v-if="item.role === 'user'" style="display: flex;
          justify-content: flex-end;" class="message-item">
                    <div style="
                    max-width: 70%;
            " class="xioaxi " :class="[item.role, switchValue ? 'dark' : '']">
                        <span style="line-height: 1.4;">{{ item.msg }}</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="faArea">
            <input v-model="message" class="ist"   placeholder="和AI交流交流？？？..."@keyup.enter="getL" />
            <button @click="getL" round style="flex-grow: 1;
                     border-radius: 12px;
                     background-color: black;
                        color: white;
                     padding: 12px;
                 ">点击发送</button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, watch, nextTick } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkListStore, type Talk } from '@/store/aiTall';
import useTheme from '@/hooks/useTheme';
import Word from '@/components/Word.vue';


const { switchValue } = useTheme()


const messageListRef = ref<HTMLDivElement | null>(null);

let message = ref('');
let talkListStore = useTalkListStore()
interface ApiResponse {
    code: number;
    msg: string;
}

talkListStore.$subscribe((mutation, state) => {
    localStorage.setItem('talkList', JSON.stringify(state.talkList))

})
watch(() => talkListStore.talkList.length, async () => {
    await nextTick();
    const listEl = messageListRef.value;
    console.log(listEl);
    if (listEl) {
        listEl.scrollTo({ top: listEl.scrollHeight, behavior: 'smooth' });
    }
});
async function getL() {
    if (!message.value.trim()) return;
    let iTall: Talk = { id: nanoid(), role: 'user', msg: message.value };
    talkListStore.talkList.push(iTall);

    const meg = message.value;
    message.value = "";

    let result = await axios.get<ApiResponse>(
        `https://cn.apihz.cn/api/ai/xinghuolite.php?id=10008725&key=3ad9c43c19274058398901c694f71dbb&words=${meg}`
    );
    let aiTall: Talk = { id: nanoid(), role: 'ai', msg: result.data.msg };
    talkListStore.talkList.push(aiTall);
    message.value = "";

}
</script>

<style>
.allCon {
    height: 680px;
    padding-bottom: 20px;
    width: 86%;
    overflow-y: clip;
    margin: 5px auto;

}

.faArea {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 10%;

    padding: 0 10px;

}

.aiT {
    height: 85%;
    overflow-y: auto;
    margin: 10px 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

}

.aiT::-webkit-scrollbar {
    display: none;
    /* Chrome/Edge/Safari */
}

.aiT {
    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE/Edge 旧版 */
}

.message-item {
    word-wrap: break-word;
    /* 允许长单词或URL换行 */
    word-break: break-all;
    /* 在任何字符处换行，确保不会溢出容器 */
}

.xioaxi {
    border: 3px solid #1d1d1d;
    border-radius: 12px;
    padding: 8px;
    letter-spacing: 1px;
    font-size: 18px;
}

.xioaxi.user.dark {
    background-color: #1a2a34;
    border: #1a2a34 solid 3px;
}

.ist {
    flex-grow: 9;
    font-size: 16px;
    border: 3px solid #030303;
    border-radius: 12px;
    padding: 10px;

}
</style>