import { parallel, series, task } from "gulp";
import { copy } from "./gulp/tasks/copy.js";
import { clean } from "./gulp/tasks/clean.js";

const dev = series(clean, parallel(copy));

export { dev };

task("default", dev);
