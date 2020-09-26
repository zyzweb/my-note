// module.exports = {
//   baseUrl: './', //设置baseUrl,在index.html中导入js，其它文件的时候用到
//   productionSourceMap: false, // 不生成source Map文件
//   lintOnSave: false, //暂时关掉eslint的检查
//   css: {            //配置px转rem
//     loaderOptions: {
//       css: {},
//       postcss: {
//         plugins: [
//           require('postcss-px2rem')({
//             remUnit: 75 //设置根元素的字体大小
//           })
//         ]
//       }
//     }
//   }
// }

// const vuxLoader = require('vux-loader')
// module.exports = {
//   configureWebpack: config => {
//       require('vux-loader').merge(config, {
//           options: {},
//           plugins: ['vux-ui']
//       })
//   }
// }
// console.log('----------------------',process.env.npm_package_name); //能获得package.json中的name

const CompressionPlugin = require("compression-webpack-plugin");
// const TerserPlugin = require('terser-webpack-plugin')
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const fs = require("fs");
module.exports = {
  // productionSourceMap: false,

  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      // 为生产环境修改配置...
      // config.optimization.minimizer.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       compress: {
      //         drop_console: true, // console
      //       },
      //     },
      //   })
      // );

      // plugins: [
      //   new CompressionPlugin({   // 开启 Gzip 压缩
      //     test: /\.js$|\.html$|.\css/, //匹配文件名
      //     threshold: 10240, //对超过10k的数据压缩
      //     deleteOriginalAssets: false, //不删除源文件
      //   }),
      // ]
      // productionSourceMap: false
      // devtool: "source-map",
      // devtool: 'eval'  //不生成source-map
    } else {
      return {
        resolve: {
          alias: {//使用含compile的vue版本
            'vue$': 'vue/dist/vue.esm.js'
          }
        },
        devtool: "source-map",
        devServer: {
          disableHostCheck: true, //阻止hostname检查   ngrok
          // https: true //只设置这个会有https不安全提示
          // https: {//https 不会有安全提示  需要有证书和秘钥配合    也可不用放在项目中
          //   key: fs.readFileSync(`${__dirname}/localhost-key.pem`),
          //   cert: fs.readFileSync(`${__dirname}/localhost.pem`)
          // }
        },
      }
    }
  },
  chainWebpack: (config) => {
    /* 添加分析工具*/
    if (process.env.NODE_ENV === "production") {
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
        config.plugins.delete("prefetch");
      }

      if (process.env.NODE_ENV === "production") {
        // config.optimization.minimizer([
        //   new TerserPlugin({
        //     test: /\.js(\?.*)?$/i,
        //     terserOptions: {
        //       compress: {
        //         warnings: false,
        //         drop_debugger: true, //去除debugger
        //         drop_console: true,
        //         pure_funcs: ["console.log"], //去除console
        //       },
        //     },
        //   }),
        // ]);
      } else {
        // disable optimization during tests to speed things up
        config.optimization.minimize(false);
      }
    }
    // 移除 prefetch 插件
    config.plugins.delete("prefetch");
  },

  lintOnSave: false, //暂时关掉eslint的检查
  // baseUrl: '/'
  // baseUrl: "vue", //写了这个会带二级目录 publicPath一样  实质就是将baseUrl写进到publicPath中
};
