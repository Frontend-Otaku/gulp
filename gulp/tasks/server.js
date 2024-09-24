import browserSync from "browser-sync";
import { path } from "../config/path.js";

const server = browserSync.create();

export const startServer = done => {
	server.init({
		server: {
			baseDir: path.dist,
		},
		notify: false,
		port: 3001,
	});

	done();
};

export const reload = () => {
	server.reload();
};
