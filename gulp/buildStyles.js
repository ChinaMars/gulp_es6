import gulp from 'gulp';
import sass from 'gulp-sass';
import {sassPaths,$} from './const';

export default () => {
  return gulp.src(sassPaths.mainFile)
    .pipe($.sass().on('error', sass.logError))
    .pipe(gulp.dest(sassPaths.dest))
}

