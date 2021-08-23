<template>
    <div class="validate-input-container pb-3">
        <input
            class="form-control"
            :class="{'is-invalid': inputRef.error}"
            :value="inputRef.val"
            @blur="vaildateInput"
            @input="updateValue"
            v-bind="$attrs"
        />
        <span class="invalid-feedback" v-if="inputRef.error">
            {{ inputRef.message }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, onMounted } from 'vue'
import { emitter } from './VaildateForm.vue'
interface IRuleProp {
    type: 'required' | 'email'
    message: string
}
export type IRulesProp = IRuleProp[] // ts别名
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default defineComponent({
    name: 'VaildateInput',
    inheritAttrs: false,
    props: {
        rules: Array as PropType<IRulesProp>,
        modelValue: String
    },
    setup(props, context) {
        const inputRef = reactive({
            val: props.modelValue || '',
            error: false,
            message: '',
        })
        const updateValue = (e: any) => {
            const targetValue = (e.target as HTMLInputElement).value
            inputRef.val = targetValue
            context.emit('update:modelValue', targetValue)
        }
        const vaildateInput = () => {
            if (props.rules) {
                const allPassed = props.rules.every((rule) => {
                    let passed = true
                    inputRef.message = rule.message
                    switch (rule.type) {
                        case 'required':
                            passed = inputRef.val.trim() !== ''
                            break
                        case 'email':
                            passed = emailReg.test(inputRef.val)
                        default:
                            break
                    }
                    return passed
                })
                inputRef.error = !allPassed
                return allPassed
            }
            return true
        }

        onMounted(() => {
            emitter.emit('form-item-callback', vaildateInput)
        })
        return {
            inputRef,
            vaildateInput,
            updateValue
        }
    },
})
</script>