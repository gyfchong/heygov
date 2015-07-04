var gulp = require('gulp');
var config = require('./gulp-tasks/config');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*', 'yargs', 'browser-sync', 'reactify', 'vinyl-source-stream', 'browserify', 'watchify', 'classnames'],
	rename: {
		'vinyl-source-stream': 'source',
		'browser-sync': 'browserSync'
	}
});

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins, config);
}

// Sub Tasks
gulp.task('browserify', getTask('browserify'));
gulp.task('sass', getTask('sass'));
gulp.task('image', getTask('image'));
gulp.task('html', getTask('html'));

// Dev tasks
gulp.task('dev', ['html', 'sass', 'browserify']);
gulp.task('default', ['dev'], getTask('default'));
