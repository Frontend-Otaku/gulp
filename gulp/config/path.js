import { src } from "gulp";
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
	html: {
		src: `${srcFolder}/html/pages/*.html`,
		watch: `${srcFolder}/html/**/*.html`,
		dist: `${distFolder}`,
	},
	scss: {
		src: `${srcFolder}/scss/main.scss`,
		watch: `${srcFolder}/scss/**/*.scss`,
		dist: `${distFolder}/css/`,
	},
};
