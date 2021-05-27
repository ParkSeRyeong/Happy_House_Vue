import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles';
import Carousel3d from 'vue-carousel-3d';
// import SequentialEntrance from 'vue-sequential-entrance';
// import 'vue-sequential-entrance/vue-sequential-entrance.css';



// import VueFullPage from 'vue-fullpage.js'
// import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// ES6
//import Element from 'element-ui';

// Vue.use(SequentialEntrance);
Vue.use(VueParticles);
Vue.use(Carousel3d);
Vue.config.productionTip = false;
Vue.use(Argon);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);
Vue.use(VueTyperPlugin);
Vue.use(VueParticles);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
