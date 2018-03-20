var getInfo = function(id){
    var UKList = [
        "ocaMkw-V4fC_s3Y-hmapKmkN2INM",
        "ocaMkw22CznM1sCStegMljQQOuP8"
    ];

    if(id){
	if(UKList.indexOf(id) > -1){
		var s = document.getElementById("sn");
		s.innerHTML = '<option value="">请选择终端序列号</option><option value="00000302Q1NL14308385" data="ocaMkw-V4fC_s3Y-hmapKmkN2INM">FireAwayH</option><option value="00000302Q1NL14308392" data="ocaMkw22CznM1sCStegMljQQOuP8">光光</option>';
		var p = document.getElementById("provName");
		p.innerHTML = ' <option value="">省</option> <option value="2">北京</option><option value="23">天津</option><option value="44">河北省</option><option value="243">山西省</option><option value="386">内蒙古自治区</option><option value="512">辽宁省</option><option value="647">吉林省</option><option value="730">黑龙江省</option><option value="889">上海</option><option value="912">江苏省</option><option value="1050">浙江省</option><option value="1163">安徽省</option><option value="1305">福建省</option><option value="1409">江西省</option><option value="1535">山东省</option><option value="1715">河南省</option><option value="1910">湖北省</option><option value="2043">湖南省</option><option value="2194">广东省</option><option value="2361">广西壮族自治区</option><option value="2499">海南省</option><option value="2528">重庆</option><option value="2571">四川省</option><option value="2797">贵州省</option><option value="2905">云南省</option><option value="3067">西藏自治区</option><option value="3155">陕西省</option><option value="3283">甘肃省</option><option value="3397">青海省</option><option value="3457">宁夏回族自治区</option><option value="3489">新疆维吾尔自治区</option><option value="3618">台湾省</option><option value="3699">香港特别行政区</option><option value="3703">澳门特别行政区</option><option value="3706">海外</option>';
		s.onchange = function(){
		    OPEN_ID = s.selectedOptions[0].getAttribute("data");
		};
	}else{
        	alert("您没有使用权限！");
    	}
    }else{
        var Html = "";
        var BASE_URL= "http://www.smbpos.cn/jinzhengbao";

        var chinaInfo = {"provinceList":[{"PROVINCE_NAME":"北京","PROVINCE_CODE":2},{"PROVINCE_NAME":"天津","PROVINCE_CODE":23},{"PROVINCE_NAME":"河北省","PROVINCE_CODE":44},{"PROVINCE_NAME":"山西省","PROVINCE_CODE":243},{"PROVINCE_NAME":"内蒙古自治区","PROVINCE_CODE":386},{"PROVINCE_NAME":"辽宁省","PROVINCE_CODE":512},{"PROVINCE_NAME":"吉林省","PROVINCE_CODE":647},{"PROVINCE_NAME":"黑龙江省","PROVINCE_CODE":730},{"PROVINCE_NAME":"上海","PROVINCE_CODE":889},{"PROVINCE_NAME":"江苏省","PROVINCE_CODE":912},{"PROVINCE_NAME":"浙江省","PROVINCE_CODE":1050},{"PROVINCE_NAME":"安徽省","PROVINCE_CODE":1163},{"PROVINCE_NAME":"福建省","PROVINCE_CODE":1305},{"PROVINCE_NAME":"江西省","PROVINCE_CODE":1409},{"PROVINCE_NAME":"山东省","PROVINCE_CODE":1535},{"PROVINCE_NAME":"河南省","PROVINCE_CODE":1715},{"PROVINCE_NAME":"湖北省","PROVINCE_CODE":1910},{"PROVINCE_NAME":"湖南省","PROVINCE_CODE":2043},{"PROVINCE_NAME":"广东省","PROVINCE_CODE":2194},{"PROVINCE_NAME":"广西壮族自治区","PROVINCE_CODE":2361},{"PROVINCE_NAME":"海南省","PROVINCE_CODE":2499},{"PROVINCE_NAME":"重庆","PROVINCE_CODE":2528},{"PROVINCE_NAME":"四川省","PROVINCE_CODE":2571},{"PROVINCE_NAME":"贵州省","PROVINCE_CODE":2797},{"PROVINCE_NAME":"云南省","PROVINCE_CODE":2905},{"PROVINCE_NAME":"西藏自治区","PROVINCE_CODE":3067},{"PROVINCE_NAME":"陕西省","PROVINCE_CODE":3155},{"PROVINCE_NAME":"甘肃省","PROVINCE_CODE":3283},{"PROVINCE_NAME":"青海省","PROVINCE_CODE":3397},{"PROVINCE_NAME":"宁夏回族自治区","PROVINCE_CODE":3457},{"PROVINCE_NAME":"新疆维吾尔自治区","PROVINCE_CODE":3489},{"PROVINCE_NAME":"台湾省","PROVINCE_CODE":3618},{"PROVINCE_NAME":"香港特别行政区","PROVINCE_CODE":3699},{"PROVINCE_NAME":"澳门特别行政区","PROVINCE_CODE":3703},{"PROVINCE_NAME":"海外","PROVINCE_CODE":3706}],"flag":"1","mccList":[{"CODE":"4511","CONTENT":"票务","TYPE":"行"},{"CODE":"4722","CONTENT":"旅行社","TYPE":"行"},{"CODE":"4812","CONTENT":"手机店","TYPE":"购"},{"CODE":"4814","CONTENT":"通讯","TYPE":"购"},{"CODE":"4816","CONTENT":"网吧","TYPE":"娱"},{"CODE":"5094","CONTENT":"珠宝店","TYPE":"购"},{"CODE":"5211","CONTENT":"建材店","TYPE":"购"},{"CODE":"5231","CONTENT":"油漆涂料店","TYPE":"购"},{"CODE":"5251","CONTENT":"五金店","TYPE":"购"},{"CODE":"5309","CONTENT":"免税店","TYPE":"购"},{"CODE":"5310","CONTENT":"折扣商店","TYPE":"购"},{"CODE":"5311","CONTENT":"百货商店","TYPE":"购"},{"CODE":"5331","CONTENT":"杂货铺","TYPE":"购"},{"CODE":"5331","CONTENT":"便利店","TYPE":"食"},{"CODE":"5411","CONTENT":"超市","TYPE":"购"},{"CODE":"5441","CONTENT":"糖果店","TYPE":"购"},{"CODE":"5451","CONTENT":"冷饮店","TYPE":"食"},{"CODE":"5462","CONTENT":"蛋糕店","TYPE":"食"},{"CODE":"5499","CONTENT":"水果店","TYPE":"食"},{"CODE":"5532","CONTENT":"轮胎商行","TYPE":"行"},{"CODE":"5533","CONTENT":"汽配店","TYPE":"行"},{"CODE":"5541","CONTENT":"加油站","TYPE":"行"},{"CODE":"5621","CONTENT":"妇女成衣商店","TYPE":"衣"},{"CODE":"5631","CONTENT":"内衣店","TYPE":"衣"},{"CODE":"5641","CONTENT":"童装店","TYPE":"衣"},{"CODE":"5651","CONTENT":"家庭服装店","TYPE":"衣"},{"CODE":"5655","CONTENT":"运动服装店","TYPE":"衣"},{"CODE":"5661","CONTENT":"鞋店","TYPE":"衣"},{"CODE":"5691","CONTENT":"男女成衣店","TYPE":"衣"},{"CODE":"5712","CONTENT":"家居店","TYPE":"购"},{"CODE":"5714","CONTENT":"装饰材料商行","TYPE":"购"},{"CODE":"5722","CONTENT":"电器","TYPE":"购"},{"CODE":"5732","CONTENT":"数码店","TYPE":"购"},{"CODE":"5733","CONTENT":"乐器钢琴店","TYPE":"娱"},{"CODE":"5735","CONTENT":"音像制品店","TYPE":"购"},{"CODE":"5812","CONTENT":"酒楼饭馆","TYPE":"食"},{"CODE":"5813","CONTENT":"酒吧","TYPE":"娱"},{"CODE":"5814","CONTENT":"早餐店","TYPE":"食"},{"CODE":"5912","CONTENT":"药店","TYPE":"食"},{"CODE":"5921","CONTENT":"烟酒店","TYPE":"食"},{"CODE":"5937","CONTENT":"古玩复制店","TYPE":"购"},{"CODE":"5940","CONTENT":"自行车行","TYPE":"购"},{"CODE":"5941","CONTENT":"体育用品店","TYPE":"购"},{"CODE":"5942","CONTENT":"书店","TYPE":"购"},{"CODE":"5943","CONTENT":"办公文具店","TYPE":"购"},{"CODE":"5944","CONTENT":"银器店","TYPE":"购"},{"CODE":"5945","CONTENT":"玩具店","TYPE":"购"},{"CODE":"5947","CONTENT":"礼品店","TYPE":"购"},{"CODE":"5948","CONTENT":"箱包店","TYPE":"购"},{"CODE":"5970","CONTENT":"工艺美术商店","TYPE":"购"},{"CODE":"5971","CONTENT":"艺术商和画廊","TYPE":"购"},{"CODE":"5977","CONTENT":"化妆品店","TYPE":"购"},{"CODE":"5992","CONTENT":"花店","TYPE":"购"},{"CODE":"5993","CONTENT":"香烟雪茄专卖","TYPE":"购"},{"CODE":"5995","CONTENT":"宠物店","TYPE":"娱"},{"CODE":"7011","CONTENT":"客栈","TYPE":"住"},{"CODE":"7032","CONTENT":"露营酒店","TYPE":"住"},{"CODE":"7210","CONTENT":"洗衣店","TYPE":"衣"},{"CODE":"7216","CONTENT":"干洗店","TYPE":"衣"},{"CODE":"7221","CONTENT":"婚纱摄影","TYPE":"娱"},{"CODE":"7230","CONTENT":"理发店","TYPE":"娱"},{"CODE":"7297","CONTENT":"按摩足浴会所","TYPE":"娱"},{"CODE":"7298","CONTENT":"美容SPA","TYPE":"娱"},{"CODE":"7311","CONTENT":"广告店","TYPE":"购"},{"CODE":"7512","CONTENT":"汽车出租","TYPE":"行"},{"CODE":"7519","CONTENT":"房车出租","TYPE":"行"},{"CODE":"7538","CONTENT":"汽车维修","TYPE":"行"},{"CODE":"7542","CONTENT":"汽车美容店","TYPE":"行"},{"CODE":"7832","CONTENT":"电影院","TYPE":"娱"},{"CODE":"7911","CONTENT":"夜总会","TYPE":"娱"},{"CODE":"7922","CONTENT":"戏剧院","TYPE":"娱"},{"CODE":"7929","CONTENT":"乐队文艺表演","TYPE":"娱"},{"CODE":"7932","CONTENT":"台球馆","TYPE":"娱"},{"CODE":"7933","CONTENT":"保龄球馆","TYPE":"娱"},{"CODE":"7991","CONTENT":"旅游与展览","TYPE":"行"},{"CODE":"7992","CONTENT":"高尔夫","TYPE":"娱"},{"CODE":"7994","CONTENT":"游戏厅","TYPE":"娱"},{"CODE":"7996","CONTENT":"游乐圈马戏团","TYPE":"娱"},{"CODE":"7997","CONTENT":"健身俱乐部","TYPE":"娱"},{"CODE":"7998","CONTENT":"水族海洋馆","TYPE":"娱"},{"CODE":"8043","CONTENT":"眼镜店","TYPE":"购"}],"eqList":[]};
        var cityInfo = {
            "2":[{"CITY_CODE":3,"CITY_NAME":"北京市"}],
            "23": [{"CITY_CODE":24,"CITY_NAME":"天津市"}],
            "44": [{"CITY_CODE":45,"CITY_NAME":"石家庄市"},{"CITY_CODE":70,"CITY_NAME":"唐山市"},{"CITY_CODE":86,"CITY_NAME":"秦皇岛市"},{"CITY_CODE":96,"CITY_NAME":"邯郸市"},{"CITY_CODE":117,"CITY_NAME":"邢台市"},{"CITY_CODE":138,"CITY_NAME":"保定市"},{"CITY_CODE":166,"CITY_NAME":"张家口市"},{"CITY_CODE":185,"CITY_NAME":"承德市"},{"CITY_CODE":198,"CITY_NAME":"沧州市"},{"CITY_CODE":216,"CITY_NAME":"廊坊市"},{"CITY_CODE":230,"CITY_NAME":"衡水市"}],
            "243": [{"CITY_CODE":244,"CITY_NAME":"太原市"},{"CITY_CODE":256,"CITY_NAME":"大同市"},{"CITY_CODE":269,"CITY_NAME":"阳泉市"},{"CITY_CODE":276,"CITY_NAME":"长治市"},{"CITY_CODE":292,"CITY_NAME":"晋城市"},{"CITY_CODE":300,"CITY_NAME":"朔州市"},{"CITY_CODE":308,"CITY_NAME":"晋中市"},{"CITY_CODE":321,"CITY_NAME":"运城市"},{"CITY_CODE":336,"CITY_NAME":"忻州市"},{"CITY_CODE":352,"CITY_NAME":"临汾市"},{"CITY_CODE":371,"CITY_NAME":"吕梁市"}],
            "386": [{"CITY_CODE":387,"CITY_NAME":"呼和浩特市"},{"CITY_CODE":398,"CITY_NAME":"包头市"},{"CITY_CODE":409,"CITY_NAME":"乌海市"},{"CITY_CODE":414,"CITY_NAME":"赤峰市"},{"CITY_CODE":428,"CITY_NAME":"通辽市"},{"CITY_CODE":438,"CITY_NAME":"鄂尔多斯市"},{"CITY_CODE":448,"CITY_NAME":"呼伦贝尔市"},{"CITY_CODE":463,"CITY_NAME":"巴彦淖尔市"},{"CITY_CODE":472,"CITY_NAME":"乌兰察布市"},{"CITY_CODE":485,"CITY_NAME":"兴安盟"},{"CITY_CODE":493,"CITY_NAME":"锡林郭勒盟"},{"CITY_CODE":507,"CITY_NAME":"阿拉善盟"}],
            "512": [{"CITY_CODE":513,"CITY_NAME":"沈阳市"},{"CITY_CODE":531,"CITY_NAME":"大连市"},{"CITY_CODE":545,"CITY_NAME":"鞍山市"},{"CITY_CODE":555,"CITY_NAME":"抚顺市"},{"CITY_CODE":564,"CITY_NAME":"本溪市"},{"CITY_CODE":572,"CITY_NAME":"丹东市"},{"CITY_CODE":580,"CITY_NAME":"锦州市"},{"CITY_CODE":589,"CITY_NAME":"营口市"},{"CITY_CODE":597,"CITY_NAME":"阜新市"},{"CITY_CODE":606,"CITY_NAME":"辽阳市"},{"CITY_CODE":615,"CITY_NAME":"盘锦市"},{"CITY_CODE":621,"CITY_NAME":"铁岭市"},{"CITY_CODE":630,"CITY_NAME":"朝阳市"},{"CITY_CODE":639,"CITY_NAME":"葫芦岛市"}],
            "647": [{"CITY_CODE":648,"CITY_NAME":"长春市"},{"CITY_CODE":664,"CITY_NAME":"吉林市"},{"CITY_CODE":675,"CITY_NAME":"四平市"},{"CITY_CODE":683,"CITY_NAME":"辽源市"},{"CITY_CODE":689,"CITY_NAME":"通化市"},{"CITY_CODE":698,"CITY_NAME":"白山市"},{"CITY_CODE":706,"CITY_NAME":"松原市"},{"CITY_CODE":713,"CITY_NAME":"白城市"},{"CITY_CODE":720,"CITY_NAME":"延边朝鲜族自治州"}],
            "730": [{"CITY_CODE":731,"CITY_NAME":"哈尔滨市"},{"CITY_CODE":753,"CITY_NAME":"齐齐哈尔市"},{"CITY_CODE":771,"CITY_NAME":"鸡西市"},{"CITY_CODE":782,"CITY_NAME":"鹤岗市"},{"CITY_CODE":792,"CITY_NAME":"双鸭山市"},{"CITY_CODE":802,"CITY_NAME":"大庆市"},{"CITY_CODE":813,"CITY_NAME":"伊春市"},{"CITY_CODE":832,"CITY_NAME":"佳木斯市"},{"CITY_CODE":845,"CITY_NAME":"七台河市"},{"CITY_CODE":851,"CITY_NAME":"牡丹江市"},{"CITY_CODE":863,"CITY_NAME":"黑河市"},{"CITY_CODE":871,"CITY_NAME":"绥化市"},{"CITY_CODE":883,"CITY_NAME":"大兴安岭地区"}],
            "889": [{"CITY_CODE":890,"CITY_NAME":"上海市"}],
            "912": [{"CITY_CODE":913,"CITY_NAME":"南京市"},{"CITY_CODE":928,"CITY_NAME":"无锡市"},{"CITY_CODE":939,"CITY_NAME":"徐州市"},{"CITY_CODE":952,"CITY_NAME":"常州市"},{"CITY_CODE":961,"CITY_NAME":"苏州市"},{"CITY_CODE":976,"CITY_NAME":"南通市"},{"CITY_CODE":987,"CITY_NAME":"连云港市"},{"CITY_CODE":996,"CITY_NAME":"淮安市"},{"CITY_CODE":1006,"CITY_NAME":"盐城市"},{"CITY_CODE":1017,"CITY_NAME":"扬州市"},{"CITY_CODE":1027,"CITY_NAME":"镇江市"},{"CITY_CODE":1035,"CITY_NAME":"泰州市"},{"CITY_CODE":1043,"CITY_NAME":"宿迁市"}],
            "1050": [{"CITY_CODE":1051,"CITY_NAME":"杭州市"},{"CITY_CODE":1066,"CITY_NAME":"宁波市"},{"CITY_CODE":1079,"CITY_NAME":"温州市"},{"CITY_CODE":1092,"CITY_NAME":"嘉兴市"},{"CITY_CODE":1101,"CITY_NAME":"湖州市"},{"CITY_CODE":1108,"CITY_NAME":"绍兴市"},{"CITY_CODE":1116,"CITY_NAME":"金华市"},{"CITY_CODE":1127,"CITY_NAME":"衢州市"},{"CITY_CODE":1135,"CITY_NAME":"舟山市"},{"CITY_CODE":1141,"CITY_NAME":"台州市"},{"CITY_CODE":1152,"CITY_NAME":"丽水市"}],
            "1163": [{"CITY_CODE":1164,"CITY_NAME":"合肥市"},{"CITY_CODE":1175,"CITY_NAME":"芜湖市"},{"CITY_CODE":1184,"CITY_NAME":"蚌埠市"},{"CITY_CODE":1193,"CITY_NAME":"淮南市"},{"CITY_CODE":1201,"CITY_NAME":"马鞍山市"},{"CITY_CODE":1207,"CITY_NAME":"淮北市"},{"CITY_CODE":1213,"CITY_NAME":"铜陵市"},{"CITY_CODE":1219,"CITY_NAME":"安庆市"},{"CITY_CODE":1232,"CITY_NAME":"黄山市"},{"CITY_CODE":1241,"CITY_NAME":"滁州市"},{"CITY_CODE":1251,"CITY_NAME":"阜阳市"},{"CITY_CODE":1261,"CITY_NAME":"宿州市"},{"CITY_CODE":1275,"CITY_NAME":"六安市"},{"CITY_CODE":1284,"CITY_NAME":"亳州市"},{"CITY_CODE":1290,"CITY_NAME":"池州市"},{"CITY_CODE":1296,"CITY_NAME":"宣城市"}],
            "1305": [{"CITY_CODE":1306,"CITY_NAME":"福州市"},{"CITY_CODE":1321,"CITY_NAME":"厦门市"},{"CITY_CODE":1329,"CITY_NAME":"莆田市"},{"CITY_CODE":1336,"CITY_NAME":"三明市"},{"CITY_CODE":1350,"CITY_NAME":"泉州市"},{"CITY_CODE":1364,"CITY_NAME":"漳州市"},{"CITY_CODE":1377,"CITY_NAME":"南平市"},{"CITY_CODE":1389,"CITY_NAME":"龙岩市"},{"CITY_CODE":1398,"CITY_NAME":"宁德市"}],
            "1409": [{"CITY_CODE":1410,"CITY_NAME":"南昌市"},{"CITY_CODE":1424,"CITY_NAME":"景德镇市"},{"CITY_CODE":1430,"CITY_NAME":"萍乡市"},{"CITY_CODE":1437,"CITY_NAME":"九江市"},{"CITY_CODE":1451,"CITY_NAME":"新余市"},{"CITY_CODE":1455,"CITY_NAME":"鹰潭市"},{"CITY_CODE":1460,"CITY_NAME":"赣州市"},{"CITY_CODE":1481,"CITY_NAME":"吉安市"},{"CITY_CODE":1496,"CITY_NAME":"宜春市"},{"CITY_CODE":1508,"CITY_NAME":"抚州市"},{"CITY_CODE":1521,"CITY_NAME":"上饶市"}],
            "1535": [{"CITY_CODE":1536,"CITY_NAME":"济南市"},{"CITY_CODE":1548,"CITY_NAME":"青岛市"},{"CITY_CODE":1563,"CITY_NAME":"淄博市"},{"CITY_CODE":1573,"CITY_NAME":"枣庄市"},{"CITY_CODE":1581,"CITY_NAME":"东营市"},{"CITY_CODE":1590,"CITY_NAME":"烟台市"},{"CITY_CODE":1604,"CITY_NAME":"潍坊市"},{"CITY_CODE":1619,"CITY_NAME":"济宁市"},{"CITY_CODE":1633,"CITY_NAME":"泰安市"},{"CITY_CODE":1641,"CITY_NAME":"威海市"},{"CITY_CODE":1647,"CITY_NAME":"日照市"},{"CITY_CODE":1653,"CITY_NAME":"莱芜市"},{"CITY_CODE":1657,"CITY_NAME":"临沂市"},{"CITY_CODE":1671,"CITY_NAME":"德州市"},{"CITY_CODE":1685,"CITY_NAME":"聊城市"},{"CITY_CODE":1695,"CITY_NAME":"滨州市"},{"CITY_CODE":1704,"CITY_NAME":"菏泽市"}],
            "1715": [{"CITY_CODE":1716,"CITY_NAME":"郑州市"},{"CITY_CODE":1732,"CITY_NAME":"开封市"},{"CITY_CODE":1744,"CITY_NAME":"洛阳市"},{"CITY_CODE":1760,"CITY_NAME":"平顶山市"},{"CITY_CODE":1772,"CITY_NAME":"安阳市"},{"CITY_CODE":1783,"CITY_NAME":"鹤壁市"},{"CITY_CODE":1790,"CITY_NAME":"新乡市"},{"CITY_CODE":1804,"CITY_NAME":"焦作市"},{"CITY_CODE":1813,"CITY_NAME":"济源市"},{"CITY_CODE":1817,"CITY_NAME":"濮阳市"},{"CITY_CODE":1825,"CITY_NAME":"许昌市"},{"CITY_CODE":1833,"CITY_NAME":"漯河市"},{"CITY_CODE":1840,"CITY_NAME":"三门峡市"},{"CITY_CODE":1848,"CITY_NAME":"南阳市"},{"CITY_CODE":1863,"CITY_NAME":"商丘市"},{"CITY_CODE":1874,"CITY_NAME":"信阳市"},{"CITY_CODE":1886,"CITY_NAME":"周口市"},{"CITY_CODE":1898,"CITY_NAME":"驻马店市"}],
            "1910": [{"CITY_CODE":1911,"CITY_NAME":"武汉市"},{"CITY_CODE":1926,"CITY_NAME":"黄石市"},{"CITY_CODE":1934,"CITY_NAME":"十堰市"},{"CITY_CODE":1945,"CITY_NAME":"宜昌市"},{"CITY_CODE":1962,"CITY_NAME":"襄樊市"},{"CITY_CODE":1973,"CITY_NAME":"鄂州市"},{"CITY_CODE":1978,"CITY_NAME":"荆门市"},{"CITY_CODE":1985,"CITY_NAME":"孝感市"},{"CITY_CODE":1994,"CITY_NAME":"荆州市"},{"CITY_CODE":2004,"CITY_NAME":"黄冈市"},{"CITY_CODE":2016,"CITY_NAME":"咸宁市"},{"CITY_CODE":2025,"CITY_NAME":"随州市"},{"CITY_CODE":2029,"CITY_NAME":"恩施土家族苗族自治州"},{"CITY_CODE":4000,"CITY_NAME":"襄阳市"}],
            "2043": [{"CITY_CODE":2044,"CITY_NAME":"长沙市"},{"CITY_CODE":2055,"CITY_NAME":"株洲市"},{"CITY_CODE":2066,"CITY_NAME":"湘潭市"},{"CITY_CODE":2073,"CITY_NAME":"衡阳市"},{"CITY_CODE":2087,"CITY_NAME":"邵阳市"},{"CITY_CODE":2101,"CITY_NAME":"岳阳市"},{"CITY_CODE":2112,"CITY_NAME":"常德市"},{"CITY_CODE":2123,"CITY_NAME":"张家界市"},{"CITY_CODE":2129,"CITY_NAME":"益阳市"},{"CITY_CODE":2137,"CITY_NAME":"郴州市"},{"CITY_CODE":2150,"CITY_NAME":"永州市"},{"CITY_CODE":2163,"CITY_NAME":"怀化市"},{"CITY_CODE":2177,"CITY_NAME":"娄底市"},{"CITY_CODE":2184,"CITY_NAME":"湘西土家族苗族自治州"}],
            "2194": [{"CITY_CODE":2195,"CITY_NAME":"广州市"},{"CITY_CODE":2210,"CITY_NAME":"韶关市"},{"CITY_CODE":2222,"CITY_NAME":"深圳市"},{"CITY_CODE":2230,"CITY_NAME":"珠海市"},{"CITY_CODE":2237,"CITY_NAME":"汕头市"},{"CITY_CODE":2246,"CITY_NAME":"佛山市"},{"CITY_CODE":2253,"CITY_NAME":"江门市"},{"CITY_CODE":2262,"CITY_NAME":"湛江市"},{"CITY_CODE":2273,"CITY_NAME":"茂名市"},{"CITY_CODE":2281,"CITY_NAME":"肇庆市"},{"CITY_CODE":2291,"CITY_NAME":"惠州市"},{"CITY_CODE":2298,"CITY_NAME":"梅州市"},{"CITY_CODE":2308,"CITY_NAME":"汕尾市"},{"CITY_CODE":2314,"CITY_NAME":"河源市"},{"CITY_CODE":2322,"CITY_NAME":"阳江市"},{"CITY_CODE":2328,"CITY_NAME":"清远市"},{"CITY_CODE":2338,"CITY_NAME":"东莞市"},{"CITY_CODE":2339,"CITY_NAME":"中山市"},{"CITY_CODE":2340,"CITY_NAME":"潮州市"},{"CITY_CODE":2346,"CITY_NAME":"揭阳市"},{"CITY_CODE":2354,"CITY_NAME":"云浮市"}],
            "2361": [{"CITY_CODE":2362,"CITY_NAME":"南宁市"},{"CITY_CODE":2376,"CITY_NAME":"柳州市"},{"CITY_CODE":2388,"CITY_NAME":"桂林市"},{"CITY_CODE":2407,"CITY_NAME":"梧州市"},{"CITY_CODE":2416,"CITY_NAME":"北海市"},{"CITY_CODE":2422,"CITY_NAME":"防城港市"},{"CITY_CODE":2428,"CITY_NAME":"钦州市"},{"CITY_CODE":2434,"CITY_NAME":"贵港市"},{"CITY_CODE":2441,"CITY_NAME":"玉林市"},{"CITY_CODE":2449,"CITY_NAME":"百色市"},{"CITY_CODE":2463,"CITY_NAME":"贺州市"},{"CITY_CODE":2469,"CITY_NAME":"河池市"},{"CITY_CODE":2482,"CITY_NAME":"来宾市"},{"CITY_CODE":2490,"CITY_NAME":"崇左市"}],
            "2499": [{"CITY_CODE":2500,"CITY_NAME":"海口市"},{"CITY_CODE":2506,"CITY_NAME":"三亚市"},{"CITY_CODE":3742,"CITY_NAME":"三沙市"}],
            "2528": [{"CITY_CODE":2529,"CITY_NAME":"重庆市"}],
            "2571": [{"CITY_CODE":2572,"CITY_NAME":"成都市"},{"CITY_CODE":2593,"CITY_NAME":"自贡市"},{"CITY_CODE":2601,"CITY_NAME":"攀枝花市"},{"CITY_CODE":2608,"CITY_NAME":"泸州市"},{"CITY_CODE":2617,"CITY_NAME":"德阳市"},{"CITY_CODE":2625,"CITY_NAME":"绵阳市"},{"CITY_CODE":2637,"CITY_NAME":"广元市"},{"CITY_CODE":2646,"CITY_NAME":"遂宁市"},{"CITY_CODE":2653,"CITY_NAME":"内江市"},{"CITY_CODE":2660,"CITY_NAME":"乐山市"},{"CITY_CODE":2673,"CITY_NAME":"南充市"},{"CITY_CODE":2684,"CITY_NAME":"眉山市"},{"CITY_CODE":2692,"CITY_NAME":"宜宾市"},{"CITY_CODE":2704,"CITY_NAME":"广安市"},{"CITY_CODE":2712,"CITY_NAME":"达州市"},{"CITY_CODE":2721,"CITY_NAME":"雅安市"},{"CITY_CODE":2731,"CITY_NAME":"巴中市"},{"CITY_CODE":2737,"CITY_NAME":"资阳市"},{"CITY_CODE":2743,"CITY_NAME":"阿坝藏族羌族自治州"},{"CITY_CODE":2758,"CITY_NAME":"甘孜藏族自治州"},{"CITY_CODE":2778,"CITY_NAME":"凉山彝族自治州"}],
            "2797": [{"CITY_CODE":2798,"CITY_NAME":"贵阳市"},{"CITY_CODE":2811,"CITY_NAME":"六盘水市"},{"CITY_CODE":2817,"CITY_NAME":"遵义市"},{"CITY_CODE":2833,"CITY_NAME":"安顺市"},{"CITY_CODE":2841,"CITY_NAME":"铜仁市"},{"CITY_CODE":2853,"CITY_NAME":"黔西南布依族苗族自治州"},{"CITY_CODE":2863,"CITY_NAME":"毕节市"},{"CITY_CODE":2873,"CITY_NAME":"黔东南苗族侗族自治州"},{"CITY_CODE":2891,"CITY_NAME":"黔南布依族苗族自治州"}],
            "2905": [{"CITY_CODE":2906,"CITY_NAME":"昆明市"},{"CITY_CODE":2922,"CITY_NAME":"曲靖市"},{"CITY_CODE":2933,"CITY_NAME":"玉溪市"},{"CITY_CODE":2944,"CITY_NAME":"保山市"},{"CITY_CODE":2951,"CITY_NAME":"昭通市"},{"CITY_CODE":2964,"CITY_NAME":"丽江市"},{"CITY_CODE":2971,"CITY_NAME":"普洱市"},{"CITY_CODE":2983,"CITY_NAME":"临沧市"},{"CITY_CODE":2993,"CITY_NAME":"楚雄彝族自治州"},{"CITY_CODE":3005,"CITY_NAME":"红河哈尼族彝族自治州"},{"CITY_CODE":3020,"CITY_NAME":"文山壮族苗族自治州"},{"CITY_CODE":3030,"CITY_NAME":"西双版纳傣族自治州"},{"CITY_CODE":3035,"CITY_NAME":"大理白族自治州"},{"CITY_CODE":3049,"CITY_NAME":"德宏傣族景颇族自治州"},{"CITY_CODE":3056,"CITY_NAME":"怒江傈僳族自治州"},{"CITY_CODE":3062,"CITY_NAME":"迪庆藏族自治州"}],
            "3067": [{"CITY_CODE":3068,"CITY_NAME":"拉萨市"},{"CITY_CODE":3078,"CITY_NAME":"昌都市"},{"CITY_CODE":3091,"CITY_NAME":"山南市"},{"CITY_CODE":3105,"CITY_NAME":"日喀则市"},{"CITY_CODE":3125,"CITY_NAME":"那曲地区"},{"CITY_CODE":3137,"CITY_NAME":"阿里地区"},{"CITY_CODE":3146,"CITY_NAME":"林芝市"}],
            "3155": [{"CITY_CODE":3156,"CITY_NAME":"西安市"},{"CITY_CODE":3171,"CITY_NAME":"铜川市"},{"CITY_CODE":3177,"CITY_NAME":"宝鸡市"},{"CITY_CODE":3191,"CITY_NAME":"咸阳市"},{"CITY_CODE":3207,"CITY_NAME":"渭南市"},{"CITY_CODE":3220,"CITY_NAME":"延安市"},{"CITY_CODE":3235,"CITY_NAME":"汉中市"},{"CITY_CODE":3248,"CITY_NAME":"榆林市"},{"CITY_CODE":3262,"CITY_NAME":"安康市"},{"CITY_CODE":3274,"CITY_NAME":"商洛市"}],
            "3283": [{"CITY_CODE":3284,"CITY_NAME":"兰州市"},{"CITY_CODE":3294,"CITY_NAME":"嘉峪关市"},{"CITY_CODE":3295,"CITY_NAME":"金昌市"},{"CITY_CODE":3299,"CITY_NAME":"白银市"},{"CITY_CODE":3306,"CITY_NAME":"天水市"},{"CITY_CODE":3315,"CITY_NAME":"武威市"},{"CITY_CODE":3321,"CITY_NAME":"张掖市"},{"CITY_CODE":3329,"CITY_NAME":"平凉市"},{"CITY_CODE":3338,"CITY_NAME":"酒泉市"},{"CITY_CODE":3347,"CITY_NAME":"庆阳市"},{"CITY_CODE":3357,"CITY_NAME":"定西市"},{"CITY_CODE":3366,"CITY_NAME":"陇南市"},{"CITY_CODE":3377,"CITY_NAME":"临夏回族自治州"},{"CITY_CODE":3387,"CITY_NAME":"甘南藏族自治州"}],
            "3397": [{"CITY_CODE":3398,"CITY_NAME":"西宁市"},{"CITY_CODE":3407,"CITY_NAME":"海东市"},{"CITY_CODE":3415,"CITY_NAME":"海北藏族自治州"},{"CITY_CODE":3421,"CITY_NAME":"黄南藏族自治州"},{"CITY_CODE":3427,"CITY_NAME":"海南藏族自治州"},{"CITY_CODE":3434,"CITY_NAME":"果洛藏族自治州"},{"CITY_CODE":3442,"CITY_NAME":"玉树藏族自治州"},{"CITY_CODE":3450,"CITY_NAME":"海西蒙古族藏族自治州"}],
            "3457": [{"CITY_CODE":3458,"CITY_NAME":"银川市"},{"CITY_CODE":3466,"CITY_NAME":"石嘴山市"},{"CITY_CODE":3471,"CITY_NAME":"吴忠市"},{"CITY_CODE":3477,"CITY_NAME":"固原市"},{"CITY_CODE":3484,"CITY_NAME":"中卫市"}],
            "3489": [{"CITY_CODE":3490,"CITY_NAME":"乌鲁木齐市"},{"CITY_CODE":3501,"CITY_NAME":"克拉玛依市"},{"CITY_CODE":3507,"CITY_NAME":"吐鲁番市"},{"CITY_CODE":3512,"CITY_NAME":"哈密市"},{"CITY_CODE":3517,"CITY_NAME":"昌吉回族自治州"},{"CITY_CODE":3527,"CITY_NAME":"博尔塔拉蒙古自治州"},{"CITY_CODE":3532,"CITY_NAME":"巴音郭楞蒙古自治州"},{"CITY_CODE":3543,"CITY_NAME":"阿克苏地区"},{"CITY_CODE":3554,"CITY_NAME":"克孜勒苏柯尔克孜自治州"},{"CITY_CODE":3560,"CITY_NAME":"喀什地区"},{"CITY_CODE":3574,"CITY_NAME":"和田地区"},{"CITY_CODE":3584,"CITY_NAME":"伊犁哈萨克自治州"},{"CITY_CODE":3596,"CITY_NAME":"塔城地区"},{"CITY_CODE":3605,"CITY_NAME":"阿勒泰地区"},{"CITY_CODE":3709,"CITY_NAME":"铁门关市"}],
            "3618": [{"CITY_CODE":3619,"CITY_NAME":"台北市"},{"CITY_CODE":3633,"CITY_NAME":"高雄市"},{"CITY_CODE":3646,"CITY_NAME":"台南市"},{"CITY_CODE":3654,"CITY_NAME":"台中市"},{"CITY_CODE":3664,"CITY_NAME":"金门县"},{"CITY_CODE":3665,"CITY_NAME":"南投县"},{"CITY_CODE":3666,"CITY_NAME":"基隆市"},{"CITY_CODE":3675,"CITY_NAME":"新竹市"},{"CITY_CODE":3680,"CITY_NAME":"嘉义市"}],
            "3699": [{"CITY_CODE":3700,"CITY_NAME":"香港岛"},{"CITY_CODE":3701,"CITY_NAME":"九龙"},{"CITY_CODE":3702,"CITY_NAME":"新界"}],
            "3703": [{"CITY_CODE":3704,"CITY_NAME":"澳门半岛"},{"CITY_CODE":3705,"CITY_NAME":"离岛"}],
            "3706": [{"CITY_CODE":3707,"CITY_NAME":"海外"}]
        };

        var form = '<div class="weui-cells weui-cells_form"> <div> <div><label class="weui-label">所属省市</label></div> <div> <select class="form-control" id="provName"> <option value="">省</option> </select> <select class="form-control" id="cityName"> <option value="">市</option> </select> </div> </div> <div> <div><label class="weui-label">MCC</label></div> <div> <select class="form-control" name="select1" id="mcc"> <option value="">请选择MCC...</option> </select> </div> </div> <div> <div><label class="weui-label">商户名称</label></div> <div> <select class="form-control" name="mercName" id="mercName"> <option value="">请选择商户名称</option> </select> </div> </div> </div> <div> </br> <p><a class="btn btn-primary green" id="showTooltips" style="width: 100%;margin-left:0px;">选定</a></p> </div>';
        if(UKList.indexOf(uk) > -1){
            $("#in").append(form);
            var html="";
            var rs = chinaInfo.provinceList;
            for(var i=0;i<rs.length;i++){
                html +="<option value='"+rs[i].PROVINCE_CODE+"'>"+rs[i].PROVINCE_NAME+"</option>";
            }
            $("#provName").append(html); 

            html ="";
            var eq = chinaInfo.eqList;
            for(var i=0;i<eq.length;i++){
                html+="<option value="+eq[i].sn+">"+eq[i].sn+"</option>";
            }
            $("#sn").append(html);

            html ="";
            var mc = chinaInfo.mccList;
            for(var i=0;i<mc.length;i++){
                Html+="<option value='"+mc[i].CODE+"'>【"+mc[i].CODE+"】【"+mc[i].TYPE+"】【"+mc[i].CONTENT+"】</option>";
            }

            $("#provName").change(function(){
                var provId= $("select[id=provName] option").not(function(){ return !this.selected }).val();
                $("#mcc").append(Html);
                $('#cityName').empty(); 
                if(provId==''){
                    $('#cityName').append("<option>市</option>");
                }else{
                    var html="";
                    var result = cityInfo[provId];
                    for(var i=0;i<result.length;i++){
                        html +="<option value='"+result[i].CITY_CODE+"'>"+result[i].CITY_NAME+"</option>"
                    }
                    $("#cityName").append(html);  
                }
            });

            $("#mcc").change(function(){
                var provId= $("select[id=provName] option").not(function(){ return !this.selected }).val();
                var cityId= $("select[id=cityName] option").not(function(){ return !this.selected }).val();
                var mcc =   $("select[id=mcc] option").not(function(){ return !this.selected }).val();
                if(provId == null || provId ==''){
                    myalert("请选择所属省份！");
                    return ;
                }
                if(cityId ==null || cityId == ''){
                    myalert("请选择所属城市！");
                    return;
                }
                if(mcc == null || mcc ==''){
                    myalert("请选择MCC..");
                    return ;
                }
                $('#mercName').empty();
                var info = provId + "-" + cityId + "-" + mcc;
                var rs = shopInfo[info].data;
                var html="";
                if(rs.length>0){
                    for(var i=0;i<rs.length;i++){
                        html +="<option value='"+rs[i].IDENO+"'>"+rs[i].IDENAME+"</option>";
                    }
                }else{
                    html+="<option value=\"\">请选择商户名称</option>";
                }
                $("#mercName").append(html);  
            });
        }else{
        	alert("您没有使用权限！");
    	}
    }
}
