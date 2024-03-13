<script lang="ts" setup>
import TodoAdd from '@/views/TodoView/components/TodoAdd.vue'
import TodoFilter from '@/views/TodoView/components/TodoFilter.vue'
import TodoList from '@/views/TodoView/components/TodoList.vue'
import { useTodo } from '@/views/TodoView/hooks/useTodo'
import { useFilteredTodo } from '@/views/TodoView/hooks/useFilteredTodo'

const { todos, addTodo, removeTodo, toggleTodo, removeAll } = useTodo()
const { filteredTodos, stateFilter } = useFilteredTodo(todos)
</script>

<template>
  <div class="todo-container">
    <h1>Todo List</h1>
    <todo-add @add-todo="addTodo" />
    <todo-filter v-model="stateFilter" @remove-all="removeAll" />
    <todo-list :todos="filteredTodos" @remove-todo="removeTodo" @toggle-todo="toggleTodo" />
  </div>
</template>

<style lang="scss" scoped>
.todo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
