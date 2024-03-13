<script lang="ts" setup>
import { useMovieList } from '@/views/HomeView/hooks/movie'
import { useScrollBottom } from '@/hooks/utils'
import { ref } from 'vue'

const { movieList, loadMore } = useMovieList()

const isLoading = ref(false)

useScrollBottom(() => {
  if (!isLoading.value) {
    isLoading.value = true
    console.log('请求数据')
    loadMore().then(() => {
      isLoading.value = false
    })
  }
})
</script>

<template>
  <div class="container mx-auto lg:px-52">
    <div v-for="item in movieList" :key="item.title" class="relative mb-4 rounded-full">
      <el-image :src="item.imgUrl" class="w-full align-bottom rounded-2xl" />
      <div class="absolute bottom-0 p-2">
        <div class="text-white text-center text-2xl">{{ item.title }}</div>
        <div class="text-white text-center text-2xl">{{ item.totalDuration }}</div>
      </div>
    </div>
    <!--  loading  -->
    <div v-if="isLoading" class="text-center text-2xl">加载中...</div>
  </div>
</template>

<style lang="scss" scoped></style>
