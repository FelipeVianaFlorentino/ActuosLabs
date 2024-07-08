import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';

const sass = gulpSass(dartSass);

// Tarefa para compilar SCSS para CSS
gulp.task('styles', function() {
  return gulp.src('src/scss/**/*.scss') // Seleciona todos os arquivos SCSS
    .pipe(sass().on('error', sass.logError)) // Compila SCSS para CSS e loga erros
    .pipe(autoprefixer()) // Adiciona prefixos CSS automaticamente
    .pipe(cleanCSS()) // Minifica o CSS
    .pipe(gulp.dest('src/css')); // Salva o CSS compilado em src/css
});

// Tarefa para assistir mudanças nos arquivos SCSS
gulp.task('watch', function() {
  gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
});

// Tarefa padrão que compila estilos e depois assiste por mudanças
gulp.task('default', gulp.series('styles', 'watch'));
