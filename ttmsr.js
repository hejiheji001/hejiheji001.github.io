var retryCap = 50;
var retryBuy = 50;
var MSTarget = -1;
var captcha = "";
var notRunning = true;
var notSubmit = true;
var timeLeft = 1000;
var version = "V15 测速专用 任务提交后记下秒数后立刻退出"; //  测速专用 任务提交后记下秒数后立刻退出
window.debugTime = 60;
window.debugCount = true
var bannedKeys = ["P2gv+Ol0uGjoqXS6HWGovdiQ6ukyDbpv","KUyIf2VcxGzdGtvFWK7vBibfHPr68Zjt","+JNBj78KXZyrvgVLP5AC6Q/SMem7j3fd"];
var monthlyKeys = {
			"W+KrSOFkjnsmxd7Nq2SEtoz9+rDt+szK": "2017-08-15", 
		   	"cX34h2JOOKFW44vVmHSnuURv51RMwavH": "2017-08-15",
			"6ggjU9GnMsCUHRTulax6AaXRVzTJfxdA": "2017-07-18",
			"OSwqfpUTZyPFxk9K2b8a2fCrkw7chepY": "2017-07-18",
			"VpZ6yaSTACft0KPnQfUppPic67IEX2mu": "2017-08-17",
			"pCbOG2B3zuoNxAvagk8TOWv66q2OX+rS": "2017-07-18",
			"pCbOG2B3zup9aOKK7qwy6KjKKaIVBbeP": "2017-07-18"
		  };
var getEnc = function() {
  var end = monthlyKeys[uk];
  var now = new Date();
  var extra = "";
  if(end){
    if(now >= new Date(end)){
      alert("试用已到期～");
      return;
    }else{
      extra = " 有效期至:" + end;
    }
  }
	
var title = $("h3").text();
var newVersion = title.split("V")[0] + version + extra;
$("h3").text(newVersion);

  if (bannedKeys.indexOf(uk) === -1) {
      $.getScript("https://hejiheji001.github.io/onlyone-1.0.0.min.js?rand=" + Math.random(), getCountDown);
  }else{alert("试用已到期～");}
}
var getCountDown = function(str) {
    var m = str || "";
    var hintDom = $("#autobuy");
    hintDom.text("正在获取倒计时" + m);
    var info = {
        "1": ["A20170206786", "G201702078122", "0009123"],
        "3": ["A20170505897", "G201705057258", "0007134"],
        "4": ["A20170505897", "G201705057259", "0007135"],
        "5": ["A20170505897", "G201705057260", "0007136"],
        "6": ["A20170505897", "G201705057261", "0007137"],
        "0": ["A20170505897", "G201705057262", "0007138"]
    };
    var day = (new Date).getDay();
    if(day == 2){alert("今日无活动～"); return;}	
    var a = info[day][0];
    var g = info[day][1];
    var m = info[day][2];
    var url = "https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/QueryGift.json?actyId=" + a + "&giftId=" + g + "&isQualify=true&maxInterval=172800&userKey=" + encodeURIComponent(uk);
    checkCaptcha(handleCountdown, url);
}

var getOrder = function() {
    var info = {
        "1": ["A20170206786", "G201702078122", "0009123"],
        "3": ["A20170505897", "G201705057258", "0007134"],
        "4": ["A20170505897", "G201705057259", "0007135"],
        "5": ["A20170505897", "G201705057260", "0007136"],
        "6": ["A20170505897", "G201705057261", "0007137"],
        "0": ["A20170505897", "G201705057262", "0007138"]
    };
    var day = (new Date).getDay();
    if(day == 2){alert("今日无活动～"); return;}
    var a = info[day][0];
    var g = info[day][1];
    var m = info[day][2];
    localStorage.userKey = uk;
    return "https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/Order.json?tmp=" + getTmp() + "&channelType=activityday&giftNum=1&groupId=&isCaptcha=true&actyId=" + a + "&giftId=" + g + "&merchantId=" + m + "&userKey=" + encodeURIComponent(uk) + "&jcaptchaText=" + captcha;
}

var pausecomp = function(millis) {
    var date = new Date();
    var curDate = null;
    do {
        curDate = new Date();
    }
    while (curDate - date < millis);
}

var checkCaptcha = function(callback, url) {
    retryCap--;
    console.log("checkCaptcha");
    if (0 < retryCap) {
        var u = getOrder();
        if (url) {
            u = url;
        }
        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql",
            dataType: "json",
            timeout: 8000,
            data: {
                format: "json",
                q: $("#autobuy").data("ql") + u + $("#autobuy").data("qr")
            },
            success: callback,
            error: function(c, u) {
                retryCaptcha(c, u, callback, url);
            }
        });
    } else {
        $("#autobuy").text("无法检测验证码 碰碰运气");
        if (url) {
            callback();
        }else{
        	doForcePay();
        }
    }
}

var retryCaptcha = function(c, u, callback, url) {
    var t = $("#autobuy").text().split(" ")[0];
    $("#autobuy").text(t + " 第" + (50 - retryCap) + "次尝试");
    checkCaptcha(callback, url);
}

var placeOrder = function(target, dom) {
    if(retryBuy < -50){
	    $(dom).text("请查看待支付页面");
	    return;
    }
    var t = new Date();
    var str = t.toLocaleString("zh-cn", {
        hour12: false
    }).split(" ")[0];
    var start = t.getTime();
    var end = new Date(str + " " + (target - 1) + ":59:58").getTime();
    if (0 < MSTarget) {
        end = MSTarget;
    }
    var u = getOrder();
    console.log("placeOrder in " + (end - start));
    $(dom).text("任务已提交" + " " + (end - start) / 1000 + "秒后自动抢购");
    notRunning = false;
    var x = setTimeout(function() {
        $(dom).text("第" + (100 - retryBuy) + "次抢购中");
        console.log("Placing Order");
        for (var i = 0; i < 35; i++) {
            if (i % 5 == 0) {
            	retryCap++;
                checkCaptcha(handleCaptcha);
            } else {
                $.ajax({
                    url: u,
                    dataType: "jsonp"
                });
            }
            pausecomp(30);
        }
    }, (end - start) / 1);
}

var getThisOrder = function() {
    var h = (new Date()).getHours();
    if (h < 10 || h === 10) {
        return 10;
    } else {
        return 15;
    }
}

var buyIt = function(str) {
    console.log("buyIt");
    retryBuy--;
    var hintDom = $("#autobuy");
    if (0 < retryBuy && 10 < timeLeft) {
        hintDom.attr("onclick", "buyIt()");
        if (str) {
            hintDom.text(str + " 重新获取验证码中");
        } else {
            hintDom.text("获取验证码中");
        }
        getCaptcha(function(d) {
            if (d.Result && d.Result.length === 5) {
                retryCap++;
                captcha = d.Result.toUpperCase();
                hintDom.text("检测验证码中，验证码为 " + captcha);
                checkCaptcha(handleCaptcha);
            } else {
                buyIt(d.Error);
            }
        });
    } else {
        hintDom.text("无法验证码 碰碰运气");
        doForcePay();
    }
}

var doForcePay = function(){
	if(captcha){
		console.log("doForcePay");
		retryBuy--;
		var thisOrder = getThisOrder();
		placeOrder(thisOrder, "#autobuy");
	}else{
		$("#autobuy").text("请立即截图 并及时联系开发者");
	}
}

var getCaptcha = function(callback) {
    $.ajax({
        type: "POST",
        url: "http://api.ruokuai.com/create.json",
        timeout: 8000,
        data: {
            username: "hejiheji001",
            password: "CE649C68CCB1763AC369C4A05EEC3914",
            typeid: "3050",
            softid: "84562",
            softkey: "ea41751488db4a43a55cb436cd35afac",
            imageurl: "https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/jcaptcha.img?userKey=" + encodeURIComponent(uk)
        },
        success: callback,
        error: retryBuyIt,
        dataType: "json"
    });
}

var retryBuyIt = function() {
    buyIt("验证码获取失败");
}

var formaTime = function(time) {
    if (time < 10) {
        return '0' + time;
    } else {
        return '' + time;
    }
};
var getTimeFormat = function(time) {
    var h = Math.floor(time / 3600);
    var m = Math.floor((time % 3600) / 60);
    var s = time % 60;
    if (0 <= time) {
        return "距离抢兑开始还有 " + formaTime(h) + ":" + formaTime(m) + ":" + formaTime(s);
    } else {
        return "";
    }
}

var handleCountdown = function(result) {
	retryCap++;
    if (window.int) {
        window.clearInterval(int);
    }
    var hintDom = $("#autobuy");
    hintDom.attr("onclick", "getCountDown();");
    if (result.query.results) {
        var data = result.query.results;
        var countDownTimes = window.debugTime || data.reply.countDownTimes;
        var isCountDown = window.debugCount || data.reply.isCountDown;
        var countNumAdd = countDownTimes + 1;
        if (isCountDown) {
		var st = Math.floor(55 - (Math.random()+1) * 5);
		hintDom.text(getTimeFormat(countDownTimes) + " 验证码将于" + (countDownTimes - st) + "秒后获取");
		window.int = self.setInterval(function() {
			countDownTimes--;
			timeLeft = countDownTimes;
			if (countDownTimes <= st && notSubmit) {
			    notSubmit = false;
			    MSTarget = (new Date()).getTime() + countDownTimes * 1000;
			    buyIt();
			}
			if (st < countDownTimes) {
			    hintDom.text(getTimeFormat(countDownTimes) + " 验证码将于" + (countDownTimes - st) + "秒后获取");
			}

			if (0 < countDownTimes) {
			    console.log(getTimeFormat(countDownTimes) + " 验证码将于" + (countDownTimes - st) + "秒后获取");
			}

			if(countDownTimes <= 0){
				window.clearInterval(int);
				if(notRunning){
					doForcePay();
				}
			}
		}, 1000);
        } else {
            hintDom.text("暂无民生倒计时");
            if(captcha){
	    	doForcePay();
	    }
        }
    } else {
        getCountDown(" 您的网速可能较慢 第" + (50 - retryCap) + "次尝试");
    }
}

var handleCaptcha = function(result) {
    var hintDom = $("#autobuy");
    console.log("handleCaptcha");
    if (result.query.results) {
        var msg = result.query.results.reply.orderMessage;
        if(msg){
            hintDom.text(msg);
            if (-1 < msg.indexOf("尚未开始")) {
                var thisOrder = getThisOrder();
                placeOrder(thisOrder, "#autobuy");
            } else if (-1 < msg.indexOf("支付")) {
                alert("成功了");
            } else if (getThisOrder() === 15 && msg === "已经抢光啦" && notRunning) {
                var thisOrder = getThisOrder();
		placeOrder(thisOrder, "#autobuy");
            } else if (-1 < msg.indexOf("key")) {
                buyIt(msg);
            } else if (-1 < msg.indexOf("图片")) {
                buyIt(msg);
            } else if (-1 < msg.indexOf("userKey非正常加密")){
                alert("请立即截图 userKey非正常加密");
            } else {
		hintDom.text("请不要离开本页面 03分之后再查看待支付");
	    }
        }else{
        	doForcePay();
        }
    } else {
    	checkCaptcha(handleCaptcha);
    }
}
