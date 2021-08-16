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
                <!-- <a href="#" class="btn btn-outline-light my-2">你好:{{user.name}}</a> -->
                <dropdown :title="`您好${user.name}`">
                    <dropdown-item>
                        <a href="#" class="dropdown-item">新建文章</a>
                    </dropdown-item>
                    <dropdown-item disabled>
                        <a href="#" class="dropdown-item">编辑资料</a>
                    </dropdown-item>
                    <dropdown-item>
                        <a href="#" class="dropdown-item">退出登陆</a>
                    </dropdown-item>
                </dropdown>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import DropdownItem from './DropDownItem.vue'
import Dropdown from './DropDown.vue'

export interface IUserProps {
    isLogin: boolean
    name: string
    id: number
}

export default defineComponent({
    name: 'GlobalHeader',
    components: {
        Dropdown,
        DropdownItem,
    },
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
