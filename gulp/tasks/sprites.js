var gulp = require('gulp');
var svgSprite = require('gulp-svg-sprite');
var rename = require('gulp-rename');
var del = require('del');

var config = {
  mode: {
    transform: [],
    css: {
        sprite: 'sprite',
      render: {
        css: {
          template: './gulp/templates/sprite.css'

        }
      }
    }
  }
}

gulp.task('beginClean', function(){
  return del(['./app/temp/sprite', './app/assets/images/sprites']);
});

gulp.task('createSprite', ['beginClean'], function() {
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite/'));
});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/**/*.svg')
    .pipe(gulp.dest('./app/assets/images/sprites'))
});

gulp.task('copySpriteCSS', ['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/*.css')
    .pipe(rename('_sprite.css'))
    .pipe(gulp.dest('./app/assets/styles/modules'));
})

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){
  return del('./app/temp/sprite');
});

gulp.task('icons',  ['beginClean', 'createSprite', 'copySpriteGraphic', 'copySpriteCSS', 'endClean']);

// var gulp = require('gulp');
//     svgSprite = require('gulp-svg-sprite');
//
// var config = {
//   mode: {
//     css: {
//       render: {
//         // css: true
//         template: './gulp/templates/sprite.css'
//       }
//     }
//   }
// }
//
//   gulp.task('createSprite', function(){
//     return gulp.src('./app/assets/images/icons/**/*.svg')
//       .pipe(svgSprite(config))
//       .pipe(gulp.dest('./app/temp/sprite/'));
//   });

//   var gulp = require('gulp'),
//     svgSprite = require('gulp-svg-sprite'),
//
//     // Basic configuration example
//     config = {
//       mode: {
//         css: { // Activate the «css» mode
//           render: {
//             css: {
//               template: './gulp/templates/sprite.css'
//             }
//           }
//         }
//       }
//     };
//
// gulp.task('createSprite', function(){
//   return gulp.src('./app/assets/images/icons/**/*.svg')
//     .pipe(svgSprite(config))
//     .pipe(gulp.dest('./app/temp/sprite/'));
// });
