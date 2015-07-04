module.exports = function(gulp, plugins, config) {
	return function() {
		plugins.browserSync({
			server: 'build'
		});

		gulp.watch(config.paths.source + 'css/**/*.scss', ['sass']);
		gulp.watch([config.paths.source + 'js/**/*.jsx', config.paths.source + 'js/app.jsx'], ['browserify']);
		gulp.watch(config.paths.source + 'img/**/*+(jpg|jpeg|png|gif|svg|ico)', ['image']);
		gulp.watch('source/**/*.html', ['html']);
	}
}