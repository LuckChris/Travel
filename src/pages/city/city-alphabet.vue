<template lang='pug'>
.alphabet-content
  ul.alphabet-list.bgColor
    li.item(v-for='item,index in letter',:key='item',
             @click='clickHandle'
             @touchstart='touchStart',
             @touchmove='touchMove',
             @touchend='touchEnd',
             :ref='item'
             ) {{item}}
</template>
<script>
export default {
  props: ['letters'],
  data () {
    return {
      startY: '',
      timer: null,
      touchStatus: false
    }
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.letters) {
        letter.push(i)
      }
      return letter
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    clickHandle (e) {
      this.$emit('change', e.target.innerText)
    },
    touchStart (e) {
      this.touchStatus = true
    },
    touchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 98
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    touchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang='less' scroped>
.alphabet-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.98rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item {
    line-height: 0.4rem;
    text-align: center;
  }
}
</style>
