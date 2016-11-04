var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('styles', function() {
    gulp.src('src/css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['> 5%']
        }))
        .pipe(gulp.dest('./src/css/static/'));

    // gulp.src('src/css/static/main.css')
    //     .pipe(autoprefixer({
    //         browsers: ['last 2 versions']
    //     }));
});

// gulp.task('default', () =>
//     gulp.src('src/css/static/main.css')
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions']
//         }))
//         //.pipe(gulp.dest('dist'))
// );