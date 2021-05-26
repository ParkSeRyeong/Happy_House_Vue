import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueAnimated from '@codekraft-studio/vue-animated'

Vue.use(VueAnimated)

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
