<script lang="ts" setup>
import '@/assets/font-awesome-4.7.0/scss/font-awesome.scss'
import { zhCn } from 'element-plus/es/locale/index'
</script>

<template>
  <el-config-provider :locale="zhCn">
    <el-container>
      <el-header>
        <el-menu :default-active="$route.path" mode="horizontal" router>
          <el-menu-item index="/" route="/">首页</el-menu-item>
          <el-menu-item index="/channel">频道</el-menu-item>
          <el-menu-item index="/todos" route="/todos">待办列表</el-menu-item>
          <el-menu-item index="/my" route="/my">我的</el-menu-item>
          <el-menu-item>
            <i class="fa fa-search" />
            <div class=""></div>
          </el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<style lang="scss" scoped>
.el-header {
  --el-header-padding: 0;
}

.el-menu {
  --el-menu-bg-color: #545c64;
  --el-menu-text-color: #fff;
}

.el-main {
  --el-main-padding: 0;
}
</style>
