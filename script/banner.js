// $(function(){
// 		// var res = $(".container").supperBanner({
// 		// 	src:[
// 		// 		"http://img.zcool.cn/community/016bcb5a556cd9a8012113c760304c.jpg@1380w",
// 		// 		"http://img.zcool.cn/community/017da25a558a4ba8012113c7a8124e.jpg@1380w",
// 		// 		"http://img.zcool.cn/community/0158d95a557984a8012113c773241d.jpg@1380w",
// 		// 		"http://img.zcool.cn/community/01ba7b5a558a5ca80120121f320a51.jpg@1380w"
// 		// 		]
// 		// })
// 		console.log($(".banner-slider").find("ul"))
// 	})
(function($,window,document){
	class banner{
		constructor(){
			this.init();
		}
		init(){
			this.ul = $(".banner-slider").find("ul");
			this.li = this.ul.find("li")
			console.log(this.ul,this.li)
			this.reset();
		}
		reset(){
			this.li.eq(0).css({
				display:"block"
			})
			.siblings().css({
				display:"none"
			})
		}
	}
	new banner();
})(jQuery,window,document)