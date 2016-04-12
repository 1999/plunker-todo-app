'use strict';

const webpack = require('webpack');
const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_PRODUCTION_BUILD = (NODE_ENV === 'production');

module.exports = {
    context: __dirname,
    entry: './static/script.js',
    output: {
        path: `${__dirname}/static`,
        publicPath: './static/',
        filename: 'build.js'
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react'],
                    plugins: ['add-module-exports']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },

    devtool: 'inline-source-map',

    watch: !IS_PRODUCTION_BUILD,
    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                // This has effect on the react lib size
                NODE_ENV: JSON.stringify(NODE_ENV)
            }
        }),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en|ru/)
    ]
};
