/* 热词部分 */
define(["jquery"],function($){
	class keyWord{
		constructor(){
			this.init();
		}
		init(){
			// $.ajax({
			// 	url: 'http://www.biyao.com/classify/hotWord',
			// 	type: 'GET',
			// 	dataType:"jsonp",
			// 	success:function(res){
			// 		console.log(res)
			// 	},
			// 	context:this
			// })
			this.hotwords = $(".nav-search li");
			var setup = {
				url:"http://www.biyao.com/classify/hotWord",
				type:"GET",
				dataType:"jsonp",
				context:this
			}
			$.ajax(setup).then(this.renderingHotWords);
		}
		renderingHotWords(res){
			var _this = this;
			res.data.hotwords.forEach(function(item,index){
				_this.hotwords.eq(index).html(item)
			})
		}
	}
	return new keyWord();
})