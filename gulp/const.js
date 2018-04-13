/*主目录修改和生成的路径*/
export const dirs = {
  src: 'src', //主目录路径
  dest: 'assets' //编译生成的路径
}
/* css文件修改和生成的路径 */
export const sassPaths = {
  src: `${dirs.src}/sass/`, //主目录下css文件的路径
  mainFile: `${dirs.src}/sass/styles.scss`, //引入所有css的文件
  dest: `${dirs.dest}/css/` //编译生成css文件的路径
}
/*js文件修改和生成的路径*/
export const jsPaths = {
  src: `${dirs.src}/js/`, //主目录下js文件的路径
  mainFile: `${dirs.src}/js/bundle/*.js`, //引入所有页面上的js文件
  dest: `${dirs.dest}/js/` //编译生成js文件的路径
}

/* 管理所有gulp模块 */
export const $ = require('gulp-load-plugins')();

/* Browsersync模块 */
export const browserSync = require('browser-sync').create();
export const reload = browserSync.reload;