import { series, watch } from "gulp";
import { path } from "../config/path.js";
import { copy } from "./copy.js";
import { reload } from "./server.js";
import { processHtml } from "./html.js";
import { processStyles } from "./styles.js";

export const watchFiles = () => {
	watch(path.assets.src, series(copy, reload));
	watch(path.html.watch, series(processHtml, reload));
	watch(path.scss.watch, series(processStyles, reload));
};
