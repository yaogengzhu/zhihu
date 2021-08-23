<template>
    <div>
        <vaildate-form @form-sumbit="onFormSubmit">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                >
                <vaildate-input
                    :rules="emailRules"
                    v-model="emailVal"
                    class="demo"
                    placeholder="请输入邮箱地址"
                    ref="inputRef"
                />
                {{ emailVal }}
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                >
                <vaildate-input
                    :rules="emailRules"
                    v-model="emailVal"
                    class="demo"
                    placeholder="请输入邮箱地址"
                    ref="inputRef"
                />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                >
                <vaildate-input
                    :rules="emailRules"
                    v-model="emailVal"
                    class="demo"
                    placeholder="请输入邮箱地址"
                    ref="inputRef"
                />
            </div>
            <template #submit>
                <span class="btn btn-danger">sumit</span>
            </template>
        </vaildate-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import GlobalHeader, { IUserProps } from '../components/GlobalHeader.vue';
import VaildateInput, { IRulesProp } from '../components/VaildateInput.vue';
import VaildateForm from '../components/VaildateForm.vue';

export default defineComponent({
    name: 'Login',
    components: {
        GlobalHeader,
        VaildateInput,
        VaildateForm,
    },
    setup() {
        const rouer = useRouter();
        const inputRef = ref<any>();
        const emailVal = ref('');
        const emailRules: IRulesProp = [
            {
                type: 'required',
                message: '电子邮件不能为空',
            },
            {
                type: 'email',
                message: '邮箱地址不正确',
            },
        ];
        const emailRef = reactive({
            val: '',
            error: false,
            message: '',
        });
        const vaildateEmail = () => {
            // 验证数据
            if (emailRef.val.trim() === '') {
                emailRef.error = true;
                emailRef.message = 'email不能为空';
            }
        };
        const onFormSubmit = (result: boolean) => {
            console.log(inputRef.value);
            inputRef.value.vaildateInput();
            // console.log(result);
            rouer.push({
                name: 'columnDetail',
                params: {
                    id: 1
                }
            })
        };
        return {
            emailRef,
            vaildateEmail,
            emailRules,
            emailVal,
            onFormSubmit,
            inputRef,
        };
    },
});
</script>

<style></style>
