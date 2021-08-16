# 仿知乎

## 技术栈
- [x] vue3.x 
- [x] vite
- [x] axios


## vue3.x新增的特性

- reactive 响应式基础api(返回对象的响应式副本)
- teleport vue中的传送门 

## vue 也可以自定义hooks
```ts
import { ref,onMounted,onUnmounted,Ref } from 'vue'

const useClickOutside = (elemetRef: Ref<HTMLElement | null>) => {
    const isClickOutside = ref(false)
    const handler = (e: MouseEvent) => {
        if (elemetRef.value) {
            if (elemetRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false
            } else {
                isClickOutside.value = true
            }
        }
    }
    onMounted(() => {
        document.addEventListener("click",handler,false)
    })

    onUnmounted(() => {
        document.addEventListener("click",handler,false)
    })
    return {
        isClickOutside
    }
}

export default useClickOutside
```