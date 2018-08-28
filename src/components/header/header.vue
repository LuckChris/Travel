<template lang='pug'>
.header-content-wrapper
    .header-back
        i.iconfont.icon-previewleft
    .header-input.iconfont.icon-search 输入城市/景点/游玩主题
    router-link(to='/city').header-city.white-color
        p 城市
        i.iconfont.icon-arrowdown-copy
</template>
<script>
import {Group, Cell} from 'vux'
export default {
  components: {
    Group, Cell
  }
}
</script>
<style lang='less' scoped>
.header-content-wrapper{
    width:100%;
    height: .88rem;
    background-color: #00afc7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    padding: 0 .25rem;
    box-sizing: border-box;
    .header-back{
        width: .4rem;
        line-height: .88rem;
        font-size: .36rem;
        text-align: left;
    }
    .header-input{
        flex: 0 0 75%;
        background-color: #fff;
        color: #e4e7ea;
        height: .6rem;
        line-height: .6rem;
        border-radius: .06rem;
        padding-left: .2rem;
        box-sizing: border-box;
    }
    .header-city{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

}

</style>
