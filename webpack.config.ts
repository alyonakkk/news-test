import path from "path";
import type webpack from "webpack";

import buildWebpackConfig from "./config/webpack/buildWebpackConfig";
import { IEnvConfig } from "./config/webpack/types";

export default (env: IEnvConfig): webpack.Configuration => {
    return buildWebpackConfig({
        mode: env.NODE_ENV ?? "development",
        paths: {
            entry: path.resolve(__dirname, "src", "index.tsx"),
            html: path.resolve(__dirname, "public", "index.html"),
            favicon: path.resolve(__dirname, "public", "favicon.ico"),
            build: path.resolve(__dirname, "build"),
            src: path.resolve(__dirname, "src")
        },
        isDev: env.NODE_ENV === "development",
        port: +env.PORT ?? 3000
    });
};
