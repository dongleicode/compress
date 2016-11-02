var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var concat = require('gulp-concat');
var spritesmith = require('gulp.spritesmith');

gulp.task('default', function () {
  var spriteData = gulp.src('src/images/sprites/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
  }));

  var imgStream = spriteData.img
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest('build/images/sprites/'));

  var cssStream = spriteData.css
    .pipe(gulp.dest('src/css/'));

  return merge(imgStream, cssStream);
});

gulp.task('minifyCSS', function () {
  return gulp.src('src/css/*.css')
    .pipe(csso())
    .pipe(concat('app.css'))
    .pipe(gulp.dest('build/css/'));
});