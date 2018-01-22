function ajaxGet(url, callback){
	var xhr = new XMLHttpRequest();// 构造函数初始化一个 XMLHttpRequest 对象，当readyState属性改变时会调用它;
	xhr.open("GET", url);// 初始化一个请求;
	xhr.send(null);// 发送请求. 异步模式(默认);
	xhr.onreadystatechange = function(){// 只要 readyState 属性发生变化，就会调用相应的处理函数;
		if(xhr.readyState == 4 && xhr.status == 200){
		// xhr.readyState => xhr对象的状态;
		// xhr.status => http状态码;
			callback(xhr.responseText);//xhr.responseText => 请求回来的结果;
		}
	}
}
function ajaxPost(url, callback, data){
	var xhr = new XMLHttpRequest();
	xhr.open("POST",url);		
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");// 请求头;
	xhr.send(data);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200){
			callback(xhr.responseText);
		}
	}
}
// 创建一个script标签，利用script的src去获取jsonp跨域数据; 
//利用script解析字符串的特性，让这个jsonp跨域数据去调用全局函数;
function jsonp(url, string_callback, fn_callback){
	//创建函数名 => 绝对不能重复的;
	var fn_name =("jsonp_callback_" + Math.random()).replace(/\./g, "");
	//制造全局函数 被window调用;
	window[fn_name] = function(res){
		fn_callback(res);
		delete window[fn_name];
	}
	//拼接 jsonp 的链接;
	url = url + "?" + string_callback + "=" + fn_name;
	//规定参数外所有数据都视为数据参数放在url之中拼接;
	if(arguments.length > 3){
		for(var i = 3; i < arguments.length; i++){
			url = url + "&" + arguments[i];
		}
	}
	//删除掉旧的script标签; 
	var old_script = document.querySelector("[json_script_data]");
	if(old_script){
		old_script.remove();
	}
	//创建新的script标签; 使用拼接好的url; 
	var script = document.createElement("script");
	script.src = url;
	script.setAttribute("json_script_data", fn_name);
	document.documentElement.appendChild(script);
}