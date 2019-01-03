<template lang='pug'>
 transition(name='fade')
    slot
</template>
<script>
export default {
  name: 'fadeAnimation',
  data () {
    return {

    }
  }
}
</script>
<style lang='less' scoped>
.fade-enter-active, .fade-leave-activ{
 transition:  opacity .5s;
}
.fade-enter,.fade-leave-to {
    opacity: 0;
}
</style>
