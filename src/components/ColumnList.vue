<template>
    <div class="row">
        <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
            <div class="card h-100 shadow-sm">
                <div class="card-body text-center">
                    <img
                        :src="column.avatar"
                        class="rounded-circle border boder-right w-25 my-3"
                        :alt="column.title"
                    />
                    <h5 class="card-title">{{ column.title }}</h5>
                    <p class="card-text text-left">
                        {{ column.description }}
                    </p>
                    <a href="#" class="btn btn-outline-primary">进入专栏</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
/**
 *  构造函数断言成类型， 使用PropType
 */
import { computed, defineComponent, PropType } from 'vue'
import defaultAvatar from '../assets/images/avatar.jpeg';
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
            default: [],
        },
    },
    setup(props) {
        const columnList = computed(() => {
            return props.list.map((item) => {
                if (!item.avatar) {
                    item.avatar = defaultAvatar
                }
                return item
            })
        })
        return {
            columnList
        }
    },
})
</script>

<style></style>

function required(arg0: string): string {
    throw new Error('Function not implemented.')
}
