<template lang='pug'>
.head-content-wrapper
    router-link.header-abs(to='/' v-show='showAbs')
        i.iconfont.header-abs-back.icon-previewleft
    .header-fixed(v-show='!showAbs' :style='opacityStyle')
        router-link.detail-title(to='/')
            i.iconfont.header-abs-back.icon-previewleft
            span 景点详情

</template>
<script>
export default {
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang='less' scoped>
.head-content-wrapper{
    width: 100%;
    .header-abs{
        position: absolute;
        left: .2rem;
        top: .2rem;
        width: .6rem;
        line-height: .6rem;
        border-radius: .3rem;
        text-align: center;
        background: rgba(0,0,0,.8);
        .header-abs-back{
            color: #fff;
            font-size: .4rem;
        }
    }
    .header-fixed{
        z-index: 2;
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        height: .8rem;
        line-height: .8rem;
        text-align: center;
        color: #fff;
        font-size: .32rem;
        background:#00afc7;
        .detail-title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            padding: 0 .4rem;
        }
        .header-fixed-back{
            // position: absolute;
            // top: 0;
            // left: 0;
            // width: .64rem;
            // text-align: center;
            font-size: .64rem;
            color: #fff;
        }
    }

}

</style>
