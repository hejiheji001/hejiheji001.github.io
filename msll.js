var bannedKeys = ["aXJzdHRlc3Q="];
var myList = [];
var usedList = [];
var preset = [];
var presetX = 
[
"EO2017091303036658453@064ac303a5d6@",
"EO2017091303036661701@b7c82bf2b7bc@",
"EO2017091303036670840@b59761c7105c@",
"EO2017091303036665904@d2d9fa43c4e2@",
"EO2017091303036656666@b23de965a5aa@",
"EO2017091303036658678@c0b8bafdaeee@",
"EO2017091303036664413@b2f488855130@",
"EO2017082303036386287@f5ae41851eb3@",
"EO2017091303036663300@c3750f6dc624@",
"EO2017090603036594827@e21c43e3d581@",
"EO2017083003036460875@c0f66bda0047@",
"EO2017081603036213908@a7f1847f72df@",
"EO2017091303036666030@c98494796b74@",
"EO2017083003036458350@d99f040bc058@",
"EO2017091303036664306@bfdd72edcb4f@",
"EO2017082303036382387@db8860b6c8db@",
"EO2017082303036386647@f69518146f13@"];

var preset3 = [];
var preset1 = [
	"EO2017081603036214964@dbdecfd4f8e7@UmGdgjarlMiIaazfERBDfAPv12XU9g5BlR0yYbyjPaxRpJVhQ7c8HWnsPGyD0beS2aBuNTC8Jqw=",
	"EO2017092003036767302@bbdaa7bc3585@UmGdgjarlMiIaazfERBDfAPv12XU9g5B8H7qid6l+rQqAjao/kbwtKROlkMX61NI2aBuNTC8Jqw=",
	"EO2017092003036774839@f1a854f1b2c3@UmGdgjarlMiIaazfERBDfAPv12XU9g5Bjrgy0xKi3ceW2Q4olJV/fCcLdJSYFuzP2aBuNTC8Jqw="
];
var used = [];

var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号><input type=text class=form-control id=code placeholder=兑换码><input type=text class=form-control id=enc placeholder=充值码><textarea id=preset class=form-control placeholder='预设订单和兑换码，以便快速获取地址。格式为 订单号@兑换码@手机号 如 EO2017082303123456789@abcdefg@13588888888 一行一条数据' style='height:200px;font-size: 11px;'></textarea><textarea id=result class=form-control placeholder='破解结果(更新日期2017-09-21 18:01)' style='height:200px'></textarea><iframe id=frame src='' style='position: fixed; border: 1px solid black; top: 0px; right: 0px;background-color: yellow;width: 40%;height: 20%;'>");
  $("#yql").attr("onclick", "getEnc()");
  $("#charge").remove();
  $("#yql").text("获取链接");
  var param = location.hash.split("#")[1];
  preset = window["preset" + param];
  
  var latest = removeUsed(preset);
  localStorage.preset = latest.join("\r\n");
  var pl = $("#result").attr("placeholder") + " 现在是: preset" + param + " 剩余码子数量：" + latest.length;	
  $("#result").attr("placeholder", pl);
  if(localStorage.preset.length == 0){
   prompt("复制里面的内容并发我，检查码子使用情况", localStorage.used);
  }
	
  if(localStorage.rm){
  	used = localStorage.rm.split(",");
  }
	
  $("#clear").on("click", clear);
  var p = $("#preset");
  p.val(localStorage.preset);
  p.scrollTop(p[0].scrollHeight);
}

var removeUsed = function(){
 if(!localStorage.used){
     localStorage.used = usedList;
    }else{
     usedList = localStorage.used.split(",");
    }
 var result = [];
 preset.forEach(function(code){
  if(usedList.indexOf(code) == -1){
   result.push(code);
  }
 });
 return result;
}

var check = function() {
  if (bannedKeys.indexOf(uk) === -1) {
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
    //$("#yql").text("正在获取...");
 //    $("#yql").attr("disabled", "disabled");
    if(!retry){
     var pre = readLine();
     if(pre.length === 4){
      $("#orderId").val(pre[0].trim()); 
      $("#code").val(pre[1].trim());
      $("#mobile").val(pre[2].trim());
      $("#enc").val(pre[3].trim());
     }
    }
    var mobile = $("#mobile").val().trim();
    var orderId = $("#orderId").val().trim();
    var enc = $("#enc").val().trim();
    if(mobile && orderId && enc){

      // var u = 'https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/TDESEncryptByCMBCC.json?paramMap={"orderId":"'+orderId+'","mobile":"'+mobile+'"}';
      //var u = "http://ms.lefone.cn/msflowday/couponShowController/generateCheckCode?enStr=Ko8GEZulztYGzlwL41zvKHByrFzWvp51AP6gW3RSF8A0MwN5zGrMT54iLl5UKI1qdI21FTBBrTk=&mobile=" + mobile;
      getCharge();
	    
	    //      $.ajax({
 //          url: "https://query.yahooapis.com/v1/public/yql",
 //          dataType: "json",
 //          timeout: 10000,
 //          data: {
 //              format: "json",
 //              q: $("#yql").data("ql") + encodeURI(u) + $("#yql").data("qr")
 //          },
 //          success: getUrl,
 //          error: function(c, u) {
 //              alert("错误 如果多次尝试无果请联系开发者");
 //              $("#yql").removeAttr("disabled");
 //          }
 //      });
		//$("#frame").attr("src", u);
		//$("#yql").text("如果黄色框文字中包含true表示验证码发送成功 点击可以重发验证码");
	    	//$("#yql").attr("onclick", "getEnc(true)");
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
      $("#yql").text("验证码获取成功 请稍后填写");
    }else{
     setTimeout(function(){
      getEnc(true);
     }, 5000)
    }
  }else{
    alert("错误 如果多次尝试无果请联系开发者");
  }
}

var getRandom = function(){
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (var i = 3; i > 0; i--) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	};
	if(used.indexOf(text) == -1){
		used.push(text);
		return text;
	}else{
		return getRandom();
	}
}

var clear = function(){
	$("#mobile").val("");
	$("#code").val("");
	$("#orderId").val("");
	$("#rand").val("");
	$("#enc").val("");
	$("#yql").attr("onclick", "getEnc()");
}

var getCharge = function(){
	var mobile = $("#mobile").val().trim();
	var code = $("#code").val().trim();
	var orderId = $("#orderId").val().trim();
	var enc = $("#enc").val().trim();
	//var rand = $("#rand").val().trim();
	//if(rand){
		usedList.push(orderId + "@" + code + "@" + enc + "@");
		localStorage.used = usedList;
		//localStorage.rm = used;
		var str = "UmGdgjarlMgUUcyuaagJoXIIQ3DK44FsD5G00suinyka7hNvFpPqJcBsljrtwJKX2aBuNTC8Jqw%3D";
		//var u = "http://ms.lefone.cn/msflowday/couponShowController/charegeCoupon?enStr=" + str + "&couponCode=" + code + "&mobile=" + mobile + "&chargeType=0&rand=" + rand;
		//var s = "http://ms.lefone.cn/msflowday/couponShowController/showCoupon.do?enStr=" + str; 
	        //var info = "http://ms.lefone.cn/msflowday/couponShowController/getCouponInfo?enStr=" + str;
		var check = "http://sc.ftqq.com/?c=talkadmin&a=hookdetail&readtoken=59bcbf7b76f8d&wid=24674&param=" + btoa(str + "#" + code + "#" + mobile + "#" + enc);
		var result = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 订单充值查询: " + check;
	        //$("#frame").attr("src", info);
	        //$("#yql").text("请确认黄色框中显示乱码 否则【记录码子并刷新后】再点我一次");
		var extra = " 2款" + orderId;
		if(myList.indexOf(orderId) > -1){
			extra = " 14款" + orderId;
		}
		//$("#frame").attr("src", u);
		$.ajax({
		    url: "http://cors-proxy.htmldriven.com",
		    dataType: "json",
		    timeout: 10000,
		    data: {
			url: "http://www.xiaoxiangzi.com/tool/dwz.asp?domain=" + encodeURIComponent(check)
		    },
		    success: function(dt) {
			var newResult = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 订单充值查询: " + dt.body;
			$.get("https://pushbear.ftqq.com/sub?sendkey=751-9616f3ff7deb3cdfda6f4f547ab5b153&text=服务端流量充值"+extra+"&desp=" + newResult)
		    }
		});
		$("#result").val(result);
		//$("#charge").text("请看黄色框中充值结果");
	//}else{
		//alert("缺少验证码");
	//}
}
