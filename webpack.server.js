
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'server.js',
    },
    externals: [nodeExternals()],
    resolve: {
        extensions: ['.js'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
        },
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'my-css-build.css',
            chunkFilename: 'chunk-css-build.css',
        }),
    ],
}

module.exports = config;