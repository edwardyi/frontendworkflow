const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoPrefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemap');

const styleSrc = './src/scss/*.scss';
const styleDis = './dist/css';
const styleWatch = './src/scss/**/*.scss';

const jsSrc = './src/js/*.js';
const jsDis = './dist/js';
const jsWatch = './src/js/**/*.js';


gulp.task('sass', ()=>{
    gulp.src(styleSrc)
        .pipe(sass({
            errorLogToConsole:true,
            outputStyle:'compressed'
        })).
        on('error', console.error.bind(console))
        .pipe(autoPrefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            suffix:'.min'
        }))
        .pipe(gulp.dest(styleDis))
})

gulp.task('js', ()=>{
    gulp.src(jsSrc)
        .pipe(gulp.dest(jsDis))
})

gulp.task('default', ['sass','js'])

gulp.task('watch', ['default'], ()=>{
    gulp.watch(styleWatch, ['sass'])
    gulp.watch(jsWatch, ['js'])
})