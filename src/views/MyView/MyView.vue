<script setup lang="ts">
import avatar from '@/assets/images/avatar.jpg'

import { ref } from 'vue'

const name = ref('Lin____')
const avatarUrl = ref(avatar)
const changeName = () => {
  const v = prompt('请输入新的名字')
  if (v) {
    name.value = v
  }
}
const quit = () => {
  name.value = '游客'
  avatarUrl.value = ''
}
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <img v-if="avatarUrl" class="avatar-img" :src="avatarUrl" alt="头像" />
      <div class="text-3xl">{{ name }}</div>
    </div>
    <el-row class="mt-8" justify="center">
      <el-button type="primary" @click="changeName">修改名字</el-button>
      <el-button type="primary" @click="quit">退出登录</el-button>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
.avatar-img {
  margin-bottom: 24px;
  width: 240px;
  border-radius: 50%;
  user-select: none;
  -webkit-user-drag: none;
}

.user-name {
  font-size: 24px;
}
</style>
