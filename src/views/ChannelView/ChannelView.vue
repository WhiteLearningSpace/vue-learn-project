<script lang="ts" setup>
import { useMovieChannel } from '@/views/ChannelView/hooks/movieChannel'

const { channelList } = useMovieChannel()
</script>

<template>
  <div class="container mx-auto lg:px-32 md:px-0 max-w-[1352px]">
    <div class="grid grid-cols-2">
      <div v-for="item in channelList" :key="item.id" class="relative">
        <el-image :src="item.image" class="align-bottom max-h-[280px] w-full h-full" fit="cover" />
        <!--   category   -->
        <div class="absolute top-0 bottom-0 left-0 right-0 text-white grid place-content-center">
          <p class="text-4xl font-bold">#{{ item.name }}#</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
