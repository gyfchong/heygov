module.exports = function(gulp, plugins, config) {
	return function() {
		gulp.src([config.paths.source + 'js/components/**/*.js', config.paths.source + 'js/scripts.js'])
			.pipe(plugins.plumber({
				errorHandler: plugins.notify.onError('Error: <%= error.message %>')
			}))
			.pipe(plugins.concat('scripts.js'))
			.pipe(gulp.dest(config.paths.build + "js"))
			.pipe(plugins.browserSync.reload({stream: true}))
			.pipe(plugins.notify('JS: DONE'));
	}
}