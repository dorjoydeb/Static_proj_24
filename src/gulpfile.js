const gulp					= require("gulp");
const sass          = require("gulp-sass");
const sourceMaps		= require("gulp-sourcemaps");
const beep          = require("beepbeep");
const rename        = require("gulp-rename");
const postCSS				= require("gulp-postcss");
const autoprefixer	= require("autoprefixer");
const beautify 			= require("gulp-jsbeautifier");

/**
 * ------------------------------------------------------------------------
 * Main SCSS
 * ------------------------------------------------------------------------
 */

function mainSCSS() {
	return gulp
		.src(["./scss/**/*.scss"])
		.pipe(sourceMaps.init())
		.pipe(sass({outputStyle: "expanded"}).on("error", sass.logError, beep).on("error", beep))
		.pipe(postCSS([
			autoprefixer(),
		]))
		.pipe(sourceMaps.write("."))
		.pipe(gulp.dest("../site/assets/css/"))
}

/**
 * ------------------------------------------------------------------------
 * Minify CSS
 * ------------------------------------------------------------------------
 */

function minifyCSS() {
	return gulp
		.src("../site/assets/css/style.css")
		.pipe(rename({suffix: ".min"}))
		.pipe(sass({outputStyle: "compressed"}))
		.pipe(gulp.dest("../site/assets/css/"));
}

/**
 * ------------------------------------------------------------------------
 * Beautify HTML
 * ------------------------------------------------------------------------
 */

function beautifyHTML() {
	return gulp
		.src(["../site/**/*.html"])
		.pipe(
			beautify({
				indent_char: " ",
				indent_size: 2,
				end_with_newline: true,
				max_preserve_newlines: 1,
			})
		)
		.pipe(gulp.dest("../site/"))
}

/**
 * ------------------------------------------------------------------------
 * Watch
 * ------------------------------------------------------------------------
 */

function watch(){
	gulp.watch(["./scss/**/*.scss"], mainSCSS, minifyCSS);
}

/**
 * ------------------------------------------------------------------------
 * Run
 * ------------------------------------------------------------------------
 */

exports.default = gulp.series(
	gulp.series(mainSCSS, minifyCSS),
	watch
);

exports.build = gulp.series(mainSCSS, minifyCSS, beautifyHTML);