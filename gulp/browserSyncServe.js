import {browserSync} from './const';

export default () => {
  browserSync.init({
    open: true, //是否自动打开浏览器
    server: {
      baseDir: './assets/',
      index: 'index.html'
    }
  })
}