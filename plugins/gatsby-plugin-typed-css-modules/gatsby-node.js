exports.onCreateWebpackConfig = (
  { stage, getConfig, rules, loaders, actions },
  { plugins, ...userOptions }
) => {
  if (stage !== 'develop') {
    return
  }

  const options = {
    camelCase: 'dashes',
    ...userOptions,
  }

  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.s?(c|a)ss$/,
          enforce: 'pre',
          exclude: /node_modules/,
          loader: 'typed-css-modules-loader',
          options,
        },
      ],
    },
  })
}
