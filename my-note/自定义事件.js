let ev = new Event('custom')
window.addEventListener('custom',function () {
    console.log('custom');
},false)
window.dispatchEvent('ev')

//customEvent与Event 都可以创建自定义事件   customEvent可以添加数据