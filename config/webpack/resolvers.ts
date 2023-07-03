import type webpack from "webpack";

import { IBuildOptions } from "./types";

function resolvers({ paths }: IBuildOptions): webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        alias: {
            "@": paths.src
        }
    };
}

export default resolvers;
