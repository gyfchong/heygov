module.exports = function(gulp, plugins, config) {
	return function() {
		gulp.src(config.paths.source + "css/styles.scss")
			.pipe(plugins.plumber({
				errorHandler: plugins.notify.onError('Error: <%= error.message %>')
			}))
			.pipe(plugins.cssGlobbing({
				extensions: ['.scss'],
				scssImportPath: {
					leading_underscore: false,
					filename_extension: false
				}
			}))
			.pipe(plugins.sourcemaps.init())
				.pipe(plugins.sass())
			.pipe(plugins.sourcemaps.write())
			.pipe(plugins.autoprefixer({
	            browsers: ['last 2 versions'],
	            cascade: false
	        }))
			.pipe(gulp.dest(config.paths.build + "css"))
			.pipe(plugins.browserSync.reload({stream: true}))
			.pipe(plugins.notify('SCSS: DONE'));
	}
}