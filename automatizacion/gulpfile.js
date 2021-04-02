const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', function (cb) {
    console.log('Construyendo SItio');
    setTimeout(cb, 2000);
})

gulp.task('serve', function (cb) {
    gulp.src('templates')
        .pipe(server({
            livereload: true,
            open: true
        }))
})

gulp.task('default', gulp.series('build', 'serve'));