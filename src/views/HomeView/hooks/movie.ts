import pic01 from '@/assets/images/pic/pic01.jpg'
import pic02 from '@/assets/images/pic/pic02.jpg'
import pic03 from '@/assets/images/pic/pic03.jpg'
import pic04 from '@/assets/images/pic/pic04.jpg'
import pic05 from '@/assets/images/pic/pic05.jpg'
import pic06 from '@/assets/images/pic/pic06.jpg'
import pic07 from '@/assets/images/pic/pic07.jpg'
import pic08 from '@/assets/images/pic/pic08.jpg'
import pic09 from '@/assets/images/pic/pic09.jpg'
import { ref } from 'vue'

export function useMovieList() {
  const movieList = ref<Movie[]>([
    {
      title: '检查站',
      totalDuration: '120:13',
      url: pic01
    },
    {
      title: '赌侠1999',
      totalDuration: '115:32',
      url: pic02
    },
    {
      title: '夺路而逃',
      totalDuration: '103:45',
      url: pic03
    },
    {
      title: '哥特防线',
      totalDuration: '93:26',
      url: pic04
    },
    {
      title: '头号玩家',
      totalDuration: '94:52',
      url: pic05
    },
    {
      title: '天亮之前',
      totalDuration: '84:23',
      url: pic06
    },
    {
      title: '血战湘江',
      totalDuration: '97:12',
      url: pic07
    },
    {
      title: '疯狂动物城',
      totalDuration: '102:34',
      url: pic08
    },
    {
      title: '赌神3：少年赌神',
      totalDuration: '74:45',
      url: pic09
    }
  ])

  const loadMore = () => {}

  return { movieList, loadMore }
}

export interface Movie {
  title: string
  totalDuration: string
  url: string
}
