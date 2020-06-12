import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import 'nprogress/nprogress.css'

import BaseIcon from '@/baseComponents/BaseIcon'
import BaseInput from '@/baseComponents/BaseInput'
import BaseSelect from '@/baseComponents/BaseSelect'

//globally register base components
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseInput', BaseInput)
Vue.component('BaseSelect', BaseSelect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
