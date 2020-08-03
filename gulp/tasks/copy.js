module.exports = function () {
  $.gulp.task('copy', function () {
    return $.gulp.src([
        'fonts/**/*',
        'css/**/*',
        'img/**',
        '*.html'
    ], {
      base: '.'
    })
        .pipe($.gulp.dest('build'));
  });
};