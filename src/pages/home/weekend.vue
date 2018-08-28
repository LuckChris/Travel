<template lang='pug'>
  .recommend-wrapper
    .recommend-title 周末去哪
    .recommend-item(v-for="item,index in list",:key='item.id')
      .item-img
        img(:src='item.imgUrl')
      .item-info
        .item-title.ellipsis {{item.title}}
        .item-desc.ellipsis {{item.desc}}
</template>
<script>
import { XButton } from 'vux'
export default {
  name: 'weekend',
  props: {
    list: Array
  },
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
