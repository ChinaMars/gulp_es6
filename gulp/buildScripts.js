import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import babelify from 'babelify';
import merge from 'merge-stream';
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
    };

    let b = browserify(props);

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