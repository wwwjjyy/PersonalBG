export type SectionId = 'zhuYe' | 'jingLi' | 'xiangMu' | 'jiNeng' | 'lianXi';

// 处理导航点击事件
export default function (navSelector: string = '.nav') {
const tiaoZ = (e: MouseEvent, id?: SectionId) => {
  // 阻止默认锚点跳转行为
  e.preventDefault();
  
  if (!id) return;
  
  // 获取目标元素和导航栏元素
  const targetElement = document.getElementById(id);
  const navElement = document.querySelector('.nav') as HTMLElement | null;
  
  if (!targetElement || !navElement) {
    console.error(`未找到ID为${id}的元素或导航栏`);
    return;
  }
  
  // 计算滚动位置（减去导航栏高度避免内容被遮挡）
  const navHeight = navElement.offsetHeight;
  const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
  //console.log(targetPosition);
  
  // 平滑滚动到目标位置
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
};
return { tiaoZ };
}