const {series, src, dest, watch} = require('gulp');
//El plugin gulp-sass no tiene mas compilador por defecto
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css(){
    return src(paths.scss)
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function comprimirCss(){
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
        .pipe(notify({message:'CSS Comprimido'}))
}

function expandCss(){
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
        .pipe(notify({message:'CSS Expandido'}))
}

function javascript(){
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function imagen(){
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img/'))
        .pipe(notify({message:'Imagen Minificada'}))
}

function versionWebp(){
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img/'))
        .pipe(notify({message:'Imagen a Webp'}))
}

function watchArchivos(){
    watch(paths.scss, css);
    watch(paths.js, javascript);
}



exports.css = css;
exports.comprimircss = comprimirCss;
exports.expandcss = expandCss;
exports.javascript = javascript;
exports.imagen = imagen;
exports.webp = versionWebp;
exports.watch = watchArchivos;

exports.default = series(css, javascript, imagen, versionWebp, watchArchivos);