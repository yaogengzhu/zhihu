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
        document.removeEventListener("click",handler,false)
    })
    return {
        isClickOutside
    }
}

export default useClickOutside
