/*主目录修改和生成的路径*/
export const dirs = {
  src: 'src', //主目录路径
  dest: 'www' //编译生成的路径
}
/* css文件修改和生成的路径 */
export const sassPaths = {
  src: `${dirs.src}/**/*.scss`, //主目录下css文件的路径
  mainFile: `${dirs.src}/theme/styles.scss`, //引入所有css的文件
  dest: `${dirs.dest}/css/` //编译生成css文件的路径
}

/* 管理gulp模块 */
export const $ = require('gulp-load-plugins')();

/* Browsersync模块 */
export const browserSync = require('browser-sync').create();
export const reload = browserSync.reload;