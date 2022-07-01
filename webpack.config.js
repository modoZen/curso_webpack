const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv       = require('dotenv-webpack');

/** @type {import('webpack').Configuration} */
module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename:'assets/images/[hash][ext][query]',
        clean: true,
    },
    mode: 'production',
    resolve:{
        extensions:['.js','.jsx'],
        alias:{
            '@utils':       path.resolve(__dirname,'src/utils/'),
            '@templates':   path.resolve(__dirname,'src/templates/'),
            '@styles':      path.resolve(__dirname, 'src/styles/'),
            '@images':      path.resolve(__dirname, 'src/assets/images/'),
            "@components": path.resolve(__dirname, 'src/components/')
        }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
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
    optimization:{
        minimize: true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    }
}