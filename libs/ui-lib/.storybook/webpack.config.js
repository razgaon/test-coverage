

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const rootWebpackConfig = require('../../../.storybook/webpack.config');
/**
 * Export a function. Accept the base config as the only param.
 *
 * @param {Parameters<typeof rootWebpackConfig>[0]} options
 */
module.exports = async ({ config, mode }) => {
  config = await rootWebpackConfig({ config, mode });

  config.module.rules.push({
    test: /\.(js|ts)$/,
    loader: 'istanbul-instrumenter-loader',
    options: { esModules: true },
    enforce: 'post',
    include: require('path').join(__dirname, '..', 'src')
  });


  return config;
};
