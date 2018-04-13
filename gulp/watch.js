import gulp from 'gulp';
import {sassPaths} from './const';
import buildScripts from './buildScripts.js';
export default() => {
  gulp.watch([sassPaths.src+'/*.scss'],['styles']);
  return buildScripts();
}