var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// watch files for changes and reload
gulp.task('serve', function() {
	browserSync({
		server: {
			baseDir: '.'
		}
	});

	gulp.watch(['*.html', 'less/**/*.less', 'js/**/*.js'], {cwd: '.'}, reload);
});


gulp.task('default', ['serve']);