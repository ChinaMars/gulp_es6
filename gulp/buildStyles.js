import gulp from 'gulp';
import sass from 'gulp-sass';
import {sassPaths,$} from './const';

export default () => {
  return gulp.src(sassPaths.mainFile)
    // 运行gulp sass
    .pipe($.sass().on('error', sass.logError))

    // 添加浏览器前缀写法
    .pipe($.autoprefixer({
      browsers: ['last 50 versions'],
      cascade: false
    }))

    .pipe(gulp.dest(sassPaths.dest))
}

