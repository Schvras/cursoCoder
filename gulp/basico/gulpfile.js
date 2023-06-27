const gulp = require('gulp')
const { series , parallel} = require('gulp')

function inicio(cb){


    return cb()
}

function meio(cb){


    return cb()
}

function copiar(cb){
    // gulp.src('imagns/*.png')
    //     .pipe(reduzirTamanho())
    //     .pipe(normalizarNome());

    // gulp.src('pastaA/**/*.txt')
    //     .pipe(gulp.dest('pastaB'));

    gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))

    return cb()
}

function fim(cb){


    return cb()
}

module.exports.default = series(
    parallel(inicio,meio),
    copiar,
    fim
)

