import { dest, src } from "gulp";
import sass from "gulp-dart-sass";
import gulpIf from "gulp-if";
import sourcemaps from "gulp-sourcemaps";
import GulpPostCss from "gulp-postcss";
import autoprefixer from "autoprefixer";
import cssnanoPlugin from "cssnano";

import { isProduction } from "../../gulpfile.js";
import { path } from "../config/path.js";

export const processStyles = () => {
	return src(path.scss.src)
		.pipe(gulpIf(!isProduction, sourcemaps.init()))
		.pipe(sass())
		.pipe(GulpPostCss([autoprefixer()]))
		.pipe(gulpIf(isProduction, GulpPostCss([cssnanoPlugin()])))
		.pipe(gulpIf(!isProduction, sourcemaps.write(".")))
		.pipe(dest(path.scss.dist));
};
