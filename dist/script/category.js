/* 模块部分 */
define(["jquery"],function($){
	class category{
		constructor(){
			this.init()
		}
		init(){
			this.$categoryRecommend1 = $(".category-recommend-1");// 精选部分;
			this.$categoryRecommend2 = $(".category-recommend-2");// 每日上新及推荐部分;
			this.$categoryRecommend3 = $(".category-recommend-3");// 分类部分;
			this.$categoryRecommend1.find("li").mouseenter($.proxy(this.accordion));
			var setup = {
				url:"http://localhost:8888/data/slider-article-cr2.json",
				type:"GET",
				context:this
			}
			$.ajax(setup).then(this.loading);

			var cr30001 = {
				url:"http://localhost:8888/data/cr3-0.1.json",
				type:"GET",
				context:this
			}
			$.ajax(cr30001).then(this.cr30001);

			var cr302 = {
				url:"http://localhost:8888/data/cr3-2.json",
				type:"GET",
				context:this
			}
			$.ajax(cr302).then(this.cr302);

			var cr30304050607 = {
				url:"http://localhost:8888/data/cr3-3.4.5.6.7.json",
				type:"GET",
				context:this
			}
			$.ajax(cr30304050607).then(this.cr30304050607);

			var cr30809101112 = {
				url:"http://localhost:8888/data/cr3-8.9.10.11.12.json",
				type:"GET",
				context:this
			}
			$.ajax(cr30809101112).then(this.cr30809101112);

			var cr31314151617 = {
				url:"http://localhost:8888/data/cr3-13.14.15.16.17.json",
				type:"GET",
				context:this
			}
			$.ajax(cr31314151617).then(this.cr31314151617);

			var cr318 = {
				url:"http://localhost:8888/data/cr3-18.json",
				type:"GET",
				context:this
			}
			$.ajax(cr318).then(this.cr318);
		}
		/* 手风琴 */
		accordion(){
			$(this).removeClass("press").stop().animate({
				width:"620"
			})
			.siblings().addClass("press").stop().animate({
				width:"82"
			})
		}
		/* 加载1/2部分图片 */
		loading(res){
			var _this = this;
			res.data.modules[0].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend2.find("img").eq(index).attr("src",item.pcImageUrl);
			})
			res.data.modules[1].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend1.find("img").eq(index).attr("src",item.pcImageUrl);
			})
		}
		/* 3部分 0/1模块 */
		cr30001(res){
			var _this = this;
			this.$categoryRecommend3.eq(0).find("p").html(res.data.modules[0].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(0).find("span").html(res.data.modules[0].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[0].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(0).find("img").eq(0).attr("src",res.data.modules[0].moduleInfo.moduleImage);
			res.data.modules[0].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(0).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(0).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(0).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(1).find("p").html(res.data.modules[1].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(1).find("span").html(res.data.modules[1].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[1].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(1).find("img").eq(0).attr("src",res.data.modules[1].moduleInfo.moduleImage);
			res.data.modules[1].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(1).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(1).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(1).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})
		}
		/* 3部分 2模块 */
		cr302(res){
			var _this = this;
			this.$categoryRecommend3.eq(2).find("p").html(res.data.modules[4].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(2).find("span").html(res.data.modules[4].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[4].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(2).find("img").eq(0).attr("src",res.data.modules[4].moduleInfo.moduleImage);
			res.data.modules[4].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(2).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(2).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(2).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})
		}
		/* 3部分 3/4/5/6/7模块 */
		cr30304050607(res){
			var _this = this;
			this.$categoryRecommend3.eq(3).find("p").html(res.data.modules[0].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(3).find("span").html(res.data.modules[0].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[0].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(3).find("img").eq(0).attr("src",res.data.modules[0].moduleInfo.moduleImage);
			res.data.modules[0].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(3).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(3).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(3).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(4).find("p").html(res.data.modules[1].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(4).find("span").html(res.data.modules[1].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[1].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(4).find("img").eq(0).attr("src",res.data.modules[1].moduleInfo.moduleImage);
			res.data.modules[1].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(4).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(4).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(4).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(5).find("p").html(res.data.modules[2].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(5).find("span").html(res.data.modules[2].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[2].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(5).find("img").eq(0).attr("src",res.data.modules[2].moduleInfo.moduleImage);
			res.data.modules[2].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(5).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(5).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(5).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(6).find("p").html(res.data.modules[3].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(6).find("span").html(res.data.modules[3].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[3].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(6).find("img").eq(0).attr("src",res.data.modules[3].moduleInfo.moduleImage);
			res.data.modules[3].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(6).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(6).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(6).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(7).find("p").html(res.data.modules[4].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(7).find("span").html(res.data.modules[4].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[4].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(7).find("img").eq(0).attr("src",res.data.modules[4].moduleInfo.moduleImage);
			res.data.modules[4].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(7).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(7).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(7).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})
		}
		/* 3部分 8/9/10/11/12模块 */
		cr30809101112(res){
			var _this = this;
			this.$categoryRecommend3.eq(8).find("p").html(res.data.modules[0].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(8).find("span").html(res.data.modules[0].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[0].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(8).find("img").eq(0).attr("src",res.data.modules[0].moduleInfo.moduleImage);
			res.data.modules[0].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(8).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(8).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(8).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(9).find("p").html(res.data.modules[1].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(9).find("span").html(res.data.modules[1].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[1].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(9).find("img").eq(0).attr("src",res.data.modules[1].moduleInfo.moduleImage);
			res.data.modules[1].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(9).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(9).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(9).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(10).find("p").html(res.data.modules[2].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(10).find("span").html(res.data.modules[2].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[2].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(10).find("img").eq(0).attr("src",res.data.modules[2].moduleInfo.moduleImage);
			res.data.modules[2].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(10).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(10).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(10).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(11).find("p").html(res.data.modules[3].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(11).find("span").html(res.data.modules[3].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[3].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(11).find("img").eq(0).attr("src",res.data.modules[3].moduleInfo.moduleImage);
			res.data.modules[3].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(11).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(11).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(11).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(12).find("p").html(res.data.modules[4].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(12).find("span").html(res.data.modules[4].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[4].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(12).find("img").eq(0).attr("src",res.data.modules[4].moduleInfo.moduleImage);
			res.data.modules[4].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(12).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(12).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(12).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})
		}
		/* 3部分 13/14/15/16/17模块 */
		cr31314151617(res){
			var _this = this;
			this.$categoryRecommend3.eq(13).find("p").html(res.data.modules[0].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(13).find("span").html(res.data.modules[0].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[0].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(13).find("img").eq(0).attr("src",res.data.modules[0].moduleInfo.moduleImage);
			res.data.modules[0].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(13).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(13).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(13).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(14).find("p").html(res.data.modules[1].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(14).find("span").html(res.data.modules[1].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[1].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(14).find("img").eq(0).attr("src",res.data.modules[1].moduleInfo.moduleImage);
			res.data.modules[1].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(14).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(14).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(14).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(15).find("p").html(res.data.modules[2].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(15).find("span").html(res.data.modules[2].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[2].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(15).find("img").eq(0).attr("src",res.data.modules[2].moduleInfo.moduleImage);
			res.data.modules[2].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(15).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(15).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(15).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(16).find("p").html(res.data.modules[3].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(16).find("span").html(res.data.modules[3].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[3].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(16).find("img").eq(0).attr("src",res.data.modules[3].moduleInfo.moduleImage);
			res.data.modules[3].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(16).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(16).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(16).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})

			this.$categoryRecommend3.eq(17).find("p").html(res.data.modules[4].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(17).find("span").html(res.data.modules[4].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[4].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(17).find("img").eq(0).attr("src",res.data.modules[4].moduleInfo.moduleImage);
			res.data.modules[4].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(17).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(17).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(17).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})
		}
		/* 3部分 18模块 */
		cr318(res){
			var _this = this;
			this.$categoryRecommend3.eq(18).find("p").html(res.data.modules[0].moduleInfo.moduleTitle);
			this.$categoryRecommend3.eq(18).find("span").html(res.data.modules[0].moduleInfo.manufacturers+"&nbsp;&nbsp;"+res.data.modules[0].moduleInfo.moduleBrand);
			this.$categoryRecommend3.eq(18).find("img").eq(0).attr("src",res.data.modules[0].moduleInfo.moduleImage);
			res.data.modules[0].moduleInfo.moduleItems.forEach(function(item,index){
				_this.$categoryRecommend3.eq(18).find(".a img").eq(index).attr("src",item.image);
				_this.$categoryRecommend3.eq(18).find(".a dt").eq(index).html(item.ext.itemName);
				_this.$categoryRecommend3.eq(18).find(".a dd").eq(index).html("￥"+item.ext.itemPrice);
			})
		}
	}
	return new category();
})