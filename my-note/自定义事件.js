//customEvent与Event 都可以创建自定义事件   customEvent可以添加数据
var ev = new CustomEvent('custom') //或者 new Event('custom)
document.addEventListener('custom',function () {
    console.log('触发自定义事件');
})
document.dispatchEvent(ev)


let customEvent = new CustomEvent('customEventName', {
    detail: {
        a: 1
      }
})
document.addEventListener('customEventName', e => {
    console.log(e)
    console.log(e.detail.a) // 1
})
document.dispatchEvent(customEvent) //触发自定义事件


//jquery注册 触发自定义事件
// $('div').on('linge', function () {
//     alert("我是林哥事件...");
//   });
//   var i = 0;
//   $('#btn').on('click', function () {
//     i++;
//     if(i == 3){
//       $('div').trigger('linge');
//     }
//   });