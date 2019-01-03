import LoadingComponent from './index'
import Vue from 'vue'
const LoadingContructor = Vue.extend(LoadingComponent)

const $vm = new LoadingContructor({
  el: document.createElement('div'),
  data: {show: false}
})
document.body.appendChild($vm.$el)

const Loading = (options) => {
  $vm.show = true
  if (options instanceof Promise) {
    return options.then(data => {
      Loading.close()
      return data
    }, reason => {
      Loading.close()
      return reason
    })
  } else if (typeof options === 'string') {
    $vm.text = options
  }
  return Loading
}
Loading.close = () => {
  $vm.show = false
  $vm.text = ''
  return Loading
}
export default Loading
