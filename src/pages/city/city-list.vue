<template lang='pug'>
  .city-list-content
    .hot-city-title 热门城市
    .hot-city-content
      x-button(mini) 上海
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
  .hot-city-title{
    font-size: .24rem;
    padding: .16rem 0 .16rem .2rem;
    color: #212121;
    background-color: #eee;
    box-sizing: border-box;
  }
}

</style>
