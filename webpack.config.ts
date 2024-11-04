import { type BuildEnv, BuildMode, type BuildOptions, type BuildPath } from './config/webpack/types/type';
import type webpack from 'webpack';
import * as path from 'path';
import { getWebpackConfig } from './config/webpack/getWebpackConfig';

export default (env: BuildEnv): webpack.Configuration => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src')
  };
  const isDev = env.mode == BuildMode.DEVELOPMENT;
  const apiUrl = isDev ? 'http://localhost:3000/' : 'https://1c-server.vercel.app';

  const options: BuildOptions = {
    paths,
    mode: env.mode,
    port: env.port ?? 3030,
    isDev,
    apiUrl,
    title: 'ComplexProject'
  };

  const config = getWebpackConfig(options);
  return config;
};
