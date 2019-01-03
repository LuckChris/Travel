<template lang='pug'>
.detail-wrapper
    detail-banner(:bannerImg='bannerImg' :sightName='sightName' :gallaryImgs='gallaryImgs')
    detail-head
    p 很多的内容很长的内容很多的内容
</template>
<script>
import detailBanner from './banner'
import detailHead from './head'
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
    detailBanner,
    detailHead

  },
  async created () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
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
p {
  height: 100rem;
}

</style>
