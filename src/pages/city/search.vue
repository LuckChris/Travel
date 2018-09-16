<template lang='pug'>
  .city-wrapper
    .city-search
      input(placeholder='输入城市名或拼音')
    .search-content
      ul
        li 内容

</template>
<script>
export default {
  name: 'citySearch'
}
</script>
<style lang='less'>
.city-wrapper {
  background-color: #00bcd4;
  .city-search {
    width: 100%;
    text-align: center;
    padding-bottom: 0.2rem;
    input {
      width: 90%;
      border-radius: 0.04rem;
      line-height: 0.64rem;
      outline: none;
      border: none;
      text-align: center;
    }
  }
  .search-content{
    width:100%;
    position: absolute;
    left: 0;
    top:1.7rem;
    right: 0;
    bottom: 0;
    background-color:green;
    z-index: 1;
  }
}
</style>
