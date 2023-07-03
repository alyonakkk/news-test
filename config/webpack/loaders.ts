import MiniCssExtractPlugin from "mini-css-extract-plugin";
import type webpack from "webpack";

import { IBuildOptions } from "./types";

function loaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
    };

    const cssLoader = {
        test: /\.css$/i,
        use: [
            MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\b(module)\b/,
                        localIdentName: isDev ? "[path][name]__[local]--[hash:base64:8]" : "[hash:base64:8]"
                    }
                }
            },
            "postcss-loader"
        ]
    };

    const fileLoader = [
        {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: "file-loader"
                }
            ]
        },
        {
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"]
        }
    ];

    return [tsLoader, ...fileLoader, cssLoader];
}

export default loaders;
