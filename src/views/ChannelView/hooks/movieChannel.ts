import originality from '@/assets/images/category/创意.jpeg'
import Plot from '@/assets/images/category/剧情.jpeg'
import animation from '@/assets/images/category/动画.jpeg'
import inspirational from '@/assets/images/category/励志.jpeg'
import experiment from '@/assets/images/category/实验.jpeg'
import ad from '@/assets/images/category/广告.jpeg'
import funny from '@/assets/images/category/搞笑.jpeg'
import travel from '@/assets/images/category/旅行.jpeg'
import vogue from '@/assets/images/category/时尚.jpeg'
import car from '@/assets/images/category/汽车.jpeg'
import mixedCuts from '@/assets/images/category/混剪.jpeg'
import game from '@/assets/images/category/游戏.jpeg'
import love from '@/assets/images/category/爱情.jpeg'
import life from '@/assets/images/category/生活.jpeg'
import scienceFiction from '@/assets/images/category/科幻.jpeg'
import record from '@/assets/images/category/纪录.jpeg'
import delicacies from '@/assets/images/category/美食.jpeg'
import motion from '@/assets/images/category/运动.jpeg'
import music from '@/assets/images/category/音乐.jpeg'
import notice from '@/assets/images/category/预告.jpeg'

export interface MovieChannel {
  id: string
  name: string
  image: string
}

export function useMovieChannel() {
  const channelList: MovieChannel[] = [
    { id: '1', name: '创意', image: originality },
    { id: '2', name: '剧情', image: Plot },
    { id: '3', name: '动画', image: animation },
    { id: '4', name: '励志', image: inspirational },
    { id: '5', name: '实验', image: experiment },
    { id: '6', name: '广告', image: ad },
    { id: '7', name: '搞笑', image: funny },
    { id: '8', name: '旅行', image: travel },
    { id: '9', name: '时尚', image: vogue },
    { id: '10', name: '汽车', image: car },
    { id: '11', name: '混剪', image: mixedCuts },
    { id: '12', name: '游戏', image: game },
    { id: '13', name: '爱情', image: love },
    { id: '14', name: '生活', image: life },
    { id: '15', name: '科幻', image: scienceFiction },
    { id: '16', name: '纪录', image: record },
    { id: '17', name: '美食', image: delicacies },
    { id: '18', name: '运动', image: motion },
    { id: '19', name: '音乐', image: music },
    { id: '20', name: '预告', image: notice }
  ]

  return { channelList }
}
