<script setup lang="ts">
const stateFilter = defineModel()

const emits = defineEmits<{
  removeAll: []
}>()
</script>

<template>
  <el-row>
    <el-radio-group v-model="stateFilter">
      <el-radio value="all">全部</el-radio>
      <el-radio value="completed">已完成</el-radio>
      <el-radio value="incomplete">未完成</el-radio>
    </el-radio-group>
    <el-button type="danger" @click="emits('removeAll')">清空列表</el-button>
  </el-row>
</template>

<style scoped lang="scss">
.el-button {
  margin-left: 32px;
}
</style>
