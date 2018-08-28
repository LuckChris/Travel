<template lang='pug'>
  .city-head-content.white-color
    router-link(to='/').back-icon.iconfont.icon-previewleft
    .city-title 城市选择
</template>
<script>
export default {
  name: 'cityContent'
}
</script>
<style lang='less'>
.city-head-content{
  position: relative;
  overflow: hidden;
  height: .88rem;
  line-height: .88rem;
  font-size: .32rem;
  background-color: #00bcd4;
  .back-icon{
   position: absolute;
   top: 0;
   left: 0;
   width: .64rem;
   text-align: center;
   font-size: .4rem;
   color: #fff;
  }
  .city-title{
     text-align: center;
  }
}

</style>
