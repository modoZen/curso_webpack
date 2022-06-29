const path = require('path');
const htmlWebpackPligin = require('html-webpack-plugin');

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
            }
        ]
    },
    plugins:[
        new htmlWebpackPligin({
            inject:'body',
            template:'./public/index.html',
            filename: './index.html'
        })
    ]
}