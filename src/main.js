import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-vue/dist/bootstrap-vue.css"
import './registerServiceWorker'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap'

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");  