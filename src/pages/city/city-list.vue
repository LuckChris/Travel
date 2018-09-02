<template lang='pug'>
  .city-list-content
    .city-content
      .city-title 当前城市
      .city-list
        .city-item
          .button 上海
        .city-item
          .button 北京
      .city-title 热门城市
      .city-list
        .city-item
          .button 上海
      .city-all(v-for='item in 6')
        .city-title A
        .city-all-list
            ul
              li 上海
              li 深圳
              li 上海
              li 深圳
              li 上海
              li 深圳
</template>
<script>
import {XButton} from 'vux'
export default {
  name: 'cityListContent',
  components: {
    XButton
  }
}
</script>
<style lang='less'>
.city-list-content{
  width:100%;
  .city-title{
    line-height: .6rem;
    background-color: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
  }
  .city-list{
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
    .city-item{
      float: left;
      width:33.33%;
      .button{
        margin: .1rem;
        padding: .1rem 0;
        text-align: center;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
  }
  .city-all{
   .city-all-list{
      background-color: #fff;
      padding-left: .2rem;
      ul{
        li{
          border-bottom: 1px solid #eee;
        }
      }
    }

  }

}

</style>
