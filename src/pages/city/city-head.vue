<template lang='pug'>
  .city-head-content.white-color
    router-link(to='/').back-icon.iconfont.icon-previewleft
    .city-title 城市选择
    .city-search
      input(placeholder='输入城市名或拼音')
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
 // height: .88rem;
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
  .city-search{
    width:100%;
   // height: .88rem;
    text-align: center;
   input{
    width:90%;
    border-radius: .04rem;
    //margin: 0 auto;
    line-height: .54rem;
    outline: none;
    border: none;
   }
  }
}

</style>
