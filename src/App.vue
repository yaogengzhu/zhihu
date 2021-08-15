<template>
    <div class="container">
        <column-list :list="list"></column-list>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css' //引入bootstrapcss
import ColumnList, { IColumnListProps } from './components/ColumnList.vue'
const testData: IColumnListProps[] = [
    {
        id: 1,
        title: 'test1',
        description: '龙风的测试数据',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4'
    },
    {
        id: 2,
        title: 'test2',
        description: '龙风的测试数据2',
        avatar: 'https://avatars.githubusercontent.com/u/42566669?v=4'
    },
]
export default defineComponent({
    name: 'App',
    components: {
        ColumnList
    },
    setup() {
        return {
            list: testData,
        }
    }
})
</script>

<style>
</style>
