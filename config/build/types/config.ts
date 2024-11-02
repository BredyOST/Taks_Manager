export type BuildMode = 'development' | 'production';

export interface BuildPath {
    entry: string;
    build: string;
    html: string;
}

export const PORT = 3000;

export interface BuildOptions {
    mode: BuildMode;
    paths: BuildPath;
    port: number;
    isDev: boolean;
}

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}
