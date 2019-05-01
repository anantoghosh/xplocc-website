var WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;

exports.onCreateWebpackConfig = (
  { stage, getConfig, rules, loaders, actions },
  { plugins, ...userOptions }
) => {
  actions.setWebpackConfig({
    plugins: [
      new WebpackBundleSizeAnalyzerPlugin()
    ],
  })
}
