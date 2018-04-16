import gulp from 'gulp';
import browserify from 'browserify'; //供浏览器环境使用的模块打包工具
import source from 'vinyl-source-stream'; //用于将browserify的bundle()的输出转换为gulp可用的vinyl（一种虚拟文件格式）流
import buffer from 'vinyl-buffer'; //用于将vinyl流转化为buffered vinyl文件（gulp-sourcemaps及大部分Gulp插件都需要这种格式）
import babelify from 'babelify';
import merge from 'merge-stream'; //将多个stream合成一个
import glob from 'glob';
import watchify from 'watchify';
import path from 'path';
import { jsPaths, $, reload } from './const'

export default () => {
  let files = glob.sync(jsPaths.mainFile);

  return merge(files.map(function(file) {
    let props = {
      entries: file,
      debug: true,
      plugin: [watchify],
      transform: [babelify.configure({presets: ["es2015"]})]
    };//browserify配置

    let b = browserify(props); //开始browserify

    function rebundle () {
      let stream = b.bundle();
      return stream
        .pipe(source(path.basename(file, '.js') + ".js"))
        .pipe(gulp.dest(jsPaths.dest))
        .pipe(buffer())
        .pipe($.sourcemaps.init({loadMaps: true}))
        .pipe($.uglify())
        .pipe($.rename({
          suffix: ".min"
        }))
        .pipe($.sourcemaps.write('./'))
        .pipe(gulp.dest(jsPaths.dest))
        .pipe(reload({stream:true}));
    }

    b.on('update', function () {
      rebundle();
    })

    return rebundle();

  }));

}