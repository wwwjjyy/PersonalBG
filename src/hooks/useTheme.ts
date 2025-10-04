import { ref, onMounted } from 'vue'

export default function () {
  // 主题状态，直接与Switch的v-model绑定
  const switchValue = ref(false)

  // 初始化：从本地存储或系统主题获取初始状态
  onMounted(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      // 本地存储有值时，直接同步到switch状态
      switchValue.value = savedTheme === 'dark'
    } else {
      // 自动检测系统主题并同步
      switchValue.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    // 应用初始主题
    updateTheme(switchValue.value)
  })

  // 根据Switch状态更新主题
  const updateTheme = (isDark: boolean) => {
    const html = document.documentElement
    const nav=document.querySelector('.nav') as HTMLElement;
    if (isDark) {
      html.classList.add('dark')
      nav.classList.add('dark')
      
      localStorage.setItem('theme', 'dark')
    } else {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Switch状态变化时触发的回调
  const handleSwitchChange = (value: boolean) => {
    switchValue.value = value
    updateTheme(value)
  }

  return {
    switchValue,    // 绑定到Switch的v-model
    handleSwitchChange  // 绑定到Switch的@change事件
  }
}
