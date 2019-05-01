const SizePlugin = require('size-plugin')

exports.onCreateWebpackConfig = (webpackConfig, options) => {
  if (webpackConfig.stage === 'build-javascript')
    webpackConfig.actions.setWebpackConfig({
      plugins: [new SizePlugin()],
    })
}
