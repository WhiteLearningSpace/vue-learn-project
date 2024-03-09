<script setup lang="ts">
import { zhCn } from 'element-plus/es/locale/index'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-container>
      <el-header>
        <el-menu :default-active="$route.path" router mode="horizontal">
          <el-menu-item index="/" route="/">Home</el-menu-item>
          <el-menu-item index="/todos" route="/todos">TodoList</el-menu-item>
          <el-menu-item index="/my" route="/my">My</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style scoped lang="scss">
.el-header {
  --el-header-padding: 0;
}

.el-menu {
  --el-menu-bg-color: #545c64;
  --el-menu-text-color: #fff;
}
</style>
