import type { Configuration } from 'webpack-dev-server';

function buildDevServer(port: number): Configuration {
    return {
        port: port,
        open: true,
    };
}
export default buildDevServer;
