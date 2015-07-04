module.exports = function(gulp, plugins, config) {
	return function(cb) {
		gulp.src(config.paths.source + 'img/*+(jpg|jpeg|png|gif|svg|ico)')
			.pipe(plugins.plumber({
				errorHandler: plugins.notify.onError('Error: <%= error.message %>')
			}))
			.pipe(plugins.changed('build/assets/img'))
			.pipe(plugins.imageop({
				optimizationLevel: 5,
				progressive: true,
				interlaced: true
			}))
			.pipe(gulp.dest(config.paths.build + 'img'))
			.on('end', cb)
			.on('error', cb)
			.pipe(plugins.browserSync.reload({stream: true}))
			.pipe(plugins.notify('IMAGE OPTIMISATION: DONE'));
	}
}