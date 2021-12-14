const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
    },
    resolve:{
        extensions:['.js']
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                },
                exclude:/node_modules/,
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:'body',
            template:'./public/index.html',
            filename:'./index.html',
        })
    ]
}