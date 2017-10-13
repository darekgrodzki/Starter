module.exports = {
    entry: ['whatwg-fetch', './js/Index.jsx'],
    devServer:{
      inline: true,
      contentBase: './',
      port: 8080,
      historyApiFallback: true
    },
    output: {
        filename: "js/out.js"
    },
    watch: true,
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query:  {
                presets: ['es2015','stage-2', 'react']
            }
        }]
    }
}
