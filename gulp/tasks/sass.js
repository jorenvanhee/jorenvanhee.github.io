var gulp = require('gulp'),
    sass = require('gulp-sass'),
    gif = require('gulp-if')
    cssnano = require('gulp-cssnano')
    autoprefixer = require('gulp-autoprefixer')
    sourcemaps = require('gulp-sourcemaps')
    config = require('../Config')
    Notification = require('../Notification');

module.exports = function (inputFiles, outputDir) {
    return function () {
        return gulp.src(inputFiles)
            .pipe(gif(config.sourcemaps, sourcemaps.init()))
            .pipe(sass(config.sass.sass.options))
            .on('error', function (e) {
                new Notification().error(e, 'Sass Compilation Failed');
                this.emit('end');
            })
            .pipe(autoprefixer(config.sass.autoprefixer.options))
            .pipe(gif(config.production, cssnano(config.sass.cssnano.options)))
            .pipe(gif(config.sourcemaps, sourcemaps.write('.')))
            .pipe(gulp.dest(outputDir));
    };
};