module.exports = {
  module: {
    rules: [
      {
        test: /\.sfdt$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false
            }
          }
        ]
      }
    ]
  }
}
