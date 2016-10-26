module.exports = {
  devServer: {
    port: 3000,
    inline: true,
    hot: true,
    contentBase: "./static"
  },
  entry: "./src/App.js",
  output: {
    path: "./static",
    filename: "bundle.js"
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