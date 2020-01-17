//就是用了一个render函数,通过函数式组件生成组件
//没有vue实例也就没有this;没有状态 stateless(没有响应式数据)
//没有this只能靠context(上下文来传递)
//props  children   slots (a slots object)  parent  listeners  injections  data(包含其他属性的引用)
//https://juejin.im/post/5b38f4bef265da59bc2cb921

export default {
  name: "functional-button",
  functional: true, //设为true
  render(createElement, { data, children }) {
    console.log("this", this); // => null
    console.log('data', data ); //on: {click: ƒ}    包含数据和事件
    console.log('children',children); //[VNode]
    console.log('666', ['hello', ...children]);
    return createElement("button", data, ['hello', ...children]);//渲染button按钮
  }
};
