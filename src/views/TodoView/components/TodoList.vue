<script lang="ts" setup>
import { type Todo } from '../hooks/useTodo'

const { todos } = defineProps<{
  todos: Todo[]
}>()

defineEmits<{
  removeTodo: [id: number]
  toggleTodo: [id: number]
}>()
</script>

<template>
  <el-col>
    <div class="todo-item" v-for="v in todos" :key="v.id">
      <label>
        <el-checkbox :checked="v.isCompleted" type="checkbox" @change="$emit('toggleTodo', v.id)" />
        <span class="text" :style="{ textDecoration: v.isCompleted ? 'line-through' : 'none' }">{{
          v.text
        }}</span>
      </label>
      <el-button type="danger" @click="$emit('removeTodo', v.id)">删除</el-button>
    </div>
  </el-col>
</template>

<style scoped lang="scss">
.todo-item {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  .el-checkbox {
    margin-right: 10px;
  }

  .text {
    word-break: break-all;
  }
}
</style>
