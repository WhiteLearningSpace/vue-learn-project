<script lang="ts" setup>
import { ref } from 'vue'

const text = ref<string>('')

const emits = defineEmits<{
  addTodo: [todo: string]
}>()

const onSubmit = () => {
  if (!text.value) {
    return
  }
  emits('addTodo', text.value)
  text.value = ''
}
</script>

<template>
  <el-form @submit.prevent="onSubmit" inline>
    <el-form-item style="margin-right: 0">
      <el-input v-model.trim="text" style="width: 200px" placeholder="请输入事项" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">添加</el-button>
    </el-form-item>
  </el-form>
</template>

<style scoped lang="scss"></style>
