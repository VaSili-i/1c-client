import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function getLoaders(isDev: boolean): webpack.RuleSetRule[] {
  const imagesLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    parser: { dataUrlCondition: { maxSize: 15000 } },
    generator: {
      filename: 'images/[name][ext][query]'
    }
  };

  const audioLoader = {
    test: /\.(ogg|mp3|wav)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'audio/[name][ext][query]'
    }
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('module'),
            localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };

  const cssLoader = {
    test: /\.css$/,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader']
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  return [svgLoader, imagesLoader, audioLoader, tsLoader, scssLoader, cssLoader];
}
