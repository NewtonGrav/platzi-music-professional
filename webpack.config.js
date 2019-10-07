const path = require("path")

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src/main.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    flename: "build.js"
  },
  module: {
    rules: [{
        test: /\.pug$/,
        loader: "pug-plain-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      }
    ]
  },
  resolve: {
    alias: {
      "vue$": "vue/dist/vue.esm.js",
      "@": path.resolve(__dirname, "./src")
    }
  }
}