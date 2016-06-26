var gulp = require('gulp'),
    livereload = require('gulp-livereload');

gulp.task('sass', require('./gulp/tasks/sass')(
    '_assets/scss/app.scss',
    'assets/css'
));

gulp.task('build', ['sass']);

gulp.task('watch', function () {
    gulp.watch('_assets/scss/**/*.scss', ['sass']);

    livereload.listen();
    gulp.watch([
        '_site/assets/css/**/*.css',
    ], function (file) {
        livereload.changed(file.path);
    });
});

gulp.task('default', ['watch']);