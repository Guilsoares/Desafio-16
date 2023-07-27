const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemap = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate')

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

function compilaJS(){
    return gulp.src('./source/script/*.js')
    .pipe(uglify())
    .pipe(obfuscate())
    .pipe(gulp.dest('./build/script'))
}

exports.default = function(){
    gulp.watch("./source/*.scss", {ignoreInitial:false}, gulp.series(compilaSass))
    gulp.watch("./source/images/*", {ignoreInitial:false}, gulp.series(imageminificada))
    gulp.watch("./source/script/*", {ignoreInitial:false}, gulp.series(compilaJS))

}