exports.createPages = require('./gatsby/create-pages')
exports.onCreateNode = require('./gatsby/on-create-node')

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: `babel-plugin-import`,
    options: {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'css'
    }
  })
}
