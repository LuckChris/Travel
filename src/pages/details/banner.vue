<template lang='pug'>
.banner-wrapper
    .banner(@click='bannerClickHandler')
        img(:src='bannerImg')
        .banner-info
            .info-title
                p {{sightName}}
            .info-number
                p {{this.gallaryImgs.length}}
    fade-animation
        common-gallery(:imgList='gallaryImgs' v-show='showGallery' @close='closeHandler')
</template>
<script>
import FadeAnimation from '../../components/fade/fade-animation'
import CommonGallery from '../../components/common-gallery/index'
export default {
  props: ['bannerImg', 'sightName', 'gallaryImgs'],
  components: {FadeAnimation, CommonGallery},
  data () {
    return {
      showGallery: false

    }
  },
  methods: {
    bannerClickHandler () {
      this.showGallery = true
    },
    closeHandler () {
      this.showGallery = false
    }
  },
  created () {
    console.log(this.bannerImg)
  }
}
</script>
<style lang='less'>
.banner-wrapper{
    width:100%;
    .banner{
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        img{
            width: 100%;
        }
        .banner-info{
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: .6rem;
            color: #fff;
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
            .info-title{
                flex: 1;
                font-size: .32rem;
                padding: 0 .2rem;
            }
            .info-number{
                height: .32rem;
                line-height: .32rem;
                margin-top: .14rem;
                padding: 0 .4rem;
                border-radius: .2rem;
                background: rgba(0,0,0,.8);
                font-size: .24rem;
            }
        }
    }
}

</style>
