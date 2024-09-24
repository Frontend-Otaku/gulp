import { dest, src } from "gulp";
import fileinclude from "gulp-file-include";
import gulpIf from "gulp-if";
import htmlmin from "gulp-htmlmin";

import { path } from "../config/path.js";
import { isProduction } from "../../gulpfile.js";

export const processHtml = () => {
	return src(path.html.src)
		.pipe(
			fileinclude({
				prefix: "@@",
				basepath: "@file",
			})
		)
		.pipe(
			gulpIf(
				isProduction,
				htmlmin({
					collapseWhitespace: true,
					removeComments: true,
				})
			)
		)
		.pipe(dest(path.html.dist));
};
