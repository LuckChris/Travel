<template lang='pug'>
.list(ref='wrapper')
  .list-wrapper
    .area
      .title 当前城市
      .button-list
        .button-wrapper
          .button {{currentCity}}
    .area
      .title 热门城市
      .button-list
        .button-wrapper(v-for='(item,index) in hot',:key='item.id',@click='choseCityHandle(item.name)')
          .button {{item.name}}
    .area(v-for='item,index in cityList',:key='index',:ref='index')
      .title {{index}}
      .item-list(v-for='i,index in item ')
        .item {{i.name}}
</template>
<script>
import { XButton } from 'vux'
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'cityListContent',
  components: {
    XButton
  },
  props: ['cityList', 'hot', 'letter'],
  data () {
    return {
      scroll: null
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }

  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    choseCityHandle (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])

  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>
<style lang='less'>
.list {
  overflow: hidden;
  position: absolute;
  top: 1.98rem;
  left: 0;
  right: 0;
  bottom: 0;
  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    .button-wrapper {
      float: left;
      width: 33.33%;
      .button {
        margin: 0.1rem;
        padding: 0.1rem 0;
        text-align: center;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }
  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
      border-bottom: 0.5px solid #ccc;
    }
  }
}
</style>
