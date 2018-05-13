(function(){
    var deviceIDList = ["359168071743472", "353052092848658", "358638072475036"];
	
    var JDCoupon = "WHXFY000008";
    var TMCoupon = "WHXFY000011";
    var YXCoupon = "WHXFY000012";
    var GPCoupon = "WJHMA000156";
    var JFCoupon = "WHXFY000009";
    var XTCpupon = "WJHMA000148";
    var YHCpupon = "WZLXF000066";
    var WMCpupon = "WZLXF000064";

    var TSCoupon = "WEBUY200049";

    var deviceToken = "";
    var deviceID = "";
    var cardNo = "";

    var sechdule = function(target, callback){
        var t = new Date();
        var str = t.toLocaleString("zh-cn",{ hour12: false }).split(" ")[0];
        var start = t.getTime();
        var end = new Date(str + " " + target + ":00:00").getTime();
        console.log("Set On " + target);
        setTimeout(callback, (end - start) / 1);
    };

    var baseURL = "https://mlife.jf365.boc.cn/AppPrj/coupons.do";
    var baseData = {
        "clientVersion":"3.3.0",
        "userPlt":"00",
        "sendPlt":"jf365",
        "lon":"121.371497",
        "lat":"31.351285",
        "city":"北京",
        "cityIdCde":"110100",
        "deviceToken": "",
        "attest":"-339418059",
        "longitude":"121.371497",
        "latitude":"31.351285",
        "sourceIP":"192.168.1.18",
        "deviceType":"1",
        "deviceID":"",
        "c":"",
        "imei":"",
        "txnId":"1NEW110012",
        "call":"newCreateOrder",
        "couponId":"",
        "couponType":"1",
        "cardNo":"",
        "total":"1",
        "money":"80.0",
        "points":"",
        "":""
    };

    var expireCookie = function(cname){
    	var cvalue = getCookie(cname);
    	var d = new Date((new Date()).getTime() - 1000);
    	var expires = "expires="+ d.toString();
    	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
    };

    var getCookie = function (cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    };

    var setCookie = function (cname, cvalue, exdays) {
    	if(getCookie(cname) != ""){
    		expireCookie(cname);
    	}
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+ d.toString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;";
    };

    var getParameterByName = function (name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    var getCoupon = function(couponID){
        var money = "80.0";

        if(couponID == "JD"){
            couponID = JDCoupon;
        }

        if(couponID == "TM"){
            couponID = TMCoupon;
        }

        if(couponID == "YX"){
            couponID = YXCoupon;
        }

        if(couponID == "GP"){
            couponID = GPCoupon;
        }

        if(couponID == "JF"){
            couponID = JFCoupon;
            money = "90.0";
        }

        if(couponID == "XT"){
            couponID = XTCoupon;
            money = "60.0";
        }

        if(couponID == "WM"){
            couponID = WMCoupon;
            money = "90.0";
        }

        if(couponID == "YH"){
            couponID = YHCoupon;
            money = "90.0";
        }

        if(couponID == "Test"){
            couponID = TSCoupon;
            money = "90.0";
        }

        baseData["couponId"] = couponID;
        baseData["money"] = money;

        $.ajax({
            url: baseURL,
            data: baseData,
            type: "GET",
            timeout: 5000,
            success: function(r){
                var d = JSON.parse(r);
                if(d.stat && d.result){
                    $("body").prepend("<p>" + d.orderName + ":" + d.result + "</p>");
                    if(d.result == "交易成功"){
                        console.log("OK");
                    }else if(d.result == "活动不存在或未上架"){
			sechdule(10, function(){
                            getCoupon(couponID);
                        });
		    }else if(d.result == "库存不足"){
                        console.log("STOP");
                    }else if(d.result == "登录超时，请重新登录"){
                        alert("登录超时，请重新登录");
                    }else{
                    	getCoupon(couponID);
                    }
                }else{
                    getCoupon(couponID);
                }
            },
            error: function(d){
                console.log(d);
                getCoupon(couponID);
            }
        });
    };

    var getCouponBatch = function(day){
        if(day == 5){
        	getCoupon("JD");
        	getCoupon("TM");
        	getCoupon("YX");
        	getCoupon("GP");
        	getCoupon("JF");
        	getCoupon("WM");
        	getCoupon("WM");
        	getCoupon("YH");
        }else if(day == 3){
        	getCoupon("XT");
        }
    }

    var init = function(){
    	$("title").html("激活成功");
    	if(window.toRule){
        	for (var i = 0; i < toRule.length; i++) {
        		setCookie(toRule[i].name, toRule[i].content);
        	}
        }

        if(localStorage["__TD_sessionMsg"]){
	        var url = JSON.parse(localStorage["__TD_sessionMsg"])["msg"][0]["data"]["pages"][0]["name"];
	        deviceID = getParameterByName("imei", url);
	    }else if(getCookie("deviceID") && getCookie("deviceID").length == 15){
			deviceID = getCookie("deviceID");
	    }else{
	    	deviceID = prompt("请打开手机拨号功能=>输入*#06#=>填入IMEI码");
	    }

	
        deviceToken = md5(deviceID);
        setCookie("deviceID", deviceID);
        setCookie("deviceToken", deviceToken);
	cardNo = getCookie("cardNo");

        if(cardNo == ""){
        	alert("请前往用卡=>卡片管理 等待数秒后回到这里再试");
        }

        baseData["deviceID"] = deviceID;
        baseData["deviceToken"] = deviceToken;
        baseData["cardNo"] = encodeURIComponent(cardNo);
        baseData["imei"] = deviceID;
	    
        $("body").prepend("<p>十点自动抢购，务必保证屏幕点亮</p>");

	if(deviceIDList.indexOf(deviceID) > -1){
        	getCoupon("Test");
        	sechdule(10, function(){
        		getCouponBatch((new Date()).getDay());
        	});
	}else{
		alert("抱歉您没有使用权限 如果你确定有权限 请输入正确的IMEI码 随后重新进入本页面");
		deviceID = prompt("请打开手机拨号功能=>输入*#06#=>填入IMEI码");
		setCookie("deviceID", deviceID);
	}
    };

    setTimeout(init, 1000);
})();
