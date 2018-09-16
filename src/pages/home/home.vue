<template lang='pug'>
.home-content-wrapper
  home-header
  home-swiper(:list='swiperlist')
  iconfont-swiper(:list='iconfontList')
  home-recommend(:list='recommendList')
  home-weekend(:list='weekendList')
</template>
<script>
import HomeHeader from '@/components/header/header'
import iconfontSwiper from './iconfont'
import HomeRecommend from './recommend'
import HomeWeekend from './weekend'
import HomeSwiper from './swiper'
export default {
  name: 'home',
  data () {
    return {
      swiperlist: [],
      iconfontList: [],
      recommendList: [],
      weekendList: []
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
      this.$axios.get('/api/index.json').then(res => {
        const data = res.data.data
        this.swiperlist = data.swiperList
        this.iconfontList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      })
    }
  },
  created () {
    this.getHomeInfo()
  }
}
</script>
<style lang='less'>
.home-content-wrapper {
  // background-color: pink;
}
</style>
