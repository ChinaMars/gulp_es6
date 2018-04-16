import gulp from 'gulp';
import {htmlPaths,$} from './const'

export default () => {
  return gulp.src(htmlPaths.mainFile)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlPaths.dest));
}