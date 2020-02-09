    const settings = require('./server.settings.js');

    var gulp = require('gulp');
    var sftp = require('gulp-sftp');

    gulp.task('deploy', function() {
        return gulp.src('dist/**').pipe(sftp(settings.server));
    });
