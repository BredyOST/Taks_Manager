import { BuildOptions } from './types/config';
import webpack from 'webpack';
import buildPlugins from './buildPlugins';
import buildLoaders from './builLoaders';
import buildResolvers from './buildResolvers';
import buildDevServer from './buildDevServer';

export function buildWebpackConfig({
    paths,
    mode,
    port,
    isDev,
}: BuildOptions): webpack.Configuration {
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            path: paths.build,
            filename: '[name].[contenthash].js',
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(port) : undefined,
    };
}
