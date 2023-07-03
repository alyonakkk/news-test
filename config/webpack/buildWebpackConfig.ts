import type webpack from "webpack";

import devServer from "./devServer";
import loaders from "./loaders";
import plugins from "./plugins";
import resolvers from "./resolvers";
import { IBuildOptions } from "./types";

function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[hash].js",
            path: paths.build,
            clean: true
        },
        plugins: plugins(options),
        module: {
            rules: loaders(options)
        },
        resolve: resolvers(options),
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? devServer(options) : undefined
    };
}

export default buildWebpackConfig;
