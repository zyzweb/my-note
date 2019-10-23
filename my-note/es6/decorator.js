{//decorator修饰器 是一个函数 修改行为(扩展类的功能)  修改类的行为(只在类里面才能用)  
  //抽离了业务漏记更加具有修饰性和可维护性
  let readonly=function(target,name,descriptor){ //target是类本身
    descriptor.writable=false;//只读
    return descriptor
  };

  class Test{
    @readonly //修饰器  添加只读方法   或者在class前面一句话添加
    time(){
      return '2017-03-11'
    }
  }

  let test=new Test();

  // test.time=function(){
  //   console.log('reset time');
  // };

  console.log(test.time());
}


{
  let typename=function(target,name,descriptor){
    target.myname='hello'; // target表示的类本身不是类的实例,所以myname是静态属性
  }

  @typename //只能在class前面添加修饰器
  class Test{

  } 

  console.log('类修饰符',Test.myname);
  // 第三方库修饰器的js库：core-decorators; npm install core-decorators
}

{
  let log = (type) => {
    return function (target,name,descriptor) {
      let src_method = descriptor.value
      descriptor.value = (...arg) => {
        src_method.apply(target,arg)
        console.log(`log${type}`) //埋点后执行
      }
    }
  }

  class AD {
    @log('show')
    show() {
      console.log(`ad is show`); 
    }

    @log('click')
    click() {
      console.log(`ad is click`);
    }
  }

  let ad = new AD()
  ad.show()
  ad.click()
}