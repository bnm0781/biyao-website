/* 导航栏部分 */
define(["jquery"],function($){
	class nav{
		constructor(){
			this.init();
		}
		init(){
			this.flag = "";
			this.$nav = $(".nav");// 导航栏;
			this.$article = $(".article");// 参照物;
			this.$searchInput = $("#searchInput");// 搜索框;
			this.$navSearchUl = $(".nav-search ul");// 热词栏;
			$(window).scroll($.proxy(this.navScroll,this));
			this.$searchInput.focus($.proxy(this.focus,this));
			this.$searchInput.blur($.proxy(this.blur,this));
		}
		/* 导航栏滚动事件 */
		navScroll(){
			if($(window).scrollTop() >= this.$article.offset().top){
				this.$nav.removeClass('nav-index');
				this.$nav.slideDown(150)
				this.$nav.addClass('retract');
				this.flag = true;
			}else{
				this.$nav.removeClass('retract');
				this.$nav.addClass('nav-index');
				this.$nav.css({
					display:''
				})
				this.flag = false;
			}
		}
		/* 热词显示 */
		focus(){
			if(this.flag){
				this.$navSearchUl.css({
					display:"block"
				})
			}
		}
		/* 热词隐藏 */
		blur(){
			if(this.flag){
				this.$navSearchUl.css({
					display:"none"
				})
			}
		}
	}
	return new nav();
})