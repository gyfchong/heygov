module.exports = function(gulp, plugins, config) {
	return function() {
		plugins.browserify(config.paths.source + 'js/app.jsx')
			.transform(plugins.reactify)
			.bundle()
			.pipe(plugins.source('app.js'))
			.pipe(gulp.dest(config.paths.build + 'js'))
			.pipe(plugins.notify('BROWSERIFY: DONE'))
			.pipe(plugins.browserSync.reload({stream: true}));
	}
}