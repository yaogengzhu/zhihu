<template>
    <div class="dropDown" ref="dropdownRef">
        <a
            href="#"
            class="btn btn-outline-light my-2 dropdown-toggle"
            @click.prevent="toggleOpen"
            >{{ title }}</a
        >
        <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang="ts">
import { ref, defineComponent, watch } from 'vue'
import useClickOutside from '../hooks/useClickOutside'
export default defineComponent({
    name: 'Dropdown',
    props: {
        title: {
            type: String,
            default: '',
            required: true,
        },
    },
    setup() {
        const isOpen = ref(false)
        const dropdownRef = ref<HTMLElement | null>(null) // 挂载ref
        const toggleOpen = () => {
            isOpen.value = !isOpen.value
        }
        const { isClickOutside } = useClickOutside(dropdownRef)

        watch(isClickOutside, function(newValue) {
            if (newValue && isOpen.value) {
                isOpen.value = false
            }
        })

        return {
            isOpen,
            toggleOpen,
            dropdownRef
        }
    },
})
</script>
