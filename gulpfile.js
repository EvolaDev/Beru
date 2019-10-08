const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const del = require("del");
const imagemin = require('gulp-imagemin');


const scssFiles = [
    "./src/scss/style.scss",
    "./src/components/**/*.scss",
    "./src/scss/media.scss"
];
const jsFiles = [
    "./src/js/lib/jquery.js",
    "./src/components/sticky_header/sticky_header.js",
    "./src/components/header/header.js",
    "./src/components/includes/includes.js",
    "./src/components/economy/economy.js",
    "./src/components/footer/footer.js",
];

const htmlFiles = [
    "./src/components/**/*.html",
    "./src/landing/landing.html",
    "./index.html"
]


//** Convert scss to css */
function scss() {
    return gulp.src(scssFiles)
        .pipe(sass())
        .pipe(concat("style.css"))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: "ie11",
            level: 2
        }))
        .pipe(gulp.dest("./dist/css"))
        .pipe(browserSync.stream());
}

//** Convert scss to css in watch-mode and sync with browser*/
function watch() {
    browserSync.init({
        port: 80,
        server: {
            baseDir: "./"
        },
        notify: false
    })
    gulp.watch(scssFiles, scss);
    gulp.watch(jsFiles, js);
    gulp.watch(jsFiles).on("change", browserSync.reload);
    gulp.watch(scssFiles).on("change", browserSync.reload);
    gulp.watch(htmlFiles).on("change", browserSync.reload);
}

/** Build js files only */
function js() {
    return gulp.src(jsFiles)
        .pipe(concat("main.js"))
        .pipe(uglify({
            mangle: {
                toplevel: false
            }
        }))
        .pipe(gulp.dest("./dist/js"))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src('./src/img/*.jpeg')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('./dist/img/head'));
}

function clean(done) {
    del["dist/*"];
    done();
}

exports.scss = scss;
exports.js = js;
exports.watch = watch;
exports.clean = clean;
exports.images = images;

gulp.task("build", gulp.series(clean, images, gulp.parallel(scss, js)));
gulp.task("dev", gulp.series("build", watch));
