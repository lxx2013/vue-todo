const path = require('path')
const {
    VueLoaderPlugin
} = require("vue-loader")
const isDev = process.env.NODE_ENV === 'development'
const HtmlPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                        'vue-style-loader',
                        'css-loader',
                        {
                            loader: "postcss-loader",
                            options: {
                                sourceMap: true
                            }
                        },
                        'less-loader'
                    ]
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new VueLoaderPlugin(),
        new HtmlPlugin(),

    ]

}

if (isDev) {
    config.devtool = '#cheap-module-eval-source-map'
    config.devServer = {
            port: 8000,
            host: '0.0.0.0',
            overlay: {
                errors: true,
            },
            hot: true
        },
        config.plugins.push(
            new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()
        )
}
module.exports = config
