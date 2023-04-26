const gulp 		= require('gulp');
const uglify	= require('gulp-uglify');


gulp.task('uglify',()=>{
	return new Promise((resolve, reject)=>{
		gulp.src('ts/out/*.js').pipe(uglify()).pipe(gulp.dest('.'));	
		resolve();
	})
	
})

//gulp.task('default', gulp.series('uglify'));