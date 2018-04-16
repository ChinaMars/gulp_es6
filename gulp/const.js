/*主目录修改和生成的路径*/
export const dirs = {
  src: 'src', //主目录路径
  dest: 'assets' //编译生成的路径
}
/* css文件修改和生成的路径 */
export const sassPaths = {
  src: `${dirs.src}/theme/sass/`, //主目录下css文件的路径
  mainFile: `${dirs.src}/theme/sass/styles.scss`, //引入所有css的文件
  dest: `${dirs.dest}/theme/css/` //编译生成css文件的路径
}
/*js文件修改和生成的路径*/
export const jsPaths = {
  src: `${dirs.src}/theme/js/`, //主目录下js文件的路径
  mainFile: `${dirs.src}/theme/js/pages/*.js`, //引入所有页面上的js文件
  dest: `${dirs.dest}/theme/js/` //编译生成js文件的路径
}

/*html文件修改和生成的路径*/
export const htmlPaths = {
  src: `${dirs.src}/`, //主目录下html文件的路径
  mainFile: `${dirs.src}/**/*.html`, //引入所有页面上的html文件
  dest: `${dirs.dest}/` //编译生成js文件的路径
}

/* 管理所有gulp模块 */
export const $ = require('gulp-load-plugins')();

/* Browsersync模块 */
export const browserSync = require('browser-sync').create();
export const reload = browserSync.reload;