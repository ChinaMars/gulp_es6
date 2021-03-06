import gulp from 'gulp';
import { htmlPaths, $, reload} from './const'

export default () => {
  return gulp.src(htmlPaths.mainFile)
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(htmlPaths.dest))
    .pipe(reload({stream:true}))
    .pipe(gulp.dest(htmlPaths.dest))
}