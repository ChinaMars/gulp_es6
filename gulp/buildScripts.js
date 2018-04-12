import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import babelify from 'babelify';
import merge from 'merge-stream';
import glob from 'glob';
import path from 'path';
import {jsPaths} from './const';

export default () => {
  let files = glob.sync(jsPaths.mainFile);

  return merge(files.map(function(file) {
    return browserify({
      entries: file,
      debug: true
    })
    .transform("babelify", {presets: ["es2015"]})
    .bundle()
    .pipe(source(path.basename(file, '.js') + ".js"))
    .pipe(gulp.dest(jsPaths.dest))
  }));

}