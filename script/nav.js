(function($,window,document){
	class nav{
		constructor(){
			this.init();
		}
		init(){
			this.flag = "";
			this.$nav = $(".nav");
			this.$article = $(".article");
			this.$searchInput = $("#searchInput");
			this.$navSearchUl = $(".nav-search ul");
			$(window).scroll($.proxy(this.navScroll,this));
			this.$searchInput.focus($.proxy(this.focus,this));
			this.$searchInput.blur($.proxy(this.blur,this));
		}
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
		focus(){
			if(this.flag){
				this.$navSearchUl.css({
					display:"block"
				})
			}
		}
		blur(){
			if(this.flag){
				this.$navSearchUl.css({
					display:"none"
				})
			}
		}
	}
	new nav();
})(jQuery,window,document)