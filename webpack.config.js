const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

/** @type {import('webpack').Configuration} */
module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve:{
        extensions:['.js']
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                },
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader,
                     'css-loader',
                     'sass-loader'
                    ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPligin({
            inject:'body',
            template:'./public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
    ]
}