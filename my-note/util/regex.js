// 检测手机号
function checkMobile(s) {
  let regu = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  return regu.test(s);
}
// 将手机号中间部分替换为星号
function phoneMask(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}
// 检测姓名 必须要有两个汉字
function checkNomalName(s) {
  let regu = /^[\u4e00-\u9fa5]{2,}$/;
  return regu.test(s);
}
// 检测邮箱
function isEmail(str) {
  let myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
  return myReg.test(str);
}
// 检测身份证
function checkIdCard(idCard) {
  let regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  //如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (regIdCard.test(idCard)) {
    if (idCard.length == 18) {
      let idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); //将前17位加权因子保存在数组里
      let idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
      let idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
      for (let i = 0; i < 17; i++) {
        idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
      }
      let idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
      let idCardLast = idCard.substring(17); //得到最后一位身份证号码
      //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod == 2) {
        if (idCardLast == "X" || idCardLast == "x") {
          return true;
        } else {
          return false;
        }
      } else {
        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast == idCardY[idCardMod]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    return false;
  }
}

// 身份证号打码
function idCardMask(idCard = "") {
  return idCard.substr(0, 1) + idCard.slice(1, -4).replace(/\d/g, "*") + idCard.substr(-4);
}
