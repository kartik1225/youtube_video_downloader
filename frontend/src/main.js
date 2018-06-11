// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {store} from './store/store.js'

Vue.config.productionTip = false
Vue.use(Vuetify)

export const bus = new Vue();
Vue.prototype.$bus = bus;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


