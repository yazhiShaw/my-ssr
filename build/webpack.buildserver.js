const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const vueSSRServerPlugin = require("vue-server-renderer/server-plugin");

const ServerConfig = merge(baseWebpackConfig, {
  entry: {
    app: "./src/serve.js"
  },
  output: {
    // webpack直接打包，是以浏览器为目标打包的，但是这里服务端的打包，是运行在node上的
    libraryTarget: "commonjs2"
  },
  target: "node",
  plugins: [new vueSSRServerPlugin()]
});

module.exports = ServerConfig;
