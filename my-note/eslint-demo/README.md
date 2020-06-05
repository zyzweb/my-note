npm i eslint -D  安装eslint
npx eslint --init 初始化eslint    //作用和在node_modules中.bin目录下执行eslint一样
npx eslint ./src/index.js  eslint检测
npx eslint ./src/*.js  eslint检测所有js
"eslint": "eslint ./src/*.js"  // 在script配置脚本
"eslint": "eslint ./src"  // 检测src目录下所有的js文件
.eslintrc.js放在不同文件夹实现eslint多重规则配置
也可以将.eslintrc.js 放在package.json中   eslintConfig: {}
/* eslint no-console: "off", no-unused-vars: "off" */ 在当前文件关闭
husky git提交代码时进行lint