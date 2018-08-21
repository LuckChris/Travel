<template lang='pug'>
  .recommend-wrapper
    .recommend-title 周末去哪
    .recommend-item(v-for="item,index in 3",:key='index')
      .item-img
        img(src='http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg')
      .item-info
        .item-title.ellipsis 上海迪士尼乐园
        .item-desc.ellipsis 上海迪士尼乐园上海
</template>
<script>
import { XButton } from 'vux'
export default {
  name: 'weekend',
  data () {
    return {

    }
  },
  components: {
    XButton
  }
}
</script>
<style lang="less" scoped>
.recommend-wrapper{
  width:100%;
  .recommend-title{
    margin-top: .2rem;
    line-height: .8rem;
    background: #eee;
    text-indent: .2rem;
  }
  .recommend-item{
    .item-img{
      overflow: hidden;
      height: 0;
      padding-bottom: 33.9%;
      img{
       width: 100%;
      }
    }
    .item-info{
      padding: .1rem;
      .item-title{
        line-height: .54rem;
        font-size: .32rem;
      }
      .item-desc{
        line-height: .4rem;
        color: #333;
      }
    }
  }
}

</style>
