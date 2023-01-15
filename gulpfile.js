const {series, src, dest, watch} = require('gulp');
//El plugin gulp-sass no tiene mas compilador por defecto
const sass = require('gulp-sass')(require('sass'));


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
}

function expandCss(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}

function watchArchivos(){
    watch('src/scss/**/*.scss', css)
}



exports.css = css;
exports.comprimircss = comprimirCss;
exports.expandcss = expandCss;
exports.watch = watchArchivos;