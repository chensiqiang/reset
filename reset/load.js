//引入css或js文件
var load = (function (arg1, arg2){
	var baseUrl=document.scripts;
	baseUrl=baseUrl[baseUrl.length-1].src.substring(0,baseUrl[baseUrl.length-1].src.lastIndexOf("/")+1);
	return function(arg1, arg2){
		var type = typeof arg1;
		if(type == 'string'){ //载入单个js或css文件
			var url = arg1;
			var fn = arg2;
			if(url.indexOf('/') != 0 && url.indexOf('http://') != 0 && url.indexOf('https://') != 0){ //如果不是绝对路径
				url = baseUrl + url;
			}
			var tmp = url.substr(url.lastIndexOf(".")); //获取文件后缀
			if(tmp == ".js"){
				var head = document.getElementsByTagName('head')[0];
				var script = document.createElement('script');
				script.src = url;
				script.type = 'text/javascript';
				script.onload = fn;
				head.appendChild(script);
			}
			else if(tmp == ".css"){
				var head = document.getElementsByTagName('head')[0];
				var link = document.createElement('link');
				link.href = url;
				link.rel = 'stylesheet';
				link.type = 'text/css';
				head.appendChild(link);
			}
			else{
				console.log(url + " 文件后缀错误");
			}
		}
		else if(type == "object" && arg1 instanceof Array){
			var arr = arg1;
			var fn = arg2;
			if(arr.length > 1){
				load(arr.shift(), function(){
					load(arr, fn);
				});
			}
			else{
				load(arr.shift(), fn);
			}
			
		}
		else{
			console.log('第1个参数类型错误');
		}
	}
	
})();

//引入库文件
load(['win.js','dom.js']);
