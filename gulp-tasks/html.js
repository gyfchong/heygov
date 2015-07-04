module.exports = function(gulp, plugins) {
	return function() {
		gulp.src('source/*.html')
			.pipe(plugins.changed('build/'))
	    	.pipe(gulp.dest('build/'))
	    	.pipe(plugins.browserSync.reload({stream: true}))
	    	.pipe(plugins.notify('HTML COPY: DONE'));
	}
}