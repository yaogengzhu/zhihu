# Vue3.0学习


## ts部分介绍

```vue
/** 
 *  构造函数断言成类型， 使用PropType
 */
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
```

## 插件部分介绍
- Vetur.
    打开设置，添加配置,增加ts读取属性的配置
    ```json
     "vetur.experimental.templateInterpolationService": true
    ```