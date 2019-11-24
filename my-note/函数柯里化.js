function cc(x,y) {
    return x + y
  }
  
  console.log(cc(1,2)); //3
  
  
  //就是函数的尾调用,调用一次返回一个函数然后在调用一次,把接受多个参数的函数变换成接受一个单一参数的函数
  function dd(x) {
    return function (y) {
      return x + y
    }
  }
  console.log(dd(1)(2)); //3
  
  //好处可以参数复用 类似es6的默认参数 可以将检验数字或者字母的正则进行复用
  
  // 正常正则验证字符串 reg.test(txt)
  // 函数封装后
  function check(reg, txt) {
    return reg.test(txt)
  }
  
  check(/\d+/g, 'test')       //false
  check(/[a-z]+/g, 'test')    //true
  
  // Currying后
  function curryingCheck(reg) {
    return function(txt) {
        return reg.test(txt)
    }
  }
  
  var hasNumber = curryingCheck(/\d+/g)
  var hasLetter = curryingCheck(/[a-z]+/g)
  
  hasNumber('test1')      // true
  hasNumber('testtest')   // false
  hasLetter('21212')      // false