import gulp from 'gulp';
import {sassPaths} from './const';
export default() => {
  gulp.watch([sassPaths.src],['styles'])
}