<template>
    <div class="container">
        <global-header :user="user"></global-header>
        <router-view></router-view>
        <footer class="text-center py-4 text-secondary bg-light mt-6">
            <small>
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">2021知乎</li>
                    <li class="list-inline-item">2021知乎</li>
                    <li class="list-inline-item">2021知乎</li>
                    <li class="list-inline-item">2021知乎</li>
                </ul>
            </small>
        </footer>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrapcss
import GlobalHeader, { IUserProps } from './components/GlobalHeader.vue'



const currentUser: IUserProps = {
    id: 1,
    isLogin: true,
    name: 'yaogengzhu',
}
export default defineComponent({
    name: 'App',
    components: {
        GlobalHeader,
    },
    setup() {
        const inputRef = ref<any>()
        const emailVal = ref('')
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
            user: currentUser,
        }
    },
})
</script>

<style></style>
