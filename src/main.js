import Vue from "vue";
import router from "./router.js"; 
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;  //TODO: moverlo al fichero de configuraciones

//Probar comando: vue create simple-login-project
//https://medium.com/js-dojo/how-to-build-an-spa-using-vue-js-vuex-vuetify-and-firebase-use-vuex-and-access-the-api-f8036aa464ad
new Vue({
  vuetify,
  router,
  render: (h) => h(App)
}).$mount("#app");
