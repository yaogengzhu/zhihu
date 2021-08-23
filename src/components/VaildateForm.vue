<template>
    <form class="vaildate-form-container">
        <slot name="default"></slot>
        <div class="submit-area" @click.prevent="sumitForm">
            <slot name="submit">
                <button type="submit" class="btn-primary">提交</button>
            </slot>
        </div>
    </form>
</template>

<script lang="ts">
import { defineComponent, onUnmounted } from 'vue'
import mitt from 'mitt'
export const emitter:any = mitt() // 创建事件监听器
type VialdateFunc = () => boolean
export default defineComponent({
    name: 'VaildateForm',
    emits: ['form-sumbit'], // 定义触发的事件
    setup(props, context) {
        let funArr: Array<VialdateFunc> = []
        const sumitForm = () => {
            const result = funArr.map(fn => fn()).every(result => result) // 提前停止了循环
            context.emit('form-sumbit', result) // 使用contex.emit触发自定义事件
        }
        const callback = (func: VialdateFunc) => {
            funArr.push(func)
        }
        emitter.on('form-item-callback', callback)
        onUnmounted(() => {
            emitter.off('form-item-callback', callback)
            funArr = [] // 清空数组
        })
        return {
            sumitForm
        }
    },
})
</script>
