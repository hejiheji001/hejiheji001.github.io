var showIn = function(){
  $("#in").append("<iframe id=msll src='http://wx.creditcard.cmbc.com.cn/wxbankms/systemDocking/privilegeEncryptParam?keyword=msrmmc'></iframe>");
  setTimeout(function(){
   alert(localStorage.userKey);
  }, 5000
  );
}
