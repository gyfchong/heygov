module.exports = function(gulp, plugins, config) {
	return function() {
		plugins.browserSync({
			server: 'build'
		});

		gulp.watch(config.paths.source + 'css/**/*.scss', ['sass']);
	    gulp.watch([config.paths.source + 'js/components/**/*.js', config.paths.source + 'js/app.js'], ['javascripts']);
		gulp.watch(config.paths.source + "img/**/*+(jpg|jpeg|png|gif|svg|ico)", ["image"]);
		gulp.watch('source/**/*.html', ['html']);
	}
}