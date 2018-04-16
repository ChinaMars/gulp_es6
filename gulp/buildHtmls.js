import gulp from 'gulp';
import {htmlPaths,browserSync,$} from './const'

export default () => {
  return gulp.src(htmlPaths.mainFile)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlPaths.dest))
    .pipe(browserSync.stream());
}