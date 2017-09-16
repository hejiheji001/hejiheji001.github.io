var str;
var code;
var mobile;

var showIn = function(){
  $("#in").append("<input type=text class=form-control id=rand placeholder=短信验证码><iframe id=frame src='' style='position: fixed; border: 1px solid black; top: 90px; left: 0px;background-color: yellow;width: 100%;height: 20%;'>");
  $("#charge").attr("onclick", "getEnc()");
  var param = atob(location.search.split("param=")[1]).split("#");
  str = param[0];
  code = param[1];
  mobile = param[2];
}

var getRand = function(){
  var randURL = "http://ms.lefone.cn/msflowday/couponShowController/generateCheckCode?enStr=Ko8GEZulztYGzlwL41zvKHByrFzWvp51AP6gW3RSF8A0MwN5zGrMT54iLl5UKI1qdI21FTBBrTk=&mobile=" + mobile;
  $("#frame").attr("src", randURL);
  $("#rand").text("黄色框文字包含true表示短信发送成功 90秒有效");
}

var charge = function(){
  var rand = $("#rand").val().trim();
  if(rand){
   var chargeURL = "http://ms.lefone.cn/msflowday/couponShowController/charegeCoupon?enStr=" + str + "&couponCode=" + code + "&mobile=" + mobile + "&chargeType=0&rand=" + rand;
   $("#frame").attr("src", chargeURL);
   $("#charge").text("黄色框中显示充值结果");
  }else{
   alert("请输入验证码");
  }
}

var check = function(){
  var checkURL = "http://ms.lefone.cn/msflowday/couponShowController/getCouponInfo?enStr=" + str;
  $("#frame").attr("src", checkURL);
  $("#check").text("黄色框中显示充值结果");
}
