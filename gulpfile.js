const {series, src, dest, watch} = require('gulp');
//El plugin gulp-sass no tiene mas compilador por defecto
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');


function css(){
    return src('src/scss/app.scss')
        .pipe(sass())
        .pipe(dest('./build/css'))
}

function comprimirCss(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
        .pipe(notify({message:'CSS Comprimido'}))
}

function expandCss(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
        .pipe(notify({message:'CSS Expandido'}))
}

function imagen(){
    return src('src/img/**/*')
        .pipe(imagemin())
        .pipe(dest('./build/img/'))
        .pipe(notify({message:'Imagen Minificada'}))
}

function versionWebp(){
    return src('src/img/**/*')
        .pipe(webp())
        .pipe(dest('./build/img/'))
        .pipe(notify({message:'Imagen a Webp'}))
}

function watchArchivos(){
    watch('src/scss/**/*.scss', css)
}



exports.css = css;
exports.comprimircss = comprimirCss;
exports.expandcss = expandCss;
exports.imagen = imagen;
exports.webp = versionWebp;
exports.watch = watchArchivos;

exports.default = series(css, imagen, versionWebp, watchArchivos);