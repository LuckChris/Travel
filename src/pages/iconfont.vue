<template lang='pug'>
swiper
  swiper-slide.swiper-iconfont-content(v-for='page,index of pages',:key='index')
    .iconfont-item(v-for='item,index in page',:key='index')
      img(:src="item.img")
      p {{item.desc}}
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      iconfontList: [
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景点门票1'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '水上乐园2'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '游乐园3'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '海洋馆45'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '动植物园5'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '玩转长隆6'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '景点门票7'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '水上乐园8'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '游乐园9'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '海洋馆10'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '动植物园22'},
        {img: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png', desc: '玩转长隆23'}

      ]

    }
  },
  components: {
    swiper,
    swiperSlide

  },
  computed: {
    pages () {
      const pages = []
      this.iconfontList.forEach((item, index) => {
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
