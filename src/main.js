import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

// jisoo
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueParticles from 'vue-particles';

import SequentialEntrance from 'vue-sequential-entrance';
import 'vue-sequential-entrance/vue-sequential-entrance.css';
Vue.use(SequentialEntrance);
Vue.use(VueParticles);

Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);     
Vue.use(BootstrapVue);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
