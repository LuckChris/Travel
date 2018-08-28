<template lang='pug'>
  .city-content-wrapper
    city-head
    city-list
</template>
<script>
import CityHead from './city-head'
import CityList from './city-list'
export default {
  name: 'cityContent',
  components: {
    CityHead,
    CityList
  }
}
</script>
<style lang='less'>
.city-content-wrapper{
  width:100%;
}

</style>
