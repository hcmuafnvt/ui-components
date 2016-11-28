var less = require('gulp-less');

module.exports = function(gulp) {    
    gulp.task('less:parallax1', function() {
        gulp.src(['./less/parallax1.less'])            
            .pipe(less())                    
            .pipe(gulp.dest('./public/css'));
    });
};