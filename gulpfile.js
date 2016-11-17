var gulp = require('gulp'),
    // util = require('gulp-util'),
    sass = require('gulp-sass'),
    path = require('path'),
    pug =  require('gulp-pug'),
    browserSync = require('browser-sync'),
    rename = require("gulp-rename"),
    environments = require('gulp-environments'),
    // Production
    cleanCSS = require('gulp-clean-css');

//var development = environments.development;
var production = environments.production;


gulp.task('sass', () => {
    return gulp.src('./src/scss/*.scss')
        .pipe(sass({
            includePaths: [
                './node_modules/bourbon/app/assets/stylesheets/',
                './node_modules/materialize-css/sass/'
            ],
            style: 'uncompressed',
            quiet: true
        }).on('error', sass.logError))
        .pipe(production(cleanCSS()))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.stream());
});

gulp.task('scripts', () => {
    return gulp.src(['./src/js/*.js'])
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('html', () => {
    return gulp.src(['./src/pug/*.pug'])
        .pipe(pug({
            // Your options in here.
        }))
        .pipe(gulp.dest('dist/'));

});



gulp.task('serve', ['sass','scripts','html'], () => {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
    gulp.watch('./src/scss/*.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/pug/*.pug', ['html']);
    gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
    gulp.watch('./dist/**/*.html').on('change', browserSync.reload);
});


gulp.task('default', ['serve']);

