/*
 * @Descripttion: 
 * @Author: zxy
 * @Date: 2020-08-27 23:34:32
 * @LastEditTime: 2020-08-28 00:33:05
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugin/aMap.js"

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
