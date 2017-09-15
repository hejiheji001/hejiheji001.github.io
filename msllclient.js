var showIn = function(){
 var xhr;
var _orgAjax = jQuery.ajaxSettings.xhr;
jQuery.ajaxSettings.xhr = function () {
  xhr = _orgAjax();
  return xhr;
};
jQuery.ajax('http://wx.creditcard.cmbc.com.cn/wxbankms/systemDocking/privilegeEncryptParam?keyword=msrmmc', {
  success: function(responseText) {
    alert('responseURL:', xhr.responseURL, 'responseText:', responseText);
  }
});
}
