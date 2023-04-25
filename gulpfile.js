var gulp = require('gulp');

gulp.task('hello',()=>{
	
	return new Promise(function(resolve, reject) 
	{
		console.log("Hello World!!!");
		resolve();
	});
  
});

gulp.task('default', gulp.series('hello'));