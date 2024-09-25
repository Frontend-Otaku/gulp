import { parallel, series, task } from "gulp";
import dotenv from "dotenv";

import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";
import { startServer } from "./gulp/tasks/server.js";
import { watchFiles } from "./gulp/tasks/watch.js";
import { processHtml } from "./gulp/tasks/html.js";
import { processStyles } from "./gulp/tasks/styles.js";

dotenv.config();

export const isProduction = process.env.NODE_ENV === "production";

const dev = series(
	clean,
	parallel(copy, processHtml, processStyles),
	startServer,
	watchFiles
);
const build = series(clean, parallel(copy, processHtml, processStyles));

export { dev, build };

task("default", dev);
