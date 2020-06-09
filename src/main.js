import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
const VueFeatherIcon = require('vue-feather-icon')

Vue.use(VueFeatherIcon)

import BaseIcon from '@/baseComponents/BaseIcon'

//globally register base components
Vue.component('BaseIcon', BaseIcon)
//Vue.component('BaseButton', BaseButton)
//Vue.component('BaseInput', BaseInput)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
