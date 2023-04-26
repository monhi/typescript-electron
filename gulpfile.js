const gulp 		= require('gulp');
const uglify	= require('gulp-uglify');


gulp.task('uglify',()=>{
	return new Promise((resolve, reject)=>{
		gulp.src('ts/out/*.js').pipe(uglify()).pipe(gulp.dest('./dist'));	
		gulp.src(['contents/*.html']).pipe(gulp.dest('./dist'));
		gulp.src(['contents/assets/**/*.*']).pipe(gulp.dest('./dist/assets/'));
		resolve();
	})
	
})

gulp.task('default', gulp.series('uglify'));