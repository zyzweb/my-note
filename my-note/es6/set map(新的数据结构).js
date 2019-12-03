//优先使用map 对唯一性有要求使用set 放弃object和array
{
    let list = new Set();  //类似于数组就是不能重复
    list.add(5); //添加元素
    list.add(7);
  
    console.log('size',list.size);//里面多少个元素
  }
  
  {
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
  
    console.log('size',list.size);
  }
  
  {
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
  
    console.log('list',list);
  
    let arr=[1,2,3,1,'2'];
    let list2=new Set(arr); //set中的元素不能重复 可以使用来去重
  
    console.log('unique',list2);
  }
  
  {
    let arr=['add','delete','clear','has']; // 添加 删除 清空 是否存在
    let list=new Set(arr);
  
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('list',list);
  }
  
  {
    let arr=['add','delete','clear','has'];
    let list=new Set(arr);
  
    for(let key of list.keys()){
      console.log('keys',key);
    }
    for(let value of list.values()){
      console.log('value',value);
    }
    for(let [key,value] of list.entries()){
      console.log('entries',key,value);
    }
  
    list.forEach(function(item){console.log(item);})
  }
  
  
  {
    let weakList=new WeakSet();//set的阉割版
  
    let arg={};
  
    weakList.add(arg);
  
    // weakList.add(2); //weakSet里面只能是对象,不能是其他的;对象是弱引用,没有垃圾回收检测
  
    console.log('weakList',weakList);
  }
  
  
  
  {//类似于对象,key可以是任意类型
    let map = new Map(); //第一种定义
    let arr=['123'];
  
    map.set(arr,456); //添加元素 key可以为任何数据类型    map.set('1',2).set('3',4) 可以连续设置多个map
  
    console.log('map',map,map.get(arr)); //获取值
  }
  
  {
    let map = new Map([['a',123],['b',456]]); //第二种定义
    console.log('map args',map);
    console.log('size',map.size); //里面有多少元素
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
  }
  
  {
    let weakmap=new WeakMap(); // weak表示弱引用  weakset同理  对于值的引用不计入垃圾回收机制
  
    let o={};
    weakmap.set(o,123);
    console.log(weakmap.get(o));
  }
  