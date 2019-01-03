import Vue from 'vue'

import Loading from '../../components/loading/index'

Vue.prototype.$loading = Loading
Vue.prototype.$loaded = Loading.close

// export default {
//   Loading
// }
