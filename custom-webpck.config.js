module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  output: {
    library: `angular-micro-name`,
    libraryTarget: 'umd',
    // publicPath: 'http://localhost:4200/'
  },
  optimization: {
    splitChunks: false,
    runtimeChunk: false,
  }
}
