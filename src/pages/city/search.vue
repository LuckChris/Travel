<template lang='pug'>
  .city-wrapper
    .city-search
      input(placeholder='输入城市名或拼音', v-model='keyword')
    .search-content(v-if='keyword' ref="listWrapper")
      ul.content
        li.item(v-for='(item,index) in list',:key='index',@click='handleClick(item.name)') {{item.name}}
        li(v-show='hasNoData') 没有找到匹配数据

</template>
<script>
import {mapMutations} from 'vuex'
export default {
  name: 'citySearch',
  // props: {
  //   cities: Object
  // },
  props: ['cities'],
  data () {
    return {
      keyword: '',
      list: [],
      timer: null,
      scroll: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    handleClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(values => {
            if (values.spell.indexOf(this.keyword) > -1 || values.name.indexOf(this.keyword) > -1) {
              result.push(values)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>
<style lang='less' scoped>
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
      text-align: left;
      color: #666;
      // padding-top: .2rem
      padding-left: .3rem;
    }
  }
  .search-content{
    width:100%;
    height: 20rem;
    position: absolute;
    left: 0;
    top:1.7rem;
    right: 0;
    bottom: 0;
    background-color:#eee;
    z-index: 9;
   overflow: hidden;
    .item{
      height: 0.62rem;
      line-height: 0.62rem;
      background-color: #fff;
      color: #666;
      padding-left: .2rem;
    }
  }
}
</style>
