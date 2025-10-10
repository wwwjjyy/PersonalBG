<template>
    <div class="allCon">
        <div class="aiT" ref="messageListRef">
            <div v-for="item in talkListStore.talkList" :key="item.id">
                <!-- AI 头像 -->
                <div v-if="item.role === 'ai'" style="display: flex;width: 80% ;  ">
                    <span>{{ item.msg }}</span>

                </div>
                <!-- 用户头像 -->
                <div v-if="item.role === 'user'" style="display: flex;
          justify-content: flex-end;        
          ">
                    <div style="
                    max-width: 70%;
                    border-radius: 10px;
                    background-color: gainsboro;
                    padding: 2px 10px;
            ">
                        <span>{{ item.msg }}</span>
                    </div>
                </div>

            </div>
        </div>
        <div class="faArea">
            <el-input v-model="message" 
            style="flex-grow: 9;
            font-size: 16px;
            " 
             type="textarea" 
        
            placeholder="请输入内容..."
            :autosize="{ maxRows: 5 }"
                 />
                 <el-button @click="getL" type="info" round style="flex-grow: 1">点击发送</el-button>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, watch, nextTick } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkListStore, type Talk } from '@/store/aiTall';

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
.faArea {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 10px;
    height: 20%;
}   
.allCon {
    height: 400px;
    width: 40%;
    overflow-y: hidden;
    padding: 10px;
    margin-bottom: 10px;

}

.aiT {
    height: 80%;
    overflow-y: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>