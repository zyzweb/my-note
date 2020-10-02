1.安装  npm i typescript -g
2.检查版本   tsc -v
tsc作用: 负责将 ts代码转为浏览器和nodejs识别的js 代码 

设置 VSCode  自动编译
1. "outDir" : "./js/" 
2. 改 修改  tsconfig.json 置 文件，设置 s js  文件夹：
3. 置 设置 vscode  监视任务

# 在vue中使用ts
 - npm i -g @vue/cli
 - vue create demo
 - vue add @vue/typescript
 - npm i vuex