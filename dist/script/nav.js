(function($,wiindow,document){
	class nav{
		constructor(){
			this.init();
		}
		init(){
			this.keyWord = $(".nav-search").children().eq(1);
			this.changeKeyWord();
		}
		changeKeyWord(){
			this.keyWord.find("li").on("mouseenter",function(){
				$(this).css({
					color:"#f7b200"
				})
			})
			this.keyWord.find("li").on("mouseleave",function(){
				$(this).css({
					color:"#808080"
				})
			})
		}	
	}
	new nav();
})(jQuery,window,document)