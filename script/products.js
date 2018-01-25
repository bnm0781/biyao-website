/* 商品详情部分 */
define(["jquery"],function($){
	class products{
		constructor(){
			this.init();
		}
		init(){
			/* 搜索框 获焦失焦事件 */
			$(".nav-search").find("input").focus($.proxy(this.searchInputFocus,this));
			$(".nav-search").find("input").blur($.proxy(this.searchInputBlur,this));
			/* 小图点击事件 */
			$(".editor-picture li").on("click",$.proxy(this.smallPicture));
			/* 样式按钮点击事件 */
			$(".specs-dimension li").on("click",$.proxy(this.specs));
			this.$panelSizeImg = $(".J-pop");// 尺码对照表;
			this.$mask = $(".pop-mark");// 遮罩层;
			$(".panel-sizeImg span").on("click",$.proxy(this.sizeImg,this));// 尺码对照表按钮;
			/* 尺码对照表关闭按钮 */
			$(".pop-close").on("click",$.proxy(this.close,this));
			this.$panelNum = $(".panel-num");// 选择数量;
			this.panelNum();// 选择购买数量;
			this.supplierRecommen();// 更改左侧列表样式;
			$(window).scroll($.proxy(this.viewTitle,this));
			/* 添加购物车按钮 */
			$("#addShopCar").on("click",$.proxy(this.addShopCar,this));
			$(".view-shopCar").on("click",$.proxy(this.addShopCar,this));
			$("#detail").click($.proxy(this.goods,this));
			$("#evaluate").click($.proxy(this.evaluate,this));
		}
		/* 热词框出现 */
		searchInputFocus(){
			$(".nav-search").find("ul").css({
				display:"block"
			})
		}
		/* 热词框消失 */
		searchInputBlur(){
			$(".nav-search").find("ul").css({
				display:"none"
			})
		}
		/* 切换小图 */
		smallPicture(){
			$(this).addClass("main-active")
			.siblings().removeClass("main-active");
			var src = $(this).find("img").attr("src");
			$(this).parent().siblings().find("img").attr("src",src);
		}
		/* 规格选择 */
		specs(){
			$(this).addClass("lowModel-specs-active")
			.siblings().removeClass("lowModel-specs-active");
		}
		/* 打开尺码对照表 */
		sizeImg(){
			this.$mask.css({
				display:"block"
			})
			this.$panelSizeImg.css({
				display:"block"
			});
		}
		/* 关闭尺码对照表 */
		close(){
			this.$mask.css({
				display:"none"
			})
			this.$panelSizeImg.css({
				display:"none"
			});
		}
		/* 选择购买数量 */
		panelNum(){
			var count = 1;
			this.$panelNum.find(".panel-number").html(count);
			this.$panelNum.find(".panel-minus").on("click",function(){
				if(count > 1){
					--count;
				}
				$(this).siblings(".panel-number").html(count);
			});
			this.$panelNum.find(".panel-add").on("click",function(){
				++count;
				$(this).siblings(".panel-number").html(count);
			})
		}
		/* 更改左侧列表样式 */
		supplierRecommen(){
			$(".supplier-recommen li:last").css({
				border:0
			});
		}
		/* 标题栏运动 */
		viewTitle(){
			if($(window).scrollTop() >= $(".view-section").offset().top){
				$(".view-title").addClass("view-retract").animate({
					top:0
				},200);
			}else{
				$(".view-title").removeAttr("style").removeClass("view-retract");
			}
		}
		/* 切换到商品详情 */
		goods(){
			$("#detail").addClass("view-active")
			.siblings().removeClass("view-active");
			$(".view-detail").css({
				display:"block"
			})
			$(".view-evaluate").css({
				display:"none"
			})
		}
		/* 切换到评价详情 */
		evaluate(){
			$("#evaluate").addClass("view-active")
			.siblings().removeClass("view-active");
			$(".view-detail").css({
				display:"none"
			})
			$(".view-evaluate").css({
				display:"block"
			})
			$(".eval-select li").click(function(){
				$(this).addClass("eval-active")
				.siblings().removeClass("eval-active");
			});
		}
		/* 添加购物车 */
		addShopCar(){
			var id = window.location.href.substring(31,50);
			var supplierID = window.location.href.substring(31,37);
			var imgSrc = $(".editor-picture p img").attr("src");
			var seller = $(".view-title a i").html();
			var goodsName = $(".panel-top h1").html();
			var color = $(".panel-specs li span").eq(0).text() + ":" + $(".panel-specs li.lowModel-specs-active").eq(0).text();
			var size = $(".panel-specs li span").eq(1).text() + ":" + $(".panel-specs li.lowModel-specs-active").eq(1).text();
			var price = $(".panel-maney i").text();
			var num = $(".panel-number").text();
			// var arr = ['"id":"'+id+'"','"seller":"'+seller+'"','"goodsName":"'+goodsName+'"','"color":"'+color+'"','"size":"'+size+'"','"price":"'+price+'"','"num":"'+num+'"','"imgSrc":"'+imgSrc+'"'];
			// function decode(str){
			// 	var _str = str.join(',');
			// 	return _str;
			// }
			// console.log(decode(arr))
			// $.cookie('goods', '[{' + decode(arr) + '}]',{expires:7,path:'/'});//存入
			// $.cookie('goods', '[{"id":"'+id+'","seller":"'+seller+'","goodsName":"'+goodsName+'","color":"'+color+'","size":"'+size+'","price":"'+price+'","num":"'+num+'","imgSrc":"'+imgSrc+'"}]',{expires:7,path:'/'});//存入
			// window.location.href = "../shopcars/index.html";
			if($.cookie("goods")){
				var sCookie = $.cookie("goods");
				var aCookie = JSON.parse(sCookie);
				var flag = false;
				this.index = "";
				var _this = this;
				aCookie.forEach(function(item,index){
					if(item.id == id){
						flag = true;
						_this.index = index;
						return _this.index;
					}
				});
				if(flag){
					var oldNum = aCookie[this.index].num;
					aCookie[this.index].num = Number(oldNum) + Number(num);
				}else{
					aCookie.push({
						'id':id,
						"supplierID":supplierID,
						"seller":seller,
						"goodsName":goodsName,
						"imgSrc":imgSrc,
						"color":color,
						"size":size,
						"price":price,
						"num":num
					});
				}
				$.cookie("goods",JSON.stringify(aCookie),{expires:7,path:'/'});
			}else{
				$.cookie('goods', '[{"id":"'+id+'","supplierID":"'+supplierID+'","seller":"'+seller+'","goodsName":"'+goodsName+'","color":"'+color+'","size":"'+size+'","price":"'+price+'","num":"'+num+'","imgSrc":"'+imgSrc+'"}]',{expires:7,path:'/'});//存入
			}
			window.location.href = "../shopcars/index.html";
		}
	}
	return new products();
})