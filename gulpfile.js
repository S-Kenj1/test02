global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  bs: require('browser-sync').create(),
  path:{
    tasksMod: require('./gulp/config/tasks'),
    serverDir: './apps/dist',
    src: {
      html:   './apps/src/*.{html,pug}',
      style:  './apps/src/sass/*.{sass,scss,css}',
      script: './apps/src/js/*.js',
      images: './apps/src/images/**/*.{jpg,png,svg,gif,bmp}',
      fonts:  './apps/src/fonts/**/*.{ttf,eot,woff,woff2}',
    },
    watch: {
      html:   ['./apps/src/*.{html,pug}', './apps/src/view/**/*.{html,pug}'],
      style:  './apps/src/sass/**/*.{sass,scss,css}',
      script: './apps/src/js/**/*.js',
      images: './apps/src/images/**/*.{jpg,png,svg,gif,bmp}',
      fonts:  './apps/src/fonts/**/*.{ttf,eot,woff,woff2}',
    },
    dist: {
      html:   './apps/dist/',
      style:  './apps/dist/css/',
      script: './apps/dist/js/',
      images: './apps/dist/images/',
      fonts:  './apps/dist/fonts/',
    }
  }
}
console.log($.gp);
$.path.tasksMod.forEach(pathTask => require(pathTask)());
$.gulp.task('default', $.gulp.series($.gulp.parallel('html','style','server','watch','script','fonts','images')))