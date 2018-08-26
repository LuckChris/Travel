<template lang='pug'>
.home-content-wrapper
    home-header
    home-swiper(:list='swiperlist')
    iconfont-swiper
    home-recommend
    home-weekend
</template>
<script>
import HomeHeader from '@/components/header/header'
import iconfontSwiper from './iconfont'
import HomeRecommend from './recommend'
import HomeWeekend from './weekend'
import HomeSwiper from './swiper'
import axios from 'axios'
export default {
  name: 'home',
  data () {
    return {
      swiperlist: []

    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    iconfontSwiper,
    HomeRecommend,
    HomeWeekend
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json').then((res) => {
        const data = res.data.data
        this.swiperlist = data.swiperList
        // console.log(data.swiperList)
        // console.log(this.swiperlist)
      })
    }

  },
  created () {
    this.getHomeInfo()
  }

}
</script>
<style lang='less'>
.home-content-wrapper{
  // background-color: pink;

}

</style>
