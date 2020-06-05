setTimeout(() => {
  console.log("...我是第一层...");
  setTimeout(() => {
    console.log("...我是第二层...");
    setTimeout(() => {
      console.log("...我是第三层...");
      setTimeout(() => {
        console.log("...我是第四层...");
      }, 2000);
    }, 1000);
  }, 3000);
}, 2000);

function getPromise(time, str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, time);
  });
}

/**
// 又陷入了回调地狱
getPromise(2000,'...第一层...').then(result=>{
    console.log(result)

    getPromise(3000,'...第二层...').then(result2=>{
        console.log(result2)
    })
})
**/

getPromise(2000, "...第一层...")
  .then((result) => {
    //...第一层相当于result
    console.log(result);
    return getPromise(3000, "...第二层..."); //利用return一个promise
  })
  .then((result2) => {
    console.log(result2);

    return getPromise(1000, "...第三层...");
  })
  .then((result3) => {
    console.log(result3);

    return getPromise(2000, "...第四层...");
  })
  .then((result4) => {
    console.log(result4);
  });

// modules/user.js

// login( userInfo ){
//     return new Promise((resolve, reject) => {
//         validCode().then(res => {
//             const {validCode, requestId} = res.data.data
//             const {username, password} = userInfo
//             return login({username: username.trim(), password, validCode, requestId})
//         }).then(res => {
//             resolve(res)
//         })
//     })
// }

/**
        then的参数，第一个是必须的，成功的结果，第二个参数是可选的
        */
promise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    //promise有catch方法,then方法和catch方法返回的都是promise对象,catch === then(null, reject)
    console.log(err);
  });

{
  // 基本定义  通过回调
  let ajax = function(callback) {
    console.log("执行");
    setTimeout(function() {
      callback && callback.call(); //if(callback) callback.call() 在这里相当于callback()
    }, 1000);
  };
  ajax(function() {
    console.log("timeout1");
  });
}

{
  //通过promise
  let ajax = function() {
    console.log("执行2");
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve();
      }, 1000);
    });
  };

  ajax().then(function() {
    //Promise对象有then方法 function(){console.log('promise','timeout2')}相当于resolve
    console.log("promise", "timeout2");
  });
}

{
  let ajax = function() {
    //多个异步
    console.log("执行3");
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(1);
      }, 1000);
    });
  };

  ajax()
    .then(function(res) {
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(res);
        }, 2000);
      });
    })
    .then(function(res) {
      console.log("timeout3");
      console.log(res);
    });
}

{
  let ajax = function(num) {
    //报错
    console.log("执行4");
    return new Promise(function(resolve, reject) {
      if (num > 5) {
        resolve();
      } else {
        throw new Error("出错了");
      }
    });
  };

  ajax(6)
    .then(function() {
      console.log("log", 6);
    })
    .catch(function(err) {
      //catch方法捕获错误
      console.log("catch", err);
    });

  ajax(3)
    .then(function() {
      console.log("log", 3);
    })
    .catch(function(err) {
      console.log("catch", err);
    });
}

{
  //所有图片加载完之后再添加页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = src;
      img.onload = function() {
        //图片加载完成
        resolve(img); //resolve都是放在一段时间之后在加载的
      };
      img.onerror = function(err) {
        reject(img);
      };
    });
  }

  function showImgs(imgs) {
    imgs.forEach(function(img) {
      document.body.appendChild(img);
    });
  }

  Promise.all([
    //加载完之后再展示出来   3个全部加载才返回promise   3张图片都加载了之后才会显示在页面中来
    loadImg("http://1.png"),
    loadImg("http://2.png"),
    loadImg("http://3.png"),
  ]).then(showImgs); //showImgs相当于上面的resolve()
}

{
  //有一个图片加载完之后就添加页面
  function loadImg(src) {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.src = src;
      img.onload = function() {
        //图片加载完成
        resolve(img);
      };
      img.onerror = function(err) {
        reject(img);
      };
    });
  }

  function showImgs(img) {
    let p = document.createElement("p");
    p.appendChild(img);
    document.body.appendChild(p);
  }

  Promise.race([
    //哪个先加载了就显示哪个
    loadImg("http://1.png"),
    loadImg("http://2.png"),
    loadImg("http://3.png"),
  ]).then(showImgs);
}

function getPromise(time, str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, time);
  });
}

{
  /**
异步函数就是在普通函数的funciton前面加上 async关键字
*/
  async function timeTask() {
    const result1 = await getPromise(2000, "...第一层1...");
    console.log(result1);

    const result2 = await getPromise(3000, "...第二层2...");
    console.log(result2);

    const result3 = await getPromise(1000, "...第三层3...");
    console.log(result3);

    const result4 = await getPromise(2000, "...第四层4...");
    console.log(result4);
  }

  // 调用的时候和普通的函数一样
  timeTask();
}
