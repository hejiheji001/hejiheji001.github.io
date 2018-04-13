var getInfo = function(){
  var html = "";
  var hidden = "";
  $("#in").append("<input type=hidden id=hide><input type=text class=form-control id=phone placeholder=新增用户手机号><input type=text class=form-control id=link placeholder=新增用户链接框><input type=text class=form-control id=sn placeholder=新增用户设备框><textarea id=text class=form-control style='height:200px;font-size: 11px;'>加载中...</textarea><textarea id=result class=form-control placeholder='更新日期2018-04-14 01:20' style='height:200px'></textarea><a class='btn btn-primary green' onclick='create();' id=create>生产新代码</a>");
  
  $.ajax({
	    url: "http://cors-proxy.htmldriven.com",
	    dataType: "json",
	    timeout: 5000,
	    data: {
		    url: "http://45.78.35.169/file/jk.txt"
	    },
	    success: function(c, u) {
		    var body = JSON.parse(atob(c.body));
        var keys = Object.keys(body);
        for(var i = 0; i < keys.length; i++){
          var key = atob(keys[i]);
          var value = body[keys[i]];
          var phone = key;
          var id = value.id;
          var sn = value.sn;
          var line = phone + "@" + id + "@" + sn + "\n";
          if(key.length == 11){
            html += line;
          }else{
            hidden += line;
          }
        }
        $("#text").val(html);
        $("#hide").val(hidden);
        html = "";
        hidden = "";
	    },
	    error: function(){
		    alert("请刷新重试，若一直如此请联系管理员");
	    }
	});
}

var create = function(){
  var link = $("#link");
  var phone = $("#phone");
  var sn = $("#sn");
  var text = $("#hide").val() + $("#text").val();
  var obj = {};
  if(link.val() + sn.val() + phone.val()){
    var id = 1;
    var line = phone.val() + "@" + id + "@" + sn.val() + "\n";
    text += line;
  }
  var infos = text.split("\n");
  for(var i = 0; i < infos.length; i++){
    var info = infos[i].split("@");
    var phone = btoa(info[0]);
    obj[phone] = {id: info[1], sn: info[2]};
  }
  var json = btoa(JSON.stringify(obj));
  $("#result").val(json);
}
