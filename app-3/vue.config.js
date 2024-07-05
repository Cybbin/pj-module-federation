const { defineConfig } = require("@vue/cli-service");
const {
  ModuleFederationPlugin,
} = require("@module-federation/enhanced/webpack");

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8082,
  },
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: "app3Module",
        filename: "remoteEntry.js",
        dts: false,
        shared: ["vue"],
      }),
    ],
  },
});
