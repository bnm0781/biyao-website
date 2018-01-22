const gulp = require("gulp");
const sass = require("gulp-sass-china");
const babel = require("gulp-babel");
const connect = require("gulp-connect");
const webpack = require("webpack-stream");

gulp.task("html",()=>{
	return gulp.src("html/**/*")
				.pipe(gulp.dest("dist"))
				.pipe(connect.reload());
})
gulp.task("sass",()=>{
	return gulp.src("scss/*.scss")
				.pipe(sass().on("error",sass.logError))
				.pipe(gulp.dest("dist/css"));
})
gulp.task("script",()=>{
	return gulp.src("script/*.js")
				.pipe(gulp.dest("dist/script"));
})
gulp.task("data",()=>{
	return gulp.src("data/*")
				.pipe(gulp.dest("dist/data"));
})
// gulp.task("webpack",()=>{
// 	return gulp.src("script/index.js")
// 				.pipe(webpack({
// 				    output:{
// 				    	filename:"bundle.js"
// 				    },
// 				    module:{
// 				    	loaders:[
// 				    		{
// 					    		test:/\.css$/,
// 					    		loader:"style-loader!css-loader"
// 				    		}
// 				    	]
// 				    }
// 				}))
// 				.pipe(gulp.dest('dist/'));
// })

gulp.task("watch",()=>{
	gulp.watch(["scss/*.scss","html/**/*","script/*.js","data/*"],["sass","html","script","data"]);
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8888,
		livereload:true
	})
})

gulp.task("default",["watch","server"]);