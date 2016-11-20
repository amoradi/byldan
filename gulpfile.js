var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const jade = require('gulp-jade');

gulp.task('styles', function() {
    gulp.src('src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%']
        }))
        .pipe(gulp.dest('./dist/css/static/'));
});

gulp.task('jade', function() {
    gulp.src('./src/**/**/*.jade')

    gulp.src('./src/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
})

gulp.task('watch', function() {
    gulp.watch('./src/**/*.jade', ['jade']);
    gulp.watch('./src/**/**/*.jade', ['jade']);
    gulp.watch('./src/css/*.scss', ['styles']);
    gulp.watch('./src/css/**/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'jade', 'watch']);