import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  VueRouter,
  VueAxios,
  render: h => h(App)
}).$mount('#app')
