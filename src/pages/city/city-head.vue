<template lang='pug'>
  .city-head-content.white-color
    .back-icon.iconfont.icon-previewleft
    .city-title 城市选择
</template>
<script>
export default {
  name: 'cityContent'
}
</script>
<style lang='less'>
.city-head-content{
  width:100%;
  height: .8rem;
  line-height: .88rem;
  background-color:#00bcd4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  .back-icon{
    padding-left: .3rem;
    font-size: .56rem;
    box-sizing: border-box;
  }
  .city-title{
    flex:1;
    text-align: center;
    font-size: .32rem;
    padding-right: .6rem;
  }
}

</style>
