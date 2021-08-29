<template>
    <div>
        <pre>{{ route }}</pre>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
    name: 'ColumnDetail',
    setup() {
        const route = useRoute()
        const currentId = route.params.id // 获取当前路由参数
        return {
            route
        }
    }
})
</script>

<style>

</style>