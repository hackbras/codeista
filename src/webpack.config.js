var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/view/style/custom.sass',
    output: {
        //path: './dist',
        filename: 'dist/custom.css'
    },
    module: {
        rules: [
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader'] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),

        new ExtractTextPlugin({
            filename: 'style.css',
            disable: false,
            allChunks: true
        })
    ]
}