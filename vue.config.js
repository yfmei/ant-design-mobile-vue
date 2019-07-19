const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // lintOnSave: true,
  // 配置高于chainWebpack中关于 css loader 的配置
  css: {
    // 是否开启支持 foo.module.css 样式
    modules: false,
    // 是否使用 css 分离插件 ExtractTextPlugin，采用独立样式文件载入，不采用 <style> 方式内联至 html 文件中
    extract: true,
    // 是否构建样式地图，false 将提高构建速度(true: 开发模式调试代码)
    sourceMap: false,
    // css预设器配置项, css-loader 推荐放在这里处理
    loaderOptions: {
      css: {
        // options here will be passed to css-loader

      },
      postcss: {
        // options here will be passed to postcss-loader
      },
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    // 基础配置，比如引入一个新插件
    plugins: [
      //  压缩 css 插件
      new MiniCssExtractPlugin({
        filename: "styles/[name].css"
      })
    ]
  },
  chainWebpack: (config) => {
    // 链式配置
    config.devtool("#inline-source-map")
    // 生产环境才混淆压缩代码
    // config.when(process.env.NODE_ENV === "production",
    //   config => config.plugin("minify").use(MiniCssExtractPlugin),
    //   config => config.devtool("source-map")
    // )
    config.devtool("source-map")
    config.resolve.extensions
      .add(".js'")
      .add(".vue'")
      .add(".json'")

    config.resolve.alias
      .set("@", resolve("src"))
      .set("api", resolve("src/api"))
      .set("assets", resolve("src/assets"))
      .set("components", resolve("src/components"))
      .set("router", resolve("src/router"))
      .set("store", resolve("src/store"))
      .set("style", resolve("src/style"))
      .set("util", resolve("src/util"))
      .set("views", resolve("src/views"))

    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap(options => {
        // 修改选项
        return options
      })
  },
  publicPath: process.env.NODE_ENV === "production"
    ? "./"
    : "./",
  outputDir: "dist",
  assetsDir: "./"
}
