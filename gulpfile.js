const gulp = require("gulp"),
  pug = require("gulp-pug"),
  sass = require("gulp-sass")(require("sass")),
  connect = require("gulp-connect"),
  imagemin = require("gulp-imagemin"),
  minify = require("gulp-minify"),
  sourcemaps = require("gulp-sourcemaps"),
  concat = require("gulp-concat"),
  prefix = require("gulp-autoprefixer"),
  notify = require("gulp-notify"),
  zip = require("gulp-zip");

function connectServer(cb) {
  cb();
  return connect.server({
    root: "dist/",
    livereload: true,
  });
}

function convertPug(cb) {
  cb();
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
}

function convertScss(cb) {
  // the path
  cb();
  return gulp
    .src("stage/css/**/*.scss", "stage/css/**/*.css")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(prefix())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
}

function convertJs(cb) {
  cb();
  return gulp
    .src("stage/js/**/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js/"))
    .pipe(connect.reload());
}

function watching(cb) {
  cb();
  gulp.watch("stage/html/**/*.pug", convertPug);
  gulp.watch("stage/css/**/*.scss", convertScss);
  gulp.watch("stage/js/**/*.js", convertJs);
}

exports.default = gulp.parallel(connectServer, watching);
