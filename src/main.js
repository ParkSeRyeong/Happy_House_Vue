import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueParticles from 'vue-particles'
// import VueFullPage from 'vue-fullpage.js'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions

Vue.use(VueParticles)
Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue);
// Vue.use(VueFullPage);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
