import { defineStore } from "pinia";
import { reactive } from "vue";

// export const useTalkListStore = defineStore("list", {
//     state(){
//         return{
//             talkList:JSON.parse(localStorage.getItem('talkList')||'[]') as {id:string,content:string}[]
//                 }
//     }
// })
export interface Talk {
    id: string;
    role: 'user' | 'ai'; // 角色：用户、AI、或加载中
    msg: string;
  }
export const useTalkListStore = defineStore("list",()=>{
    let talkList=reactive(
    JSON.parse(localStorage.getItem('talkList')||'[]') as Talk[]
    )

    return {talkList}
} )