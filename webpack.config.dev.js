const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const Dotenv       = require('dotenv-webpack');

/** @type {import('webpack').Configuration} */
module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename:'assets/images/[hash][ext][query]'
    },
    mode: 'development',
    resolve:{
        extensions:['.js'],
        alias:{
            '@utils':       path.resolve(__dirname,'src/utils/'),
            '@templates':   path.resolve(__dirname,'src/templates/'),
            '@styles':      path.resolve(__dirname, 'src/styles/'),
            '@images':      path.resolve(__dirname, 'src/assets/images/'),
        }
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource"
            },
            {
                test: /\.(woff|woff2)$/i,  // Tipos de fuentes a incluir
                type: 'asset/resource',  // Tipo de módulo a usar (este mismo puede ser usado para archivos de imágenes)
                generator: {
                    filename: 'assets/fonts/[name][ext]',  // Directorio de salida
                },
            },

        ]
    },
    plugins:[
        new HtmlWebpackPligin({
            inject:'body',
            template:'./public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'assets/[name].[contenthash].css'
        }),
        new Dotenv(),
    ],
}