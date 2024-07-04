const { defineConfig } = require("@vue/cli-service");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "http://localhost:8081/",

  chainWebpack: (config) => {
    config.optimization.splitChunks({
      chunks: "async",
    });
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 8081,
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "app2Module",
        filename: "remoteEntry.js",
        dts: false,
        exposes: {
          "./ToolBox": "./src/ToolBox.vue",
        },
      }),
    ],
  },
});
