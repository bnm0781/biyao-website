(function($,window,document){
	class header{
		constructor(){
			this.init();
		}
		init(){
			this.userApp = $(".user-app");
			this.userAppBlock();
		}
		userAppBlock(){
			this.userApp.on("mouseenter",function(){
				$(this).children(1).eq(1).css({
					display:"block"
				});
			})
			this.userApp.on("mouseleave",function(){
				$(this).children(1).eq(1).css({
					display:"none"
				});
			})
		}
	}
	new header();
})(jQuery,window,document)