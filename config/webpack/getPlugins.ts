import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { type BuildOptions } from './types/type';

export function getPlugins({
  paths,
  isDev,
  title,
  apiUrl
}: BuildOptions): webpack.WebpackPluginInstance[] {
  // для работы с HTML
  const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: paths.html,
    title,
    scriptLoading: 'blocking'
  });

  // // для анализа размера бандлов
  // const webpackBundleAnalyzer = new BundleAnalyzerPlugin();

  // для очистки выходной директории перед сборкой
  /* const cleanWebpackPlugin = new CleanWebpackPlugin(); */

  // для сжатия файлов в формат gzip
  // const compressionPlugin = new CompressionPlugin({
  //   algorithm: 'gzip',
  //   test: /\.(js|css|html|svg)$/,
  //   threshold: 10240,
  //   minRatio: 0.8,
  // });

  const definePlugin = new webpack.DefinePlugin({
    __IS_DEV__: JSON.stringify(isDev),
    __API__: JSON.stringify(apiUrl)
  });

  const plugins = [htmlWebpackPlugin, new webpack.ProgressPlugin(), definePlugin];

  if (isDev) {
    // plugins.push(new ReactRefreshPlugin());
    // plugins.push(new webpack.HotModuleReplacementPlugin());
    // plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false }));
  } else {
    // для извлечения CSS в отдельные файлы
    const miniCssExtractPlugin = new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    });

    plugins.push(miniCssExtractPlugin);
  }

  return plugins;
}
