import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import { BNavbar } from "bootstrap-vue";
Vue.component("b-navbar", BNavbar);

import { NavbarPlugin } from "bootstrap-vue";
Vue.use(NavbarPlugin);

import { BTable } from "bootstrap-vue";
Vue.component("b-table", BTable);

import { TablePlugin } from "bootstrap-vue";
Vue.use(TablePlugin);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
