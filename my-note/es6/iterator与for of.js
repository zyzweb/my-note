//iterator是数据集合的一个接口   将array object  map  set  数据集合统一可以调用 遍历是其中的一种应用场景
//array map set 可以直接调用 for...of  object需要自定义iterator接口
//for...of循环的过程就是不断调用iterator接口的过程
{
    let arr=['hello','world'];
    let map=arr[Symbol.iterator](); //数组中内置了iterator
    console.log(map.next()); //{value: "hello", done: false}
    console.log(map.next()); //{value: "world", done: false}
    console.log(map.next()); //{value: undefined, done: true}
  }
  
  {
    let obj={//不同于数组,对象没有内置iterator接口 可以自定义iterator
      start:[1,3,2],
      end:[7,9,8],
      [Symbol.iterator](){ //声明iterator 是一个函数
        let self=this;
        let index=0;
        let arr=self.start.concat(self.end);
        let len=arr.length;
        return { //返回一个对象
          next(){ //需要有next方法
            if(index<len){
              return {
                value:arr[index++],
                done:false
              }
            }else{
              return {
                value:arr[index++],
                done:true
              }
            }
          }
        }
      }
    }
    for(let value of obj){ //iterator设置成功之后才能使用for of
      console.log(value);
    }
  }
  
  {
    let arr=['hello','world'];
    for(let value of arr){
      console.log(value); // hello world
    }
  }
   