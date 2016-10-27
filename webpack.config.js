module.exports = {
  devServer: {
    port: 3000,
    inline: true,
    hot: true,
    contentBase: "./static"
  },
  entry: "./src/App.js",
  debug: true,
  devtool: 'source-map',
  output: {
    path: "./static",
    filename: "bundle.js",
    devtoolLineToLine: true,
    sourceMapFilename: "./bundle.js.map"
  },
  watch: true,
  module: {
    loaders: [
      {
           test: /\.js$/,
           exclude: /node_modules/,
           loader: 'babel',
           query: {
             presets: ['react', 'es2015'] 
           }
         }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
}