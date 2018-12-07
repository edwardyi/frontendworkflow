const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create();


gulp.task('sass', function(){
	return gulp.src(['src/sass/*.scss'])
	.pipe(sass())
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.stream());
})

gulp.task('serve', ['sass'], ()=>{
	browserSync.init({
		server: './src'
	})
	gulp.watch(['src/sass/*.sass'],['sass']);
	gulp.watch(['src/*.html']).on('change', browserSync.reload)
})

gulp.task('default', ['serve'])