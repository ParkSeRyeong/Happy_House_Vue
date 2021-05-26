import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
<<<<<<< HEAD
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(VueAnimated)
=======
// jisoo
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueParticles from 'vue-particles'
// import VueFullPage from 'vue-fullpage.js'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions

Vue.use(VueParticles)
//
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Element from 'element-ui';

>>>>>>> 46170109b6909564f35286cf5f689bb32fb233cc

// main
Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue);
<<<<<<< HEAD
=======
// Vue.use(VueFullPage);
>>>>>>> 46170109b6909564f35286cf5f689bb32fb233cc

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
