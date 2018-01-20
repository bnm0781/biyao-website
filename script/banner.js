(function($,window,document){
	var index = 0;// 初始下标;
	class banner{
		constructor(){
			this.init();
		}
		init(){
			this.$ul = $(".banner-slider ul");
			this.$li = this.$ul.children();
			this.$btns = $(".banner-item li");
			this.$left = $(".slider-left");
			this.$right = $(".slider-right");
			this.reset();
			this.$btns.click($.proxy(this.change,this));
			this.$left.click($.proxy(this.prev,this));
			this.$right.click($.proxy(this.next,this));
			this.autoplay();
		}
		/* 初始化样式设置 */
		reset(){
			this.$li.eq(index)
			.siblings().css({
				display:"none"
			})
			this.$btns.eq(index).addClass("item-active");
		}
		/* 改变显示 */
		change(evt){
			clearInterval(this.timer);// 重新播放;
			if(evt instanceof Object){
				var $btn = $(evt.target);
				if(index == $btn.index()){
					return 0;
				}
				index = $btn.index();
			}else{
				var $btn = this.$btns.eq(index);
			}
			$btn.addClass("item-active")
			.siblings().removeClass("item-active");
			this.fade();
			this.autoplay();
		}
		/* 显示动画效果 */
		fade(){
			this.$li.eq(index)
			.stop().fadeIn()
			.siblings().stop().fadeOut()
		}
		/* 自动播放 */
		autoplay(){
			clearInterval(this.timer);// 重新播放;
			var _this = this;
			this.timer = setInterval(function(){
				if(index == _this.$li.length - 1){
					index = 0;
				}else{
					index++;
				}
				_this.change();
			},5000)
		}
		/* 上一张 */
		prev(){
			clearInterval(this.timer);// 重新播放;
			index = (index == 0) ? (this.$li.length - 1) : (index - 1);
			this.change();
			this.autoplay();
		}
		/* 下一张 */
		next(){
			clearInterval(this.timer);// 重新播放;
			index = (index == this.$li.length - 1) ? 0 : (index + 1);
			this.change();
			this.autoplay();
		}
	}
	new banner();
})(jQuery,window,document)