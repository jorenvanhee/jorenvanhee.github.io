var gutil = require('gulp-util');

var config = {

    production: !! gutil.env.production,

    sourcemaps: ! gutil.env.production,

    sass: {

        sass: {
            options: {
                precision: 7,
                outputStyle: 'expanded',
                importer: require('sass-module-importer')()
            }
        },

        autoprefixer: {
            options: {
                browsers: ['IE >= 9', '> 1%', 'last 2 versions', 'Firefox ESR']
            }
        },

        cssnano: {}

    }

};

module.exports = config;