<template lang='pug'>
swiper
  swiper-slide.swiper-iconfont-content(v-for='page,index of pages',:key='index')
    .iconfont-item(v-for='item,index in page',:key='item.id')
      img(:src="item.imgUrl")
      p {{item.desc}}
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    list: Array
  },
  data () {
    return {

    }
  },
  components: {
    swiper,
    swiperSlide

  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }

  }
}
</script>
<style lang='less'>
@import 'swiper/dist/css/swiper.css';
.swiper-iconfont-content{
      width:100%;
      height: auto;
      .iconfont-item{
        width: 25%;
        height: 1.5rem;
        padding-top: .1rem;
        text-align: center;
        float: left;
        padding-bottom: 1.6rem;
        img{
        width: 1.1rem;
        height: 1.1rem;
        margin: 0 auto;
        }
      }
  }

</style>
