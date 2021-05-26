import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';

// jisoo
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueParticles from 'vue-particles';
// import VueFullPage from 'vue-fullpage.js'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// ES6
import VueTyperPlugin from 'vue-typer'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Element from 'element-ui';

// main
import Carousel3d from 'vue-carousel-3d';

Vue.use(Carousel3d);
Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(BootstrapVue);
Vue.use(VueTyperPlugin);
Vue.use(VueParticles);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
