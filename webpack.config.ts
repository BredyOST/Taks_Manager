import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import {
    BuildEnv,
    BuildMode,
    BuildPath,
    PORT,
} from './config/build/types/config';
import path from 'path';

export default (env: BuildEnv) => {
    const paths: BuildPath = {
        entry: './src/main.tsx',
        build: path.resolve(__dirname, 'dist'),
        html: './src/index.html',
    };
    const buildMod: BuildMode = env.mode || 'development';
    const PORT = +env.mode || 3000;
    const isDev = buildMod === 'development';

    const config: webpack.Configuration = buildWebpackConfig({
        mode: buildMod,
        paths,
        port: PORT,
        isDev,
    });

    return config;
};
