import {browserSync} from './const';

export default () => {
  browserSync.init({
    server: {
      baseDir: './',
      index: 'index.html'
    }
  })
}