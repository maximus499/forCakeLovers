var gulp = require("gulp");
var livereload = require('gulp-livereload');

//Directory configuration
//You can add any new path at any part of the array
//folder/*.extension

var directories = ["./*.html", "./*.app.js", "./*.style.css"];

gulp.task('default', [], function() {
    livereload.listen();
    gulp.watch(directories, function(){
        gulp.src(directories).pipe(livereload());
    });
});