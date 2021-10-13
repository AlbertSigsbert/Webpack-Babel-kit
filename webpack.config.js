// var path = require('path');
module.exports = {
    mode: 'development',
     
    // entry: './src/index.js',
    // output: {
    //     path: path.join(__dirname, 'dist'),
    //     filename: 'main.js',
    //     publicPath: '/'
    //   },



    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use: {
                    //By default it will reference the .babelrc
                    loader:'babel-loader'
                }
            }
        ]
    },

    devtool:'source-map',
     
  
}