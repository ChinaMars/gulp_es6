'use strict';

import gulp from 'gulp';
import buildStyles from './gulp/buildStyles';
import buildScripts from './gulp/buildScripts';
import browserSyncServe from './gulp/browserSyncServe';
import watch from './gulp/watch';

gulp.task('styles',buildStyles);

gulp.task('scripts',buildScripts);

gulp.task('browserSync',['assets'],browserSyncServe);

gulp.task('assets',[
  'styles',
  'scripts'
]);

gulp.task('watch',['assets','browserSync'],watch);
