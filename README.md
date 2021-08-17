# 仿知乎

## 技术栈
- [x] vue3.x 
- [x] vite
- [x] axios


## vue3.x新增的特性

- reactive 响应式基础api(返回对象的响应式副本)
- teleport vue中的传送门 


- 非 Prop 的 Attribute 的处理
    - 通过将 inheritAttrs 选项设置为 false (禁用 attribute 继承)

*通过将 inheritAttrs 选项设置为 false，你可以访问组件的 $attrs property，该 property 包括组件 props 和 emits property 中未包含的所有属性 (例如，class、style、v-on 监听器等)。*
```vue
<input type="datetime-local" v-bind="$attrs" />
```

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