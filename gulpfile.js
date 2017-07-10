gulp.task('build-js', function() {
  // build javascript files
  return gulp.src('src/*{js,jsx}')
    .pipe(react())
    .pipe(gulp.dest('dist'));
});
