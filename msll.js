var bannedKeys = [];

var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号> <input type=text class=form-control id=code placeholder=兑换码><textarea id=result class=form-control>");
  $("#yql").attr("onclick", "getEnc()");
}

var check = function() {
  if (bannedKeys.indexOf(uk) === -1) {
    return true;
  }else{
    alert("试用已到期～");
    return false;
  }
}

var getEnc = function(orderId){
  var valid = check();
  if(valid){
    var mobile = $("#mobile").val();
    var orderId = $("#orderId").val();
    var u = 'https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/TDESEncryptByCMBCC.json?paramMap={"orderId":"'+orderId+'","mobile":"'+mobile+'"}';
    $.ajax({
        url: "https://query.yahooapis.com/v1/public/yql",
        dataType: "json",
        timeout: 10000,
        data: {
            format: "json",
            q: $("#yql").data("ql") + encodeURI(u) + $("#yql").data("qr")
        },
        success: getUrl,
        error: function(c, u) {
            alert("错误 联系开发者");
        }
    });
  }
}

var getUrl = function(data){
  if(data.query){
    var re = data.query.results;
    if(re){
      var str = re.reply.enStr;
      var mobile = $("#mobile").val();
      var code = $("#code").val();
      var orderId = $("#orderId").val();
      var u = "http://ms.lefone.cn/msflowday/couponShowController/showCoupon.do?enStr=" + encodeURIComponent(str);
      $("#result").text("订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 充值链接：" + u);
    }
  }
}
