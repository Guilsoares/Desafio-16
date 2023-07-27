const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemap = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify')

function compilaSass(){
    return gulp.src('./source/main.scss')
    .pipe(sourcemap.init())
    .pipe(sass({
        outputStyle:"compressed"
    }))
    .pipe(sourcemap.write("maps"))
    .pipe(gulp.dest("./build"))
}

function imageminificada(){
    return gulp.src('./source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"))
}

exports.default = function(){
    gulp.watch("./source/*.scss", {ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch("./source/images/*", {ignoreInitial:false}, gulp.series(imageminificada))

}