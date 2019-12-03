let that; // 存储 mPromise
/**
 * 因为每次 new mPromise(then, catch的时候都需要链式调用)会调用 mPromise(constructor)，
 * 所以放到外面
 */
// 状态、参数配置
let config = {
  status: null,
  resolveParam: null,
  rejectParam: null
};

/**
 * mPromise函数：原生Promise的手动实现
 * @param {new mPromise时传入的回调函数} callback
 */
function mPromise(callback) {
  that = this;
  // 往new mPromise时传入的回调函数，传回两个参数
  callback(that.resolve, that.reject);
}

mPromise.prototype = {
  constructor: mPromise,
  resolve(param) {
    config.rejectParam = null; // 重置 reject 参数
    config.resolveParam = param;
    config.status = "PENDING";
  },
  reject(param) {
    config.resolveParam = null; // 重置 resolve 参数
    config.rejectParam = param;
    config.status = "PENDING";
  },
  then(_fn) {
    // 有resolve才调用
    if (config.resolveParam !== null) {
      config.status = "RESOLVED";
      // 运行 then 的回调，捕获其中的报错，调用 catch
      try {
        _fn(config.resolveParam);
      } catch (err) {
        config.rejectParam = err;
        that.catch(() => {});
      }
    }
    return new mPromise(() => {});
  },
  catch(_fn) {
    // 有reject才调用
    if (config.rejectParam !== null) {
      config.status = "REJECTED";
      _fn(config.rejectParam);
    }
    return new mPromise(() => {});
  },
  finally(_fn) {
    // 初始化配置
    config = {
      status: null,
      resolveParam: null,
      rejectParam: null
    };
    _fn();
  }
};

//使用方式同原生promise
let f1 = function(num) {
  return new mPromise((resolve, reject) => {
    if (num < 10) resolve(num);
    else if (num === 11) reject(num);
  });
};

f1(6)
  .then(res => {
    // cc; 打开的话，会被 try catch捕获，触发catch，而不会往下走
    console.log("then: ", res); // then 6
  })
  .catch(err => {
    // 这里会捕获 then 里面的报错
    console.log("catch: ", err); // ReferenceError: cc is not defined
  });

f1(11)
  .then(res => {
    console.log("then: ", res);
  })
  .catch(err => {
    console.log("catch: ", err); // catch 11
  })
  .finally(() => {
    console.log("11 finally\n"); // 11 finally
  });

f1(12)
  .then(res => {
    console.log("then: ", res);
  })
  .catch(err => {
    console.log("catch: ", err);
  })
  .finally(() => {
    console.log("12 finally\n"); // 12 finally
  });
