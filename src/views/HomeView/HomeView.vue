<script setup lang="ts">
import { useMovieList } from '@/views/HomeView/hooks/movie'

const { movieList, loadMore } = useMovieList()
</script>

<template>
  <el-col :lg="{ span: 12, offset: 6 }" :md="{ span: 16, offset: 4 }" :sm="{ span: 24, offset: 0 }">
    <div
      class="flex size-full h-40"
      v-for="item in movieList"
      :key="item.title"
      :style="{ backgroundImage: item.url }"
    ></div>
  </el-col>
</template>

<style scoped lang="scss"></style>
