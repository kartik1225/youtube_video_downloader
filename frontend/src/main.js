// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {store} from './store/store.js'
import VueSocketio from 'vue-socket.io';
import config from './config'
import 'vuetify/dist/vuetify.min.css'
import VueAnalytics from 'vue-analytics'


Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VueSocketio,config.server);

export const bus = new Vue();
Vue.prototype.$bus = bus;

Vue.use(VueAnalytics, {
  id: 'UA-130688909-1',
  router
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


