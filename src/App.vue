<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <Suspense>
        <template #default>
            <async-show />
        </template>
        <template #fallback>
            <h3>loading</h3>
        </template>
    </Suspense>
    <Suspense>
        <template #default>
            <DogShow />
        </template>
        <template #fallback>
            <h3>狗狗loading</h3>
        </template>
    </Suspense>
    <h2>{{ error }}</h2>
</template>

<script lang="ts">
import { ref, defineComponent, onErrorCaptured } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import AsyncShow from './components/AsyncShow.vue'
import DogShow from './components/DogShow.vue'

export default defineComponent({
    name: 'App',
    components: {
        HelloWorld,
        AsyncShow,
        DogShow,
    },
    setup() {
      const error = ref(null)
      onErrorCaptured((e: any) => {
        error.value = e
      })
      return {
        error
      }
    }
})
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
