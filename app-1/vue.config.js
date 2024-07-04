const { defineConfig } = require("@vue/cli-service");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.optimization.splitChunks({
      chunks: "async",
    });
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    port: 8080,
  },

  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "app1Module",
        filename: "remoteEntry.js",
        remotes: {
          app2Module: "app2Module@//localhost:8081/remoteEntry.js",
        },
        dts: false,
      }),
    ],
  },
});
