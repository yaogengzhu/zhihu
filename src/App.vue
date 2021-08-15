<template>
    <div class="container">
        <global-header :user="user"></global-header>
        <column-list :list="list"></column-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrapcss
import ColumnList, { IColumnListProps } from './components/ColumnList.vue'
import GlobalHeader, { IUserProps } from './components/GlobalHeader.vue'
const testData: IColumnListProps[] = [
    {
        id: 1,
        title: 'test1',
        description: '龙风的测试数据龙风的测试数据龙风的测试数据龙风的测试数据龙风的测试数据龙风的测试数据',
        avatar: ''
    },
    {
        id: 2,
        title: 'test2',
        description: '龙风的测试数据2',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4'
    },
     {
        id: 3,
        title: 'test1',
        description: '龙风的测试数据',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4'
    },
    {
        id: 4,
        title: 'test2',
        description: '龙风的测试数据2',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4'
    },
    
]
const currentUser: IUserProps = {
    id: 1,
    isLogin: true,
    name: 'yaogengzhu'
}
export default defineComponent({
    name: 'App',
    components: {
        ColumnList,
        GlobalHeader
    },
    setup() {
        return {
            list: testData,
            user: currentUser
        }
    }
})
</script>

<style>
</style>
