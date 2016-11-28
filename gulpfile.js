var gulp = require('gulp');

require('load-gulp-tasks')(gulp, {
    pattern: ['gulptasks/**/*.js']
});

// copy files
gulp.task('copy', ['copyfiles']);

gulp.task('watch', function() {
    gulp.watch('./less/parallax1.less', ['less:parallax1']);
});