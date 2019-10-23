//iterator是数据集合的一个接口
{
    let arr=['hello','world'];
    let map=arr[Symbol.iterator](); //数组中的iterator
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
  }
  
  {
    let obj={//不同于数组,对象没有内置iterator接口
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
    for(let key of obj){ //iterator设置成功之后才能使用for of
      console.log(key);
    }
  }
  
  {
    let arr=['hello','world'];
    for(let value of arr){
      console.log('value',value);
    }
  }
   