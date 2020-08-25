// 判断是否在微信
function isweixin() {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.search("micromessenger") > -1) {
    return true;
  } else {
    return false;
  }
}
//判断是否在钉钉看有没有dingtalk字符串

//判断函数执行次数
function foo() {
  //其他函数逻辑blah blah。。。
  console.count("foo 被执行的次数：");
}
foo();
foo();
foo();

//检测一段代码的执行时间
//方法一:
console.time("start"); // start和后面要一致
var arr = new Array(1000000);
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Object();
}
console.timeEnd("start");

//方法二:
var start = new Date().getTime();
var array = new Array(1000000);
for (let i = 0; i < array.length; i++) {
  array[i] = new Object();
}
console.log(new Date().getTime() - start);

//渲染对象数组
let arr = [{ a: 2 }, { b: 3 }];
arr.map(i => ({ ...i, c: 5 }));
console.log(arr.map(i => ({ ...i, c: 5 })));

//生成空数组
Array.apply(null, { length: 10 }); // === new Array(10).fill(1)

//13位时间戳转10位   10转13乘以1000
Math.round(new Date() / 1000); //除以1000然后四舍五入

// 日期 加年  不用单独判断 平年闰年
const dateDeal = function(date) {
  const startYear = date.getFull(); //当前年
  const startMonth = date.getMonth() + 1; //当前月
  const startDay = date.getDate(); //当前日
  const startDate = startYear + "-" + startMonth + "-" + startDay; //开始日期
  const contractDuration = +(this.contractDuration.value || 0); //默认为0
  if (contractDuration) {
    const endYear = startYear + contractDuration; //结束年份
    let endDate = endYear + "-" + startMonth + "-" + startDay; //结束日期
    const d = new Date(endDate);
    const dMonth = d.getMonth() + 1;
    if (!dateTime || dMonth != startDay) {
      //二月日期问题特殊处理
      endDate = endYear + "-" + startMonth + "-" + startDay;
    }
    this.endContract.value = new Date(endDate);
  }
};

//合并参数
function merge(obj1, obj2) {
  obj1 = obj1 || {};
  obj2 = obj2 || {};
  for (var key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}

//文件上传前端压缩然后上传
function fileElemUpdata(elem) {
  let me = elem;
  var image = elem.files[0];
  //如果大于250kb
  var quality = 0.7; // 默认图片质量为0.7
  if (elem.files[0].size / 1024 > 257) {
    quality = 0.4;
  }
  var reader = new FileReader(); //实例化文件读取对象
  reader.readAsDataURL(image); //将文件读取为 DataURL,也就是base64编码
  reader.onload = function(ev) {
    //文件读取成功完成时触发
    var dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
    var img = new Image();
    img.src = dataURL; //将DataURL码赋值给img标签
    img.onload = function() {
      var that = this;
      // 默认按比例压缩
      var w = 300,
        // h = that.height,
        scale = img.width / img.height;
      var h = w / scale;
      //生成canvas
      var canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(that, 0, 0, w, h);
      // quality值越小，所绘制出的图像越模糊
      var dataImgURL = canvas.toDataURL("image/jpeg", quality); //转换为base64
      let cardUrl = "";
      var imgDataBase = {};
      if (IdOrBnak == "Bank") {
        cardUrl = "/api/faurecia/bank_card_read";
        imgDataBase = { imageBase64: dataImgURL.split(";base64,")[1] };
      } else {
        cardUrl = "/api/faurecia/id_card_read";
        imgDataBase = { imageBase64: dataImgURL };
      }
      var xhrImg = new XMLHttpRequest();
      xhrImg.open("post", sendUrl + cardUrl, true);
      xhrImg.onreadystatechange = function() {
        if (
          (xhrImg.readyState == 4 && xhrImg.status == 200) ||
          xhrImg.status == 304
        ) {
          let resPhone = JSON.parse(xhrImg.responseText);
          if (resPhone.errcode == 0) {
            if (IdOrBnak == "Bank") {
              _this.cardNumber.value = resPhone.data;
            } else if (IdOrBnak == "Id") {
              _this.idcard.value = resPhone.data.idNo;
              _this.birthday.value = new Date(
                resPhone.data.year +
                  "-" +
                  resPhone.data.month +
                  "-" +
                  resPhone.data.day
              );
              _this.sex.value =
                resPhone.data.sex == "男" ? "男male" : "女female";
            }
          }
        }
      };
      xhrImg.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhrImg.send(JSON.stringify(imgDataBase)); //发送post请求,转换图像的base64
    };
  };
}

//封装ajax
ajax = function(met, url, data) {
  var metArr = ["GET", "POST", "PUT", "DELETE"];
  return axios({
    method: metArr[met],
    url: url,
    data: data,
    params: met < 1 ? data : {}
  });
};

/**
 * 功能 图片压缩以及添加水印
 * @param file：一个是文件(类型是图片格式)，或是base64
 * @param obj：{width:375,height:600,quality:0.7,watermark:false}  压缩的宽高及质量,高建议不要设置按比例压缩, watermark为是否添加水印，为true时即添加时间，为string时则原样填加。
 * @param callback：回调函数
 * @return void
 * @example photoCompress(file,obj,callback)
 * 已对图片旋转做了处理
 * @Author: lizuping
 * @Date: 2018-00-00
 * @Last Modified by: lizuping
 * @Last Modified time: 2019-06-28 15:48:55
 */
function canvasDataURL(path, obj, callback, t) {
  let img = new Image();
  img.src = path;
  img.onload = function() {
    let that = this;
    window.EXIF.getData(that, function() {
      let ro = window.EXIF.getTag(this, "Orientation");
      // 默认按比例压缩
      let w = that.width;
      var h = that.height;
      var scale = w / h;
      w = obj.width || w;
      h = obj.height || w / scale;
      let quality = 0.7; // 默认图片质量为0.7
      // 生成canvas
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      function cSet(w, h) {
        let anw = document.createAttribute("width");
        anw.nodeValue = w;
        let anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
      }
      let th = (w * w) / h;
      let pi = false;

      if (ro > 1) {
        switch (ro) {
          case 6: // 旋转90度
            cSet(w, th);
            pi = Math.PI / 2;
            ctx.rotate(pi);
            ctx.drawImage(that, 0, -w, th, w);
            h = th;
            break;
          case 3: // 旋转180度
            cSet(w, h);
            pi = Math.PI;
            ctx.rotate(Math.PI);
            ctx.drawImage(that, -w, -h, w, h);
            break;
          case 8: // 旋转-90度
            cSet(w, th);
            pi = (3 * Math.PI) / 2;
            ctx.rotate(pi);
            ctx.drawImage(that, -th, 0, th, w);
            h = th;
            break;
        }
      } else {
        cSet(w, h);
        ctx.drawImage(that, 0, 0, w, h);
      }
      // 图像质量
      if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
        quality = obj.quality;
      }
      // 增加水印
      if (obj.watermark) {
        ctx.font = "20px sans-serif"; // 设置字体
        ctx.fillStyle = "rgba( 0 , 122 , 204 , 0.8 )"; // 填充rgba字体颜色
        ctx.textAlign = "right"; // 文本对齐方式
        if (pi) {
          ctx.rotate(-pi);
        }
        if (obj.watermark === true) {
          obj.watermark = new Date().toLocaleString(); // 默认水印为当前时间
        }
        ctx.fillText(obj.watermark, w - 20, h - 20);
      }
      // quality值越小，所绘制出的图像越模糊
      // 回调函数返回base64的值
      callback(canvas.toDataURL(t, quality));
    });
  };
}
function photoCompress(file, obj, callback) {
  let rs = /^(data:image)/;
  if (typeof file === "string" && rs.test(file)) {
    canvasDataURL(file, obj, callback, file.split(";")[0].split(":")[1]);
  } else {
    let ready = new FileReader();
    /* 开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容. */
    ready.readAsDataURL(file);
    ready.onload = function() {
      // photoCompress(re, obj, callback);
      canvasDataURL(this.result, obj, callback, file.type);
    };
  }
}

//对象深拷贝
var arr = [{ name: 1, age: 2, sex: null }];
// var b = arr
// b[0].name = 33
// console.log(arr);

var objDeepCopy = function(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] =
      typeof source[item] === "object"
        ? objDeepCopy(source[item])
        : source[item];
  }
  return sourceCopy;
};
var b = objDeepCopy(arr);
b[0].name = 33;
console.log(b);
console.log(arr);

//数字千分位隔开
const numFormat = num => {
  if (!isNaN(num)) {
    let newNum = num.toString().split(".");
    if (newNum.length === 2 && newNum[1].length > 2) {
      //小数位数大于2
      newNum = Number(num).toFixed(2);
    } else {
      newNum = num;
    }
    if (Math.abs(newNum) < 1000) {
      return Number(newNum).toFixed(2);
    }
    let c = "";
    if (newNum.toString().indexOf(".") !== -1) {
      //小数
      let pointNum = newNum.toString().split(".");
      let beforePoint = pointNum[0];
      let afterPoint = pointNum[1];
      c = Number(beforePoint).toLocaleString() + "." + afterPoint;
    } else {
      //整数
      c = newNum.toLocaleString();
    }
    return c;
  } else {
    return "";
  }
};

//对象数组通过id大小排序 
var cc = [{id:2,name:'zhang'},{id:1,name:'li'},{id:3,name:'wang'}]
cc.sort((a,b) => {
    return a.id - b.id
})
console.log(cc); // [{id:1,name:'li'},{id:2,name:'zhang'},{id:3,name:'wang'}]


//获取当月1号
function initDate() {
  let a = new Date().setDate(1);
  let year = new Date(a).getFullYear() + "";
  let month = new Date(a).getMonth() + 1;
  if (month < 10) month = "0" + month;
  let date = new Date(a).getDate();
  if (date < 10) date = "0" + date;
  return year + "-" + month + "-" + date;
}

//专门获取地址栏参数的方法  window.location.search  = ?search=%E9%9E%8B  name= search  返回鞋   
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
}

// 判断无效值：undefined、isNaN、null、"null"、""
function isNullUndefinedTemp(value) {
  return (typeof (value) == "undefined") || ((typeof (value) == "number") && isNaN(value)) || (value == "null") || (!value && value == 0) || (typeof (value) === "string" ? value.trim() == "" : false);
}

// 对象验证规则
const schema = {
  first: {
    required:true
  },
  last: {
    required:true
  }
}

// 通用验证函数  不用每次编写验证函数
const validate = (schema, values) => {
  for(field in schema) {
    if(schema[field].required) {
      if(!values[field]) {
        return false;
      }
    }
  }
  return true;
}

console.log(validate(schema, {first:'Bruce'})); // false
console.log(validate(schema, {first:'Bruce',last:'Wayne'})); // true


//图片转blob
function compressImage(file) {
  var read = new FileReader()
  read.readAsDataURL(file)
  return new Promise(function(resolve, reject){
    read.onload = function(e) {
      var img = new Image()
      img.src = e.target.result
      img.crossOrigin = "*"
      img.onload = function() {
        var that = this
        var w = that.width
        var h = that.height
        var quality = 1 //默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas')
        var ctx = canvas.getContext('2d')
        //创建属性节点
        var anw =  document.createAttribute('width')
        anw.nodeValue = w
        var anh = document.createAttribute('height')
        anh.nodeValue = h
        canvas.setAttributeNode(anw)
        canvas.setAttributeNode(anh)
        ctx.drawImage(img, 0, 0 ,w, h)
        if(quality && quality <= 1 && quality > 0) {
          quality = quality
        }
        var base64 = canvas.toDataURL('image/*', quality)
        var blob = convertBase64UrlToBlob(base64)
        resolve(blob)
      }
    }
  })
}

/**
     * 判断无效值
     * @param {any} value 待检测的数据：undefined、isNaN、null、"null"、""、0
     * @param {Boolean} isZero（可选） 0作为无效数参数2传入true，默认0为false作为有效数
     * @returns {Boolean} 
     */
  function isNullUndefinedTemp(value, isZero=false) {
      return (typeof (value) == "undefined") 
      || ((typeof (value) == "number") && isNaN(value)) 
      || (value == "null") 
      || (value === null) 
      || (isZero ? !value && value == 0:false) 
      || (typeof (value) === "string" ? value.trim() == "" : false);
  }

