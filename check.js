var thisV = "V20171030";

var check = function(){
	if(thisV !== version){
		var update = confirm("当前版本" + version + "，最新版本" + thisV + "，点击确定下载更新包~");
		if(update){
			window.open("https://pan.baidu.com/s/1jIGdGLw");
		}
	}
}
