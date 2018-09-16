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
.city-head-content {
  position: relative;
  overflow: hidden;
  line-height: 0.88rem;
  font-size: 0.32rem;
  background-color: #00bcd4;
  .back-icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 0.64rem;
    text-align: center;
    font-size: 0.6rem;
    color: #fff;
    padding-left: 0.2rem;
  }
  .city-title {
    text-align: center;
  }
}
</style>
