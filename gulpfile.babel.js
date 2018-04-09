'use strict';

import gulp from 'gulp';
import buildStyles from './gulp/buildStyles';
import browserSyncServe from './gulp/browserSyncServe';
import watch from './gulp/watch';

gulp.task('styles',buildStyles);

gulp.task('browserSync',['assets'],browserSyncServe);

gulp.task('assets',[
  'styles',
]);

gulp.task('watch',['browserSync'],watch);
