var gulp = require('gulp'),
	del = require('del'),
	jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


var web_root = 'src/main/webapp';

gulp.task('clean', function() {
	return del(['src/main/webapp/app/ext', 'src/main/webapp/app/js/dist']);
});

gulp.task('move', function(){
	return gulp.src(['bower_components/**'])
				.pipe(gulp.dest('src/main/webapp/app/ext'));
});

gulp.task('scripts', function(){
	return gulp.src(web_root + '/app/js/controllers/*.js')
				.pipe(jshint('.jshintrc'))
				.pipe(jshint.reporter('default'))
				.pipe(concat('main.js'))
				.pipe(uglify())
				.pipe(gulp.dest(web_root + '/app/js/dist'));
});

gulp.task('watch', function() {
	gulp.watch('src/main/webapp/**/*.js', ['scripts']).on('change', function() {
		gulp.start('scripts');
	});
});

gulp.task('default', ['clean', 'move', 'scripts'], function() {
	
});

