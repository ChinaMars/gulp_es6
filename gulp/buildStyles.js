import gulp from 'gulp';
import {sassPaths,$,reload} from './const';

export default () => {
  return gulp.src(sassPaths.mainFile)
    //开始sourcemaps
    .pipe($.sourcemaps.init())

    //运行gulp sass
    .pipe($.sass.sync().on('error', $.sass.logError))

    //添加浏览器前缀写法
    .pipe($.autoprefixer({
      browsers: ['last 50 versions'],
      cascade: false
    }))
    //保存没有压缩过的css文件
    .pipe(gulp.dest(sassPaths.dest))

    //css发生变化时发送给Browser-sync实现更新
    .pipe(reload({stream:true}))

    //压缩css文件
    .pipe($.cssnano())

    //重命名css文件
    .pipe($.rename({
      suffix: ".min"
    }))

    //保存 sourcemap
    .pipe($.sourcemaps.write('./'))

    //保存压缩后的css文件
    .pipe(gulp.dest(sassPaths.dest));
}

