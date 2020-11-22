import Vue from 'vue';
import App from './App.vue';
import store from "./store";
import router from './router';
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
/*eslint-disable */
// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(VueMaterial);
Vue.use(IconsPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
