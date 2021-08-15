<template>
    <ul>
        <li v-for="column in list" :key="column.id">
            <img :src="column.avatar" :alt="column.title">
            <h5>{{ column.title }}</h5>
            <p>{{ column.description }}</p>
            <a href="#">进入专栏</a>
        </li>
    </ul>
</template>

<script lang="ts">
/** 
 *  构造函数断言成类型， 使用PropType
 */
import { defineComponent, PropType } from 'vue'
export interface IColumnListProps {
    id: number
    title: string
    avatar: string
    description: string
}

export default defineComponent({
    name: 'ColumnList',
    props: {
        list: {
            type: Array as PropType<IColumnListProps[]>,
            required: true,
            default: []
        }
    },
    setup(props) {
        return {
            list: props.list
        }
    }
})
</script>

<style></style>
