/* 专题文章部分 */
define(["jquery"],function($){
	class article{
		constructor(){
			this.init();
		}
		init(){
			this.$article = $(".article");// 专题文章部分;
			var setup = {
				url:"data/slider-article-cr2.json",
				type:"GET",
				context:this
			}
			$.ajax(setup).then(this.reset);
		}
		reset(res){
			this.$article.find("i").eq(1).html(res.data.article.author);
			this.$article.find("i").eq(0).html(res.data.article.publishDate);
			this.$article.find("span").html(res.data.article.ext.title);
		}
	}
	return new article();
})