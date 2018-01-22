/* 右边栏部分 */
define(["jquery"],function($){
	class rightBar{
		constructor(){
			this.init();
		}
		init(){
			// this.$rightBarCode = $(".rightBar-code");
			this.$rightBarTop = $(".rightBar-top");
			$(window).scroll($.proxy(this.rightBarScroll,this));
			/* 返回顶部事件 */
			this.$rightBarTop.click(function(){
				$("html,body").animate({scrollTop:0}, 500)
			});
		}
		/* 返回顶部按钮显示与隐藏 */
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
	return new rightBar();
})