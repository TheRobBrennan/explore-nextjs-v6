const withSourceMaps = require('@zeit/next-source-maps')
const withTypeScript = require('@zeit/next-typescript')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = withTypeScript(
  withSourceMaps({
    webpack: function (config) {
      if (ANALYZE) {
        config.plugins.push(new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          analyzerPort: 8888,
          openAnalyzer: true
        }))
      }
  
      return config
    }
  })  
)
