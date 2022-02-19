import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App.vue'
import Vue from 'vue'

window.$ = window.jQuery = require('jquery')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
