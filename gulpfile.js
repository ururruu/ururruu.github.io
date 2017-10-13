var gulp = require('gulp'), //Подключаем Gulp
    sass = require('gulp-sass'), //Подключаем Sass пакет
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {  //Создаём таск "sass"
  return gulp.src(['src/app/app.component.scss']) //Берем источник
    .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError)) //Преобразуем Sass в css
    .pipe(autoprefixer())
    .pipe(gulp.dest('src/app/')); //Выгружаем результат в папку
});

gulp.task('watch', function() {
  gulp.watch(['src/app/app.component.scss'], ['sass']); // Наблюдение за sass файлами в папке
});

gulp.task('default', ['watch']);
