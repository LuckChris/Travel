<template lang='pug'>
  .recommend-wrapper
    .recommend-title 热销推荐
    .recommend-item(v-for="item,index in list",:key='index')
      .item-img
        img(:src='item.imgUrl')
      .item-info
        .item-title.ellipsis {{item.title}}
        .item-desc.ellipsis {{item.desc}}
        .item-button.text-right
          x-button(mini type="primary") 查看详情

</template>
<script>
import { XButton } from 'vux'
export default {
  name: 'recommend',
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
    height: 1.9rem;
    display: flex;
    // justify-content: flex-start;
    // align-items: center;
    overflow: hidden;
    .item-img{
      img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
      }
    }
    .item-info{
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title{
        line-height: .54rem;
        font-size: .32rem;
      }
      .item-desc{
        line-height: .4rem;
        color: #ccc;
      }
      .item-button{
        padding-top: .2rem;
        padding-right: .2rem;
      }

    }
  }
}

</style>
