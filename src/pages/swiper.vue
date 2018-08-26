<template lang="pug">
 .swiper-content-wrapper
    swiper.swiper-content( height='2.3rem' loop=true auto
      dots-position="center" dots-class='active-dots', :list='list')
</template>
<script>
import {Swiper, SwiperItem} from 'vux'
export default {
  name: 'swiperContent',
  props: {
    list: Array
  },
  data () {
    return {
      // vux 中 swiper的使用json数据中的图片路径必须是img变量

    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style lang='less' scoped>

</style>
