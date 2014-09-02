var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

// 所有上线前任务：执行一次
gulp.task('once', ['lint', 'minifycss', 'scripts']);

// 所有上线前任务：实时监听
gulp.task('watchall', function(){
    gulp.run('lint', 'minifycss', 'scripts');

    // 监听js文件变化
    gulp.watch('./www/js/icyl/*.js', function(){
        gulp.run('lint', 'scripts');
    });

    // 监听css文件变化
    gulp.watch('./www/css/app.css', function(){
        gulp.run('minifycss');
    });
});

// 检查脚本
gulp.task('lint', function() {
    gulp.src('./www/js/icyl/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// 合并，压缩文件
gulp.task('scripts', function() {
    gulp.src('./www/js/icyl/*.js')
        .pipe(concat('icyl.js'))
        .pipe(gulp.dest('./www/js/icyl/dist/'))
        .pipe(rename('icyl.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./www/js/icyl/dist/'));
});

//压缩CSS
gulp.task('minifycss', function(done) {
  gulp.src('./www/css/app.css')
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
