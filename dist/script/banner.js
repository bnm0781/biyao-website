/* 轮播图部分 */
define(["jquery"],function($){
	var index = 0;// 初始下标;
	class banner{
		constructor(){
			this.init();
		}
		init(){
			this.$ul = $(".banner-slider ul");
			this.$li = this.$ul.children();// 每张图片所属li;
			this.$btns = $(".banner-item li");// 按钮;
			this.$left = $(".slider-left");// 上一张;
			this.$right = $(".slider-right");// 下一张;
			var setup = {
				url:"http://localhost:8888/data/slider-article-cr2.json",
				type:"GET",
				context:this
			}
			$.ajax(setup).then(this.reset);
			this.$btns.click($.proxy(this.change,this));
			this.$left.click($.proxy(this.prev,this));
			this.$right.click($.proxy(this.next,this));
			this.autoplay();
		}
		/* 初始化样式设置 */
		reset(res){
			var _this = this;
			res.data.banners.forEach(function(item,index){
				_this.$li.find("img").eq(index).attr("src",item.pcImageUrl);
			})
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
	return new banner();
})