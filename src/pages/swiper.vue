<template lang="pug">
 .swiper-content-wrapper
    swiper.swiper-content( height='2.3rem' loop=true auto
      dots-position="center" dots-class='active-dots', :list='imageList')
</template>
<script>
import {Swiper, SwiperItem} from 'vux'
export default {
  name: 'swiperContent',
  props: ['imageList'],
  data () {
    return {
      // imageList: [
      //   {
      //     img: ' http://img1.qunarzz.com/piao/fusion/1807/c6/44fce1467be17702.jpg_750x200_406f5fc3.jpg'
      //   },
      //   {
      //     img: 'http://img1.qunarzz.com/piao/fusion/1808/5e/514ce60160e62602.jpg_750x200_9b0074e2.jpg'
      //   },
      //   {
      //     img: 'http://img1.qunarzz.com/piao/fusion/1807/66/e5a5cec881702f02.jpg_750x200_67bb5691.jpg'
      //   }
      // ]

    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  created () {
    console.log(this.imageList)
  }
}
</script>
<style lang='less' scoped>

</style>
