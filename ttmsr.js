var retryCap = 50;
var retryBuy = 80;
var buyTime = 0;
var buyStart = 0;
var buyEnd = 0;
var MSTarget = -1;
var captcha = "";
var notRunning = true;
var notSubmit = true;
var timeLeft = 1000;
var offset = 0;
var start = 0;
var end = 0;
var expire = -1;
var codeTime = 0;
var jsonproxy = Math.floor(Math.random() * 4);
var version = "V35"; //   测速专用【任务提交】后 截图 
//window.debugTime = 60;
//window.debugCount = true
var bannedKeys = ["mc8JMHI0ruT72Qjj+QtRapGUpErdlow7", "iQwav5NeSXemoCx8btat4PWy7t15xElb", "DEy/AhSDHHhXV2xqXy6M22B1QlO/tZdQ", "5/tIPVTQ1obWMNy2rSXqAw9/b8gwbOUn", "m6G0Y3ZkupsgGKSkxMyl+QJN06Cim9pK", "mq5so3qH+Lm+aDKN3xGaOVWGHNwGkBHy", "pCbOG2B3zup9aOKK7qwy6KjKKaIVBbeP", "pCbOG2B3zuoNxAvagk8TOWv66q2OX+rS", "6ggjU9GnMsCUHRTulax6AaXRVzTJfxdA", "P2gv+Ol0uGjoqXS6HWGovdiQ6ukyDbpv","KUyIf2VcxGzdGtvFWK7vBibfHPr68Zjt","+JNBj78KXZyrvgVLP5AC6Q/SMem7j3fd", "AmVXNbtaRyAD8c0ej8Q+ua2wjialsb1y"];
var monthlyKeys = {
			"W+KrSOFkjnsmxd7Nq2SEtoz9+rDt+szK": "2017-08-15", 
			"OSwqfpUTZyPFxk9K2b8a2fCrkw7chepY": "2017-09-21",
			"VpZ6yaSTACft0KPnQfUppPic67IEX2mu": "2018-06-01",
			"gU0ipPc0/+nivZhC0hIz914M4+Lk5pqB": "2017-11-27",
			"kRTBRP0WM4TCUN9WidwKA7fPcnfruRYe": "2017-08-17",
			"l1zgr7B9sAplSdL0/AhUy0ScQIU0P7mF": "2017-08-20", 
			"F5eEur2ik9/KrStkm32lPZOK+J01TZij": "2017-07-22",
			"gRtPhWbHhHszycNMpbYX/ZhYlz225ACu": "2017-10-23",
			"HhoaQ5WpehEHSWHSiHHiuoQLG5g0HfiB": "2017-09-21",
			"2oznqUaQqT/Bl/vg/oVgXXfdfxqyfyPw": "2017-08-22",
			"WPI27dVqrrIjzt8nRX+Zn0JuvRRPs0IS": "2018-01-06",
			"d8zts54SfNTOnL77mYCoROkvRY5dSdE4": "2017-11-24",
			"d8zts54SfNSCyqKKJmUxiD7l3Ggs0r95": "2017-11-24",
			"xliHpVPoKSsfA3+IWLhvHtmpju9hMNny": "2017-12-23",
			"d8zts54SfNRuF84u5k1nx3/fXccGE6y1": "2017-11-27"
		  };
var getEnc = function() {
  var end = monthlyKeys[uk];
  var now = new Date();
  var extra = "";
  $("#gacontent > div > div > p:nth-child(3)").html("2. 然后提前大约40秒输入验证码 你也可以选择用电脑版帮你输入验证码");
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
    if(day == 2 || day == 1){alert("今日无活动～"); return;}
    //if(day != 1 && uk == "W+KrSOFkjnvEaptX5ivr5eGFZfWuVf1z"){
    //	    alert("完整版才支持其他日期哦～"); return;
    //}
    var a = info[day][0];
    var g = info[day][1];
    var m = info[day][2];
    var url = "https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/QueryGift.json?actyId=" + a + "&giftId=" + g + "&isQualify=true&maxInterval=172800&userKey=" + encodeURIComponent(uk);
    hintDom.before("<img id=captcha style='width: 50%;' src=''></img>");    
    $("#captcha").after("<input id=code class=form-control placeholder='验证码无需注意大小写, 点击图片可以更换验证码, 验证码有效期为1分钟请妥善把握时机' type=text></input>");
    $("#captcha").after("<a id=checkcode class='btn btn-primary green' onclick='checkCode()'>检测验证码</>");
    $("#captcha").attr("onclick", "changeCode()");
    changeCode();
    checkCaptcha(handleCountdown, url);
}

var checkCode = function(){
    captcha = $('#code').val().trim().toUpperCase();
    $("#checkcode").text("检测中...");
    checkCaptcha(handleCaptchaCheck);
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
    if(day == 2 || day == 1){alert("今日无活动～"); return;}
    var a = info[day][0];
    var g = info[day][1];
    var m = info[day][2];
    localStorage.userKey = uk;
    return "https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/main/Order.json?timp=" + getTmp() + "&channelType=activityday&giftNum=1&groupId=&isCaptcha=true&actyId=" + a + "&giftId=" + g + "&merchantId=" + m + "&userKey=" + encodeURIComponent(uk) + "&jcaptchaText=" + captcha;
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
    jsonproxy = Math.floor(Math.random() * 4);
    var title = $("h3").text().split("#")[0].trim();
    var extra = " #正在使用" + (jsonproxy) + "号服务器";
    $("h3").text(title + extra);
    var limit = 7000;	
    if (0 < retryCap) {
        var u = getOrder();
        if (url) {
          	u = url;
    		limit = 10000;
     		if(start == 0){
    			start = (new Date()).getTime();
    		}
        }
    	if(jsonproxy == 0){
    		$.ajax({
    		    url: "http://cors-proxy.htmldriven.com",
    		    dataType: "json",
    		    timeout: limit,
    		    data: {
    			url: u
    		    },
    		    success: callback,
    		    error: function(c, u) {
    			retryCaptcha(c, u, callback, url);
    		    }
    		});
    	}else if(jsonproxy == 1){
    		$.ajax({
    		    url: "http://45.78.32.101:8080/" + u,
    		    dataType: "json",
    		    timeout: limit,
    		    success: callback,
    		    error: function(c, u) {
    			retryCaptcha(c, u, callback, url);
    		    }
    		});
    	}else if(jsonproxy == 2){
    		$.ajax({
    		    url: "http://jsonp.herokuapp.com/",
    		    dataType: "json",
    		    timeout: limit,
    		    data: {
    			url: u
    		    },
    		    success: callback,
    		    error: function(c, u) {
    			retryCaptcha(c, u, callback, url);
    		    }
    		});
    	}else if(jsonproxy == 3){
    		$.ajax({
    		    url: "http://anyorigin.com/go",
    		    dataType: "json",
    		    timeout: limit,
    		    data: {
    			url: u
    		    },
    		    success: callback,
    		    error: function(c, u) {
    			retryCaptcha(c, u, callback, url);
    		    }
    		});
    	}
    } else {
        // $("#autobuy").text("无法检测验证码 碰碰运气");
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

var placeOrder = function(target, dom, extra) {
    if(retryBuy < -20){
	    $(dom).text("请查看待支付页面");
	    if (window.int) {
            window.clearInterval(int);
        }
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
    var willExpire = 30 + ((expire - (new Date()).getTime()) / 1000);
    console.log("placeOrder in " + (end - start));
    $(dom).text("任务已提交" + " " + (end - start) / 1000 + "秒后自动抢购" + (extra || "") + "，验证码将于" + willExpire + "秒后失效，请确认任务提交后验证码还有5秒以上的有效时间");
    notRunning = false;
    var x = setTimeout(function() {
        console.log("Placing Order");
	    buyStart = (new Date()).getTime();
        handleReBuy(extra);
    }, (end - start) / 1);
}

var handleReBuy = function(extra){
	var hintDom = $("#autobuy"); 
	hintDom.text("第" + buyTime + "次抢购中" + (extra || ""));
	var u = getOrder();
	console.log("第"+buyTime+"次");
	buyTime++;

    captcha = $('#code').val().trim().toUpperCase();

	if(buyTime <= 80){
		if(buyTime == 1){
			console.log("YQLS" + (new Date()));
			checkCaptcha(function(result){
				console.log("YQLE" + (new Date()));
				var res = 1;
				if(jsonproxy == 0){
				    res = JSON.parse(result.body);
				}else if(jsonproxy == 1){
				    res = result;
				}else if(jsonproxy == 2){
				    res = result;
				}else if(jsonproxy == 3){
				    res = result.contents;
				}
				if (res) {
					var msg = res.reply.orderMessage;
					if(msg){
						hintDom.text(msg + " 继续抢购中");
						if (-1 < msg.indexOf("支付")) {
							alert("成功了");
							buyTime = 80;
						} else if (-1 < msg.indexOf("userKey非正常加密")){
							alert("请立即截图 userKey非正常加密");
							buyTime = 80;
						} else if (-1 < msg.indexOf("抢光了")){
							//buyTime = 80;
						}
					}else{
						hintDom.text("继续抢购中");
					}
				}
			});
			setTimeout(function(){
				handleReBuy(extra);
			}, 1000);
		}else{
			console.log("iframeS" + (new Date()));
// 			if(window.ifr){
// 				ifr.src = "";
// 				ifr.src = u;
// 			}else{
				window.ifr = document.createElement("iframe");
				ifr.style.top = "0px";
				ifr.style.position = "absolute";
				ifr.style.background = "yellow";
				ifr.style.height = "9%";
				ifr.style.width = "100%";
				ifr.src = u;
				document.body.appendChild(ifr);
// 			}
			setTimeout(function(){
				console.log("iframeE" + (new Date()));
				handleReBuy(extra);
			}, 1000);
		}
	}else{
		buyEnd = (new Date()).getTime();
		$("#autobuy").text("抢购结束 请30分之内定期查看待支付 耗时" + (buyEnd - buyStart) / 1000 + "秒");
		console.log("完成");
	}
}

var getThisOrder = function() {
    var h = (new Date()).getHours();
    if (h < 10 || h === 10) {
        return 10;
    } else {
        return 15;
    }
}

var changeCode = function(){
    var cap = $("#captcha");
    cap.attr("src", "");
    cap.attr("src", "https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/jcaptcha.img?userKey=" + encodeURIComponent(uk) + "&r=" + (new Date()).getTime());
    codeTime = (new Date()).getTime();	
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
            // hintDom.text("点击验证码可以更换图片");
        }

        var cap = $("#captcha");
        //if(cap.length == 0){
        //    hintDom.before("<img id=captcha style='width: 50%;' src='https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/jcaptcha.img?userKey=" + encodeURIComponent(uk) + "'></img>");    
        //    $("#captcha").after("<input id=code class=form-control placeholder='验证码无需注意大小写, 点击图片可以更换验证码' type=text></input>");
        //    $("#captcha").attr("onclick", "buyIt()");
            // hintDom.text("输入完验证码后迅速点我提交任务 点击图片可以更换验证码");
            // hintDom.attr("onclick", "captcha = $('#code').val().trim().toUpperCase();placeOrder(getThisOrder(), '#autobuy');");
            // $("#autobuy").one("click", function(){
            //     // var thisOrder = getThisOrder();
            //     retryCap++;
            //     captcha = $("#code").text().trim().toUpperCase();
            //     // hintDom.text("检测验证码中，验证码为 " + captcha + "，验证码将于30秒后失效");
            //     // placeOrder(thisOrder, "#autobuy");
            //     expire = (new Date()).getTime();
            //     checkCaptcha(handleCaptcha);
            // });
        //}else{
        //    cap.attr("src", "");
        //    cap.attr("src", "https://prefacty.creditcard.cmbc.com.cn/mmc-main-webapp/jcaptcha.img?userKey=" + encodeURIComponent(uk) + "&r=" + (new Date()).getTime());
        //}

        // if(captcha.length == 5){ 
        //     var thisOrder = getThisOrder();
        //     placeOrder(thisOrder, "#autobuy");
        // }


        // getCaptcha(function(d) {
        //     if (d.Result && d.Result.length === 5) {
        //         retryCap++;
        //         captcha = d.Result.toUpperCase();
		      // expire = (new Date()).getTime();
        //         hintDom.text("检测验证码中，验证码为 " + captcha + "，验证码将于30秒后失效");
        //         checkCaptcha(handleCaptcha);
        //     } else {
        //         buyIt(d.Error);
        //     }
        // });
    } else {
        hintDom.text("无法验证码 碰碰运气");
	    console.log("Try Force");
        doForcePay();
    }
}

var doForcePay = function(){
    captcha = $('#code').val().trim().toUpperCase();
    if(captcha.length != 5){
        captcha = false;
    }

	if(captcha && -20 < retryBuy){
		console.log("doForcePay");
		retryBuy--;
		var thisOrder = getThisOrder();
		placeOrder(thisOrder, "#autobuy", " 如果提示验证码错误，请随时更改验证码，可以尝试更换新码，或者替换可能错误的字母");
	}else{
		if(captcha){
			$("#autobuy").text("验证码获取成功 但未能获得有效信息 无法判断成功与否 若03分以前可再点一次本按钮 否则查看待支付");
			retryBuy = 10;
			$("#autobuy").attr("onclick", "doForcePay()");
		}else{
			//buyIt();
			//retryBuy = 10;
            
			$("#autobuy").text("验证码输入太慢了");
		}
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
    var res = 1;
	if(jsonproxy == 0){
	    res = JSON.parse(result.body);
	}else if(jsonproxy == 1){
	    res = result;
	}else if(jsonproxy == 2){
	    res = result;
	}else if(jsonproxy == 3){
	    res = result.contents;
	}
    if (res) {
        var data = res;
        var countDownTimes = (window.debugTime || data.reply.countDownTimes) - 1;
        var isCountDown = window.debugCount || data.reply.isCountDown;
        var countNumAdd = countDownTimes + 1; 
        if (isCountDown) {
		var st = 35;
		end = (new Date()).getTime();
		offset = Math.floor(((end - start)/1000) * Math.random()); // the larger the sooner.
		st += offset;
		hintDom.text(getTimeFormat(countDownTimes) + " 验证码将于" + (countDownTimes - st) + "秒后获取, 并已根据你的网速微调" + offset + "秒");
		window.int = self.setInterval(function() {
            // if(!captcha){
            if($("#code").length == 1){
                captcha = $('#code').val().trim().toUpperCase();
                if(captcha.length != 5){
                    captcha = false;
                }
            }
            // }

			countDownTimes--;
			timeLeft = countDownTimes;
			if (countDownTimes <= st && notSubmit) {
			    notSubmit = false;
			    MSTarget = (new Date()).getTime() + countDownTimes * 1000;
			    buyIt();
			}
            var text = getTimeFormat(countDownTimes)
            if(captcha){
                text += " 验证码为" + captcha + " 30秒后失效，确认无误请耐心等待，否则点击图片更换验证码";
            }else{
                text += " 验证码将于" + (countDownTimes - st) + "秒后获取, 并已根据你的网速微调" + offset + "秒";
            }
			if (st < countDownTimes) {
                hintDom.text(text);
			}

			if (0 < countDownTimes) {
                hintDom.text(text);
			    console.log(text);
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
        var res = 1;
	if(jsonproxy == 0){
	    res = JSON.parse(result.body);
	}else if(jsonproxy == 1){
	    res = result;
	}else if(jsonproxy == 2){
	    res = result;
	}else if(jsonproxy == 3){
	    res = result.contents;
	}
    if (res) {
        var msg = res.reply.orderMessage;
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
		hintDom.text("请不要离开本页面 30分之内定期查看待支付");
	    }
        }else{
        	doForcePay();
        }
    } else {
    	checkCaptcha(handleCaptcha);
    }
}

var handleCaptchaCheck = function(result) {
    var hintDom = $("#checkcode");
	var res = 1;
	if(jsonproxy == 0){
	    res = JSON.parse(result.body);
	}else if(jsonproxy == 1){
	    res = result;
	}else if(jsonproxy == 2){
	    res = result;
	}else if(jsonproxy == 3){
	    res = result.contents;
	}
    if (res) {
        var msg = res.reply.orderMessage;
        if(msg){
            hintDom.text(msg);
            if (-1 < msg.indexOf("尚未开始")) {
	        var codeExpire = 60 - ((new Date()).getTime() - codeTime) / 1000;
                hintDom.text("验证码正确，请确保活动开始后验证码有效期超过20秒，当前验证码将于"+codeExpire+"秒后失效");
            }
        }
    }
}
