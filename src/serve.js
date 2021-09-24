import { createApp } from "./main";

export default context => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp();
    router.push(context.url).catch(err => {
      console.log("路由跳转报错", err);
    });
    router.onReady(() => {
      resolve(app);
    }, reject);
  });
};
