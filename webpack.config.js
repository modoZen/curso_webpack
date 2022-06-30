const path = require('path');
const HtmlWebpackPligin = require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
// const CopyPlugin = require('copy-webpack-plugin');

/** @type {import('webpack').Configuration} */
module.exports={
    entry:'./src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
        assetModuleFilename:'assets/images/[hash][ext][query]'
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
        new MiniCssExtractPlugin(),
        // new CopyPlugin({
        //     patterns:[
        //         {
        //             from: path.resolve(__dirname,'src','assets/images'),
        //             to: "assets/images"
        //         }
        //     ]
        // }),
    ]
}