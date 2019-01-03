<template lang='pug'>
.common-gallery-content
   .wrapper
    swiper(:options="swiperOption")
        swiper-slide(v-for='(item,index) in imgList' :key='index' )
            img.gallery-img(:src='item' @click='hideGalleryHandler')
        .swiper-pagination(slot='pagination')
</template>
<script>
export default {
  props: {
    imgList: Array
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade', // 带有渐变效果
        pagination: {
          el: '.swiper-pagination', // 分页器
          dynamicBullets: true // 分页点动态变化
        },
        paginationType: 'bullets', // 分液器样式
        observeParents: true,
        observer: true // 监视器
      }
    }
  },
  methods: {
    hideGalleryHandler () {
      console.log('aaaa')
    }
  }
}
</script>
<style lang='less'>
.common-gallery-content{
   display: flex;
   flex-direction: column;
   justify-content: center;
   z-index: 90;
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   bottom: 0;
   background-color: #000;
   .wrapper{
       height: 0;
       width: 100%;
       padding-bottom: 100%;
     }
    .gallery-img{
        width: 100%;
    }
    .swiper-pagination{
        color: #fff;
        bottom: .1rem;
    }
    .swiper-pagination-bullet-active{
      background-color: #fff;
    }

}
</style>
