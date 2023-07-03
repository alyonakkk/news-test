export type TModeOption = "development" | "production";

export interface IPathsOption {
    entry: string;
    html: string;
    favicon: string;
    build: string;
    src: string;
}

export interface IBuildOptions {
    mode: TModeOption;
    paths: IPathsOption;
    isDev: boolean;
    port: number;
}

export interface IEnvConfig {
    NODE_ENV: TModeOption;
    PORT: string;
}
