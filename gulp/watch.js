import gulp from 'gulp';
import {sassPaths,htmlPaths,reload} from './const';
import buildScripts from './buildScripts.js';
export default() => {

  gulp.watch([sassPaths.src+'/*.scss'],['styles']);

  gulp.watch([htmlPaths.mainFile], ['htmls']);

  return buildScripts();
}