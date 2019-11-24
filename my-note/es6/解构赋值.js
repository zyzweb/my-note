//变量交换
{
  let a = 1;
  let b = 2;

  [a, b] = [b, a];
  console.log(a, b); // 2 1
}

//取到函数返回值
{
    function f() {
        return [1,2]
    }
    let [a,b] = f()
    console.log(a,b); // 1 2
}

//可以选择性的取值,可以和扩展运算符混合使用
{
    function f() {
        return [1,2,3,4,5]
    }
    let a,b,c
    [a,,...b] = f()
    console.log(a,b);
}

//对象的解构赋值

{
    let o = {p:42,q:true}
    let {p,q} = o
    console.log(p,q); // 42 true
}

//json字符串解构 常用
{
    let metaData = {
        title: 'abc',
        test: [{
            title: 'test',
            desc: 'description'
        }]
    }
    let {title:esTitle,test:[{title:cnTitle}]} = metaData
    console.log(esTitle,cnTitle); //abc test
}