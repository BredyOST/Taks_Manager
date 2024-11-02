import {BuildOptions} from "./types/config";
import  type {Configuration} from 'webpack-dev-server'

function buildDevServer(port:number):Configuration {
    console.log(port)
    return {
        port: port,
        open: true
    }
}
export default buildDevServer;