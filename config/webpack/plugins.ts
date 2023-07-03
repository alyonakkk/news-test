import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

import { IBuildOptions } from "./types";

function plugins({ isDev, paths }: IBuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
            favicon: paths.favicon
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css",
            chunkFilename: "css/[name].[hash].css"
        })
    ];

    if (isDev) plugins.push(new webpack.HotModuleReplacementPlugin());

    return plugins;
}

export default plugins;
