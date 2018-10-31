var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var pkg = require('./package.json');
var browserSync = require('browser-sync').create();
var $ = require('jQuery');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  '\n'
].join('');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'))

  // Font Awesome 5
  gulp.src([
      './node_modules/@fortawesome/**/*'
    ])
    .pipe(gulp.dest('./vendor'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

  // jQuery Easing
  gulp.src([
      './node_modules/jquery.easing/*.js'
    ])
    .pipe(gulp.dest('./vendor/jquery-easing'))

});

// Compile SCSS
gulp.task('css:compile', function() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass.sync({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./css'))
});

// Minify CSS
gulp.task('css:minify', ['css:compile'], function() {
  return gulp.src([
      './css/*.css',
      '!./css/*.min.css'
    ])
    .pipe(cleanCSS())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

// CSS
gulp.task('css', ['css:compile', 'css:minify']);

// Minify JavaScript
gulp.task('js:minify', function() {
  return gulp.src([
      './js/*.js',
      '!./js/*.min.js'
    ])
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('./js'))
    .pipe(browserSync.stream());
});

// JS
gulp.task('js', ['js:minify']);

// Default task
gulp.task('default', ['css', 'js', 'vendor']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

// Dev task
gulp.task('dev', ['css', 'js', 'browserSync'], function() {
  gulp.watch('./scss/*.scss', ['css']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./*.html', browserSync.reload);
});


// gulp.task('jsonLists', function(){
  // $.ajax({
  //     url: "data/projects.json"
  //   }).done(projectsLists)
  //   .fail(function (error) {
  //     console.log("error", error);
  //   });

  // function projectsLists(list) {
  //   let data = list.project;
  //   data.forEach(function (item) {
  //     document.getElementById("projects").innerHTML += `<div class="col-md-3 projList">
  //           <img class="card-img-top" src="${item.img}" alt="${item.name}" data-toggle="modal" data-target="#projectList${item.id}" style="cursor:pointer;">
  //           <div class="card-body">
  //             <h4 class="card-title title-font">${item.name}</h4>
  //             <p class="card-text">${item.aboutShort}</p>
  //             <center><button type="button" class="btn btn-outline-primary title-font bottom" data-toggle="modal" data-target="#projectList${item.id}">
  //           Learn more about ➜ ${item.name}!
  //           </button></center>
  //           </div>
  //         </div>
  //         <div class="modal fade" id="projectList${item.id}" tabindex="-1" role="dialog" aria-labelledby="projectList${item.id}Label" aria-hidden="true">
  //         <div class="modal-dialog" role="document">
  //           <div class="modal-content">
  //             <div class="modal-header">
  //           <h5 class="modal-title title-font" id="projectList${item.id}Label">${item.name}</h5>
  //               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
  //                 <span aria-hidden="true">&times;</span>
  //               </button>
  //             </div>
  //             <div class="modal-body">
  //             <center><img src="${item.img}" /></center><br>
  //             ${item.aboutFull}
  //             </div>
  //                 <div class="modal-footer">
  //                     <p><button type="button" data-dismiss="modal" class="btn btn-outline-primary title-font bottom" style="margin-top:20px" aria-label="Close">
  //                         Back
  //                 </button></p>
  //             <div class="modal-footer">
  //                 <p><button type="button" data-dismiss="modal" class="btn btn-outline-primary title-font bottom" style="margin-top:20px" aria-label="Close">
  //                     Try it out ➜ ${item.link}
  //             </button></p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>`;

  //   });
  // };

  // //checks to see if url string is empty, if not, creates specified image
  // function createLink(urlString, img, mail) {
  //   let link = urlString !== '' ? `<a href="${urlString}" target= "_blank"><img src="assets/images/${img}.png"></a>` : '<!-- -->';
  //   return link
  // };

  // function createMailto(urlString, img) {
  //   let link = urlString !== '' ? `<a href="mailto:${urlString}" target="_blank"><img src="assets/images/${img}.png"></a>` : '<!-- -->'
  //   return link
  // }

  // $.ajax({
  //     url: "data/techs.json"
  //   }).done(techs)
  //   .fail(function (error) {
  //     console.log("error", error);
  //   });

  // function techs(list) {
  //   let data = list.techs;
  //   data.forEach(function (item) {
  //     document.getElementById("techs").innerHTML +=
  //       `<div class="col-sm-3 technologies">
  //         <center>
  //           <img class="techs" src="${item.image}"><br>
  //           ${item.name}
  //         </center>
  //       </div>`;

  //   });
  // };
// })
