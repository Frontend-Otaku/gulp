import { dest, src } from "gulp";
import { path } from "../config/path.js";

export const copy = () => {
	return src(path.assets.src).pipe(dest(path.assets.dist));
};
