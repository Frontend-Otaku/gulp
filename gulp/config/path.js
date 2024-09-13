import { resolve } from "path";

// Основные пути
const rootFolder = resolve();
const srcFolder = "./src";
const distFolder = "./dist";

export const path = {
	root: rootFolder,
	src: srcFolder,
	dist: distFolder,
	assets: {
		src: `${srcFolder}/assets/**/*.*`,
		dist: `${distFolder}/assets/`,
	},
};
