const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

    mode: 'production',
    output: {
        filename: 'main.[contentHash].js'       
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /style\.css$/,
                use: [

                    'style-loader',
                    'css-loader'

                ]
            },
            {
                test: /style\.css$/,
                use: [

                    MiniCssExtractPlugin.loader,
                    'css-loader'

                ]
            },
            {
                test: /\.html$/,
                use: [

                    {
                        loader: 'html-loader',
                        options: { minimize: false }
                    }
                ]
            } /*
            ,
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    option: {
                        esModule: false
                    }
                }]
            }
            */
        ]
    },
    plugins: [

        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
            
        }),

        new MiniCssExtractPlugin({
            filename: '[name].css',
            ignoreOrder: false
        })

    ]

}