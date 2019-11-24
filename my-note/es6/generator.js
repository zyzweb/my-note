{
    // genertaor基本定义  是promise的进阶  generator返回的就是iterator  遇到yield就停止 调用next方法才运行下一步
    let tell = function*() {
      yield "a";
      yield "b";
      return "c";
    };
  
    let k = tell();
  
    console.log(k.next()); //next方法是iterator的方法
    console.log(k.next());
    console.log(k.next());
    console.log(k.next());
  }
  
  {
    let obj = {}; //给对象添加iterator的另一种方法 更简单
    obj[Symbol.iterator] = function*() {
      yield 1;
      yield 2;
      yield 3;
    };
  
    for (let value of obj) {
      console.log("value", value);
    }
  }
  
  {
    let state = function*() {
      //状态机 可以一直循环下去
      while (1) {
        yield "A";
        yield "B";
        yield "C";
      }
    };
    let status = state();
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
    console.log(status.next());
  }
  
  // {
  //   let state=async function (){ //是generator的语法糖作用一样,需要安装babel插件进行编译
  //     while(1){
  //       await 'A';
  //       await 'B';
  //       await 'C';
  //     }
  //   }
  //   let status=state();
  //   console.log(status.next());
  //   console.log(status.next());
  //   console.log(status.next());
  //   console.log(status.next());
  //   console.log(status.next());
  // }
  
  //generator的一个应用场景抽奖,
  //好处 1.不用保存全局变量, 2.将抽奖和次数的逻辑分离开
  let draw = function(count) {
    //具体抽奖逻辑
    console.log(`剩余${count}次`);
  };
  
  let result = function*(count) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  };
  
  let residue = function*(count) {
    while (count > 0) {
      count--;
      yield draw(count);
    }
  };
  
  {
    let star = residue(5);
    let btn = document.createElement("button");
    btn.id = "start";
    btn.textContent = "抽奖";
    document.body.appendChild(btn);
    document.getElementById("start").addEventListener(
      "click",
      function() {
        star.next();
      },
      false
    );
  }
  
  {
    //长轮循
    let ajax = function* () { //模拟ajax的过程
      yield new Promise(function (resolve,reject) {
        setTimeout(() => {
          resolve({code:0})
        }, 200);
      })
    }
  
    let pull = function() { //轮循的过程
      let generator = ajax()
      let step = generator.next() //运行一次yield
      step.value.then(function(d) { //value是promise实例
        if(d.code !=0) { //不是最新数据,再次去请求,1s请求一次
          setTimeout(() => {
            console.log('wait');
          }, 1000);
        } else {
          console.log(d); //是最新长轮循结束
        }
      })
    }
  
   pull()
  }
  //语法和实战看两遍  反推为什么这样写   自己写对比   
  