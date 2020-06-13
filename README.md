# 192.168.123.217  家里无线ipv4地址
### vue-cli 已经配置了 scss less stylus 只需安装对应 loader 即可使用

### vue inspect > output.js vue inspect plugins 只查看 plugins

### chainWebpack 是链式修改，而 configureWebpack 更倾向于整体替换和修改 都能修改

### // vue-loader 是 webpack 的加载器，允许你以单文件组件的格式编写 Vue 组件
在vue-cli.3.3版本后 baseUrl被废除了，要写成 publicPath
环境变量修改之后要重启
vue-cli-service serve 命令默认设置的环境是 development，你需要修改 package.json 中的 serve 脚本的命令为：
"serve": "vue-cli-service serve --mode stage" 才能更换环境变量
配置的权重  .env.[mode].local > .env.[mode] > .env.local > .env  
相同配置项权重大的覆盖小的，不同配置项它们会进行合并操作，类似于 Object.assign 的用法。
webpack 通过 DefinePlugin 内置插件将 process.env 注入到客户端代码中。 所以前端代码也可以访问process.env
vue.config.js 可以使用所有.env变量,但是cli只是将VUE_APP开头的注入到前端代码

```js
const VueLoaderPlugin = require("vue-loader/lib/plugin");

// webpack 内置插件，用于创建在编译时可以配置的全局常量
const { DefinePlugin } = require("webpack");

// 用于强制所有模块的完整路径必需与磁盘上实际路径的确切大小写相匹配
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

// 识别某些类型的 webpack 错误并整理，以提供开发人员更好的体验。
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");

// 将 CSS 提取到单独的文件中，为每个包含 CSS 的 JS 文件创建一个 CSS 文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 用于在 webpack 构建期间优化、最小化 CSS文件
const OptimizeCssnanoPlugin = require("optimize-css-assets-webpack-plugin");

// webpack 内置插件，用于根据模块的相对路径生成 hash 作为模块 id, 一般用于生产环境
const { HashedModuleIdsPlugin } = require("webpack");

// 用于根据模板或使用加载器生成 HTML 文件
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 用于在使用 html-webpack-plugin 生成的 html 中添加 <link rel ='preload'> 或 <link rel ='prefetch'>，有助于异步加载
const PreloadPlugin = require("preload-webpack-plugin");

// 用于将单个文件或整个目录复制到构建目录
const CopyWebpackPlugin = require("copy-webpack-plugin");
```
