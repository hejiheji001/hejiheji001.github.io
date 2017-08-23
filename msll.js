var bannedKeys = [];

var check = function() {
  if (bannedKeys.indexOf(uk) === -1) {
    return true;
  }else{
    alert("试用已到期～");
    return false;
  }
}

var getEnc = function(orderId){
  var mobile = $("#mobile").val();
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

var getUrl = function(data){
  if(data.query){
    var re = data.query.results;
    if(re){
      var str = re.reply.enStr;
      var mobile = $("#mobile").val();
      var code = $("#code").val();
      var u = "http://ms.lefone.cn/msflowday/couponShowController/showCoupon.do?enStr=" + encodeURIComponent(str);
      $("#result").text("码：" + code + " 手机号：" + mobile + " 充值链接：" + u);
    }
  }
}
