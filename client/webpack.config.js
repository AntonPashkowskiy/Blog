const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: "./src/index.jsx",
    output:{
        path: path.resolve(__dirname, './public'),
        publicPath: 'public/',
        filename: "bundle.js"  
    },
    watch: true,
    module: {
        rules: [{
            test: /\.js$/,
            loader: "babel-loader",
            exclude: [/node_modules/, /public/]
        },
        {
            test: /\.jsx?$/,
            exclude: /(node_modules)/,
            loader: "babel-loader",
            exclude: [/node_modules/, /public/],
            options:{
                presets:["env", "react"]
            }
        }, 
        {
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings 
            }, {
                loader: "css-loader" // translates CSS into CommonJS 
            }, {
                loader: "less-loader" // compiles Less to CSS 
            }]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }]
    }
}