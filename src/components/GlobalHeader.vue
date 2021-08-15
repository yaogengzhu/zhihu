<template>
    <nav
        class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4"
    >
        <a class="navbar-brand" href="#">知乎</a>
        <!-- 未登陆 -->
        <ul v-if="!user.isLogin" class="list-inline mb-0">
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light my-2">登陆</a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light my-2">注册</a>
            </li>
        </ul>
        <!--已登陆 -->
        <ul v-else class="list-inline mb-0">
            <li class="list-inline-item">
                <a href="#" class="btn btn-outline-light my-2">你好:{{user.name}}</a>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export interface IUserProps {
    isLogin: boolean
    name: string
    id: number
}
export default defineComponent({
    name: 'GlobalHeader',
    props: {
        user: {
            type: Object as PropType<IUserProps>,
            default: {},
            required: true,
        },
    },
    setup(props, context) {
        //
    },
})
</script>

<style></style>
