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