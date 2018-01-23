/* 主页业务逻辑 */
require(["script/config.js"],function(){
	require(["jquery","nav","rightBar","banner","category","keyWord","article","login","cookie","ajax","ajaxdemo"],function($,nav,rightBar,banner,category,keyWord,article,login,cookie,ajax,ajaxdemo){
		/* 主页显示用户名 */
		if($.cookie("user")){
			$(".user-center").css({
				display:"block"
			});
			$(".user-out").css({
				display:"none"
			})
			$(".user-center em").html($.cookie("user"));// JSON.parse($.cookie("user"))[0].id
		}
		/* 退出登录 */
		$(".user-center li").eq(2).on("click",function(){
			$.cookie("user",null,{expires:-1});
			$(".user-center").css({
				display:"none"
			});
			$(".user-out").css({
				display:"block"
			})
		})
	})
})