    var settings = require('./gulp.server.json');

    var gulp = require('gulp');
    var sftp = require('gulp-sftp');
    
    gulp.task('deploy', function () {
        return gulp.src('dist/**').pipe(sftp(settings));
    });