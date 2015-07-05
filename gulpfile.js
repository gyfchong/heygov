var gulp = require('gulp');
var config = require('./gulp-tasks/config');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins({
	pattern: ['gulp-*', 'gulp.*', 'browser-sync'],
});

function getTask(task) {
    return require('./gulp-tasks/' + task)(gulp, plugins, config);
}

// Sub Tasks
gulp.task('sass', getTask('sass'));
gulp.task('javascripts', getTask('javascripts'));
gulp.task('head', getTask('head'));
gulp.task('image', getTask('image'));
gulp.task('html', getTask('html'));

// Dev tasks
gulp.task('dev', ['html', 'sass', 'javascripts', 'head']);
gulp.task('default', ['dev'], getTask('default'));
