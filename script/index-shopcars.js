/* 商品详情页面业务逻辑 */
require(["../script/config-shopcars.js"],function(){
	require(["jquery","cookie","shopcars"],function($,cookie,shopcars){
		/* 主页显示用户名 */
		if($.cookie("user")){
			$(".user-center").css({
				display:"block"
			});
			$(".user-out").css({
				display:"none"
			});
			$(".user-center em").html($.cookie("user"));// JSON.parse($.cookie("user"))[0].id
			$("#loginTip").css({
				display:"block"
			});
			$("#unloginTip").css({
				display:"none"
			});
		}
		/* 退出登录 */
		$(".user-center li").eq(2).on("click",function(){
			$.cookie("user",null,{expires:-1,path:'/'});
			$(".user-center").css({
				display:"none"
			});
			$(".user-out").css({
				display:"block"
			});
			$("#loginTip").css({
				display:"none"
			});
			$("#unloginTip").css({
				display:"block"
			});
			window.location.reload();
		})
		/* 是否显示购物车 */
		if($.cookie("goods")){
			$(".h580").css({
				display:"none"
			});
			$(".relative").css({
				display:"block"
			})
			$(".pd-b40").css({
				display:"block"
			})
			var sum = 0;
			$(JSON.parse($.cookie("goods"))).each(function(index,item){
				sum += Number(item.num);
				return sum;
			})
			$("#shopCar").html(sum);
		}
	})
})