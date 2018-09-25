<template lang='pug'>
.detail-wrapper
    detail-banner(:bannerImg='bannerImg' :sightName='sightName' :gallaryImgs='gallaryImgs')
</template>
<script>
import detailBanner from './banner'
export default {
  name: '',
  data () {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: []

    }
  },
  components: {
    detailBanner

  },
  async created () {
    this.getDAta()
  },
  methods: {
    async getDAta () {
      try {
        console.log('aaa')
        let {data} = await this.$axios.get('/api/detail.json', {
          params: {
            id: this.$route.params.id
          }
        })
        const list = data.data
        this.bannerImg = list.bannerImg
        this.sightName = list.sightName
        this.gallaryImgs = list.gallaryImgs
      } catch (e) {
        console.log(e || '请求出错')
      } finally {
        console.log('err data')
      }
    }
  }
}
</script>
<style lang='less'>

</style>
