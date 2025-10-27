import type  { DirectiveBinding } from 'vue'
export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const loadFn = binding.value
          if (typeof loadFn === 'function') {
            loadFn()
          }
          observer.unobserve(el) 
        }
      })
    }, {
      rootMargin: '100px 0px'
    })

    observer.observe(el);
    
    // 保存观察者实例以便卸载时使用
    (el as any).__lazyObserver__ = observer
  },
  unmounted(el: HTMLElement) {
    const observer = (el as any).__lazyObserver__
    if (observer) {
      observer.disconnect()
    }
  }
}