<template>
    <div class="validate-input-container pb-3">
        <input
            type="text"
            class="form-control"
            :class="{'is-invalid': inputRef.error}"
            v-model="inputRef.val"
            @blur="vaildateEmail"
        />
        <span class="invalid-feedback" v-if="inputRef.error">
            {{ inputRef.message }}
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue'
interface IRuleProp {
    type: 'required' | 'email'
    message: string
}
export type IRulesProp = IRuleProp[] // ts别名
const emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/
export default defineComponent({
    name: 'VaildateInput',
    props: {
        rules: Array as PropType<IRulesProp>,
    },
    setup(props) {
        const inputRef = reactive({
            val: '',
            error: false,
            message: '',
        })
        const vaildateEmail = () => {
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
            }
        }
        return {
            inputRef,
            vaildateEmail,
        }
    },
})
</script>