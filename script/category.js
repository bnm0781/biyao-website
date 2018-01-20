(function($,window,document){
	class category{
		constructor(){
			this.init()
		}
		init(){
			this.$categoryRecommend1Li = $(".category-recommend-1 li");
			this.$categoryRecommend1Li.mouseenter($.proxy(this.accordion));
		}
		accordion(){
			$(this).removeClass("press").stop().animate({
				width:"620"
			})
			.siblings().addClass("press").stop().animate({
				width:"82"
			})
		}
	}
	new category();
})(jQuery,window,document)