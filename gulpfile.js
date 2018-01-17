const gulp = require("gulp");
const sass = require("gulp-sass-china");
const babel = require("gulp-babel");
const connect = require("gulp-connect");

gulp.task("html",()=>{
	return gulp.src(["html/**/*"])
				.pipe(gulp.dest("dist"))
				.pipe(connect.reload());
})
gulp.task("sass",()=>{
	return gulp.src("scss/*.scss")
				.pipe(sass().on("error",sass.logError))
				.pipe(gulp.dest("dist/css"));
})

gulp.task("watch",()=>{
	gulp.watch(["scss/*.scss","html/**/*"],["sass","html"]);
})
gulp.task("server",function(){
	connect.server({
		root:"dist",
		port:8888,
		livereload:true
	})
})

gulp.task("default",["watch","server"]);