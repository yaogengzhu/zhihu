<template>
    <div class="container">
        <global-header :user="user"></global-header>
        <!-- <column-list :list="list"></column-list> -->
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                >
                <vaildate-input :rules="emailRules" v-model="emailVal"></vaildate-input>
                {{ emailVal }}
            </div>

            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label"
                    >Email address</label
                >
                <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    v-model="emailRef.val"
                    @blur="vaildateEmail"
                />
                <div class="form-text" v-if="emailRef.error">
                    {{ emailRef.message }}
                </div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                >
                <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                />
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrapcss
import ColumnList, { IColumnListProps } from './components/ColumnList.vue'
import GlobalHeader, { IUserProps } from './components/GlobalHeader.vue'
import VaildateInput, { IRulesProp } from './components/VaildateInput.vue'
const testData: IColumnListProps[] = [
    {
        id: 1,
        title: 'test1',
        description:
            '龙风的测试数据龙风的测试数据龙风的测试数据龙风的测试数据龙风的测试数据龙风的测试数据',
        avatar: '',
    },
    {
        id: 2,
        title: 'test2',
        description: '龙风的测试数据2',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4',
    },
    {
        id: 3,
        title: 'test1',
        description: '龙风的测试数据',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4',
    },
    {
        id: 4,
        title: 'test2',
        description: '龙风的测试数据2',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4',
    },
]
const currentUser: IUserProps = {
    id: 1,
    isLogin: true,
    name: 'yaogengzhu',
}
export default defineComponent({
    name: 'App',
    components: {
        ColumnList,
        GlobalHeader,
        VaildateInput,
    },
    setup() {
        const emailVal = ref('zhuyaogeng')
        const emailRules: IRulesProp = [
            {
                type: 'required',
                message: '电子邮件不能为空',
            },
            {
                type: 'email',
                message: '邮箱地址不正确',
            },
        ]
        const emailRef = reactive({
            val: '',
            error: false,
            message: '',
        })
        const vaildateEmail = () => {
            // 验证数据
            if (emailRef.val.trim() === '') {
                emailRef.error = true
                emailRef.message = 'email不能为空'
            }
        }
        return {
            list: testData,
            user: currentUser,
            emailRef,
            vaildateEmail,
            emailRules,
            emailVal
        }
    },
})
</script>

<style></style>
