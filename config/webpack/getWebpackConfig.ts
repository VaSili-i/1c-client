import { type BuildOptions } from './types/type';
import type webpack from 'webpack';
import { getPlugins } from './getPlugins';
import { getLoaders } from './getLoaders';
import { getResolvers } from './getResolvers';
import { getDevServer } from './getDevServer';

export function getWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths, port, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    plugins: getPlugins(options),
    module: {
      rules: getLoaders(isDev)
    },
    resolve: getResolvers(paths.src),
    devtool: isDev ? 'eval-cheap-source-map' : undefined,
    devServer: isDev ? getDevServer(port) : undefined
  };
}
