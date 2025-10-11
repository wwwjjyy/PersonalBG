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
  const DEFAULT_TALK_LIST: Talk[] = [
    {
      id: "init-ai-1", // 初始ID建议加标识，避免与用户生成的ID冲突
      role: "ai",
      msg: "欢迎使用！有什么我可以帮你的吗？你可以随时和我交流~" // AI初始欢迎语
    }
  ];
export const useTalkListStore = defineStore("list",()=>{
    let talkList=reactive(
    JSON.parse(localStorage.getItem('talkList')||JSON.stringify(DEFAULT_TALK_LIST)) as Talk[]
    )

    return {talkList}
} )