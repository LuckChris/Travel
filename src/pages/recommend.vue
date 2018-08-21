<template lang='pug'>
  .recommend-wrapper
    .recommend-title 热销推荐
    .recommend-item(v-for="item,index in 6",:key='index')
      .item-img
        img(src='http://img1.qunarzz.com/sight/p0/201405/12/51b63883c25f5d87af3c08bb016e2bd7.jpg_200x200_8eb33f07.jpg')
      .item-info
        .item-title.ellipsis 上海迪士尼乐园
        .item-desc.ellipsis 上海迪士尼乐园上海
        .item-button.text-right
          x-button(mini type="primary") 查看详情

</template>
<script>
import { XButton } from 'vux'
export default {
  name: 'recommend',
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
    }
  }
}

</style>
