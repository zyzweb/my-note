// module.exports = {
//   // 选项...
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
module.exports = {
  configureWebpack: (config) => {
    console.log('----------------------',process.env.npm_package_name);
    if (process.env.NODE_ENV === "production") {
      return {
        // plugins: [
        //   new CompressionPlugin({   // 开启 Gzip 压缩
        //     test: /\.js$|\.html$|.\css/, //匹配文件名
        //     threshold: 10240, //对超过10k的数据压缩
        //     deleteOriginalAssets: false, //不删除源文件
        //   }),
        // ],
        // productionSourceMap: false
        // devtool: "source-map",
        // devtool: 'eval'  //不生成source-map
      };
    } else {
      return {
        devtool: "source-map",
        devServer: {
          disableHostCheck: true, //阻止hostname检查   ngrok
        },
      };
    }
  },
  lintOnSave: false, //暂时关掉eslint的检查
  // baseUrl: '/'
  // baseUrl: "vue", //写了这个会带二级目录 publicPath一样  实质就是将baseUrl写进到publicPath中
};
