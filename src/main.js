// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import { createRouter } from "./router";

Vue.config.productionTip = false;

// 使用ssr的情况下，每一次访问都会创建一个新的vue实例

/* eslint-disable no-new */
var router = createRouter();
export function createApp() {
  const app = new Vue({
    router,
    render: h => h(App)
  });

  return { app, router };
}
