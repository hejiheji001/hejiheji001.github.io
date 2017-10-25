var monthlyKeys = {
			"W+KrSOFkjnsmxd7Nq2SEtoz9+rDt+szK": "2017-08-15", 
			"OSwqfpUTZyPFxk9K2b8a2fCrkw7chepY": "2017-09-21",
			"VpZ6yaSTACft0KPnQfUppPic67IEX2mu": "2017-10-17",
			"gU0ipPc0/+nivZhC0hIz914M4+Lk5pqB": "2017-10-24",
			"kRTBRP0WM4TCUN9WidwKA7fPcnfruRYe": "2017-08-17",
			"l1zgr7B9sAplSdL0/AhUy0ScQIU0P7mF": "2017-08-20", 
			"F5eEur2ik9/KrStkm32lPZOK+J01TZij": "2017-07-22",
			"gRtPhWbHhHszycNMpbYX/ZhYlz225ACu": "2017-10-23",
			"HhoaQ5WpehEHSWHSiHHiuoQLG5g0HfiB": "2017-09-21",
			"2oznqUaQqT/Bl/vg/oVgXXfdfxqyfyPw": "2017-08-22",
			"WPI27dVqrrIjzt8nRX+Zn0JuvRRPs0IS": "2017-11-04"
};

var CheckValidation = function(){
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
  getCountDown();
}
