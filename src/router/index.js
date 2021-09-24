import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
Vue.use(Router);

// 通过$router.push()的方式跳转路由时，路由重复点击会报错，虽然不影响功能使用，但是会报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "HelloWorld",
        component: HelloWorld
      }
    ]
  });
}
