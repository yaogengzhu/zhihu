<template>
    <div>
        <h2>{{ result }}</h2>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                return resolve({
                    result: 32,
                })
            }, 3000)
        })
    },
})
</script>

<style></style>
