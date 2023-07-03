import type { Configuration } from "webpack-dev-server";

import { IBuildOptions } from "./types";

function devServer({ port }: IBuildOptions): Configuration {
    return {
        port,
        open: true,
        historyApiFallback: true,
        hot: true
    };
}

export default devServer;
