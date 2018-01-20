(function($,window,document){
	class rightBar{
		constructor(){
			this.init();
		}
		init(){
			this.$rightBarCode = $(".rightBar-code");
			this.$rightBarTop = $(".rightBar-top");
			$(window).scroll($.proxy(this.rightBarScroll,this));
			this.$rightBarTop.click(function(){
				$("html,body").animate({scrollTop:0}, 500)
			});
		}
		rightBarScroll(){
			if($(window).scrollTop() > 0){
				this.$rightBarTop.stop().fadeIn(300).css({
					display:"block"
				});
			}else{
				this.$rightBarTop.stop().fadeOut(300);
			}
		}
	}
	new rightBar();
})(jQuery,window,document)