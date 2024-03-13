<script setup lang="ts">
import { useMovieList } from '@/views/HomeView/hooks/movie'

const { movieList, loadMore } = useMovieList()
</script>

<template>
  <div class="container mx-auto lg:px-52">
    <div class="relative mb-4 rounded-full" v-for="item in movieList" :key="item.title">
      <el-image class="w-full align-bottom rounded-2xl" :src="item.imgUrl" />
      <div
        class="absolute bottom-0 w-52 rounded-2xl rounded-tl-none rounded-br-none bg-black bg-opacity-60 p-2 backdrop-blur"
      >
        <div class="text-white text-center text-2xl">{{ item.title }}</div>
        <div class="text-white text-center text-2xl">{{ item.totalDuration }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
