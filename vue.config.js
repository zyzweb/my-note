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

module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  lintOnSave: false //暂时关掉eslint的检查
}