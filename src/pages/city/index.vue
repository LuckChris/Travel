<template lang='pug'>
  .city-content-wrapper
    city-head
    city-search(:cities='cityList')
    city-list(:cityList='cityList',
              :hot='hotCitys',
              :letter='letter')
    city-alphabet(:letters='cityList',@change='letterHandle')
</template>
<script>
import CityHead from './city-head'
import CityList from './city-list'
import CityAlphabet from './city-alphabet'
import citySearch from './search'
export default {
  name: 'cityContent',
  components: {
    CityHead,
    CityList,
    CityAlphabet,
    citySearch
  },
  data () {
    return {
      cityList: [],
      hotCitys: [],
      letter: ''
    }
  },
  methods: {
    async getCityInfo () {
      try {
        let res = await this.$axios.get('/api/city.json')
        let data = res.data.data
        this.cityList = data.cities
        this.hotCitys = data.hotCities
      } catch (error) {
        console.log(error)
      }
    },
    letterHandle (letter) {
      this.letter = letter
    }
  },
  created () {
    this.getCityInfo()
  }
}
</script>
<style lang='less'>
.city-content-wrapper {
  width: 100%;
}
</style>
