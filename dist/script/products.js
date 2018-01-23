/* 商品详情部分 */
define(["jquery"],function($){
	class products{
		constructor(){
			this.init();
		}
		init(){
			this.$searchInput = $(".nav-search").find("input");// 搜索框;
			this.$searchInput.focus($.proxy(this.searchInputFocus,this));
			this.$searchInput.blur($.proxy(this.searchInputBlur,this));
			this.$editorPictureLi = $(".editor-picture li");// 小图;
			this.$editorPictureLi.on("click",$.proxy(this.smallPicture));
			this.$panelSpecs = $(".specs-dimension li");// 样式按钮;
			this.$panelSpecs.on("click",$.proxy(this.specs));
			this.$panelSize = $(".panel-sizeImg span");// 尺码对照表按钮;
			this.$panelSizeImg = $(".J-pop");// 尺码对照表;
			this.$mask = $(".pop-mark");// 遮罩层;
			this.$panelSize.on("click",$.proxy(this.sizeImg,this));
			this.$popClose = $(".pop-close");// 尺码对照表关闭按钮;
			this.$popClose.on("click",$.proxy(this.close,this));
		}
		/* 热词框出现 */
		searchInputFocus(){
			$(".nav-search").find("ul").css({
				display:"block"
			})
		}
		/* 热词框消失 */
		searchInputBlur(){
			$(".nav-search").find("ul").css({
				display:"none"
			})
		}
		/* 切换小图 */
		smallPicture(){
			$(this).addClass("main-active")
			.siblings().removeClass("main-active");
			var src = $(this).find("img").attr("src");
			$(this).parent().siblings().find("img").attr("src",src);
		}
		/* 规格选择 */
		specs(){
			$(this).addClass("lowModel-specs-active")
			.siblings().removeClass("lowModel-specs-active");
		}
		/* 打开尺码对照表 */
		sizeImg(){
			this.$mask.css({
				display:"block"
			})
			this.$panelSizeImg.css({
				display:"block"
			});
		}
		/* 关闭尺码对照表 */
		close(){
			this.$mask.css({
				display:"none"
			})
			this.$panelSizeImg.css({
				display:"none"
			});
		}
	}
	return new products();
})