const gulp = require('gulp');
const del = require('del');
const watch = require('gulp-watch');
const change = require('gulp-changed');
const jshint = require('gulp-jshint');
const less = require('gulp-less');
const cssMin = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;
const sourceMap = require('gulp-sourcemaps');
const image = require('gulp-image');
const ghtml = require('gulp-htmlmin');
const gheader = require('gulp-header');

const pkg = require('./package.json');

const pump = require('pump');

const jsPath = ['./src/**/*.js'];
const cssPath = ['./src/**/*.css', './src/**/*.less'];
const imgPath = ['./src/**/**/*.png', './src/**/*.png'];
const htmlPath = './src/**/*.html';
const jsonPath = './src/**/*.json';

const uglifyCfg = {
  mangle: ['define', 'module', 'exports', 'require'],
  compress: false
};

const getHeader = (opt) => {
  let tmpl = ['/**',
    ' *  @name:      <%= opt.name %>',
    ' *  @version:   <%= opt.version %>',
    ' *  @author:    <%= opt.author %>',
    ' *  @desc:      <%= opt.description %>',
    ' *  @license:   <%= opt.license %>',
    ' *  @copyright: <%= opt.copyright %>',
    ' */',
    ''
  ].join('\n');
  return gheader(tmpl, opt)
};

gulp.task('clean', function(cb) {
  del(['./dist/', './maps/', '!dist/**/imgs/**', '!dist/**/**/imgs/**'])
    .then(cb())
    .catch(err => {
      console.log(err);
    })
})

gulp.task('jsmin', ['html'], function(cb) {
  pump([
    gulp.src(jsPath),
    sourceMap.init(),
    uglify(),
    sourceMap.write('../maps', { addComment: false }),
    getHeader({ opt: pkg }),
    gulp.dest('./dist')
  ], cb);
})

gulp.task('cssmin', ['html'], function(cb) {
  pump([
    gulp.src(cssPath),
    sourceMap.init(),
    less(),
    cssMin({ compatibility: 'ie8' }),
    sourceMap.write('../maps', { addComment: false }),
    getHeader({ opt: pkg }),
    gulp.dest('./dist')
  ], cb);
})

gulp.task('html', ['clean'], function(cb) {
  pump([
    gulp.src(htmlPath),
    ghtml({
      removeComments: true,
      collapseWhitespace: true
    }),
    getHeader({ opt: pkg }),
    gulp.dest('./dist')
  ], cb);
})
gulp.task('json', ['html'], function(cb) {
  pump([
    gulp.src(jsonPath),
    ghtml({
      removeComments: true,
      collapseWhitespace: true
    }),
    getHeader({ opt: pkg }),
    gulp.dest('./dist')
  ], cb);
})

gulp.task('image', function(cb) {
  pump([
    gulp.src(imgPath),
    image(),
    gulp.dest('./dist')
  ], cb);
})

gulp.task('default', ['json', 'cssmin', 'jsmin'], function() {
  console.log('complete')
});
