define(["jquery"],function($){
	class ajax{
		constructor(){
			this.init();
		}
		init(){
			var setup = {
				url:"http://localhost:8888/data/jsonp.json",
				type:"GET",
			}
			$.ajax(setup).then(this.rendering);
		}
		rendering(res){
			console.log(res)
		}
	}
	return new ajax();
})