const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");
const vueSSRClientPlugin = require("vue-server-renderer/client-plugin");

const ClientConfig = merge(baseWebpackConfig, {
  entry: {
    app: "./src/client.js"
  },
  plugins: [new vueSSRClientPlugin()]
});

module.exports = ClientConfig;
