import webpack from 'webpack';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

const port = process.env.PORT || 3000;

export default merge(baseConfig, {

    entry:[
        './src/index'
    ],

    output:{
        publicPath: `http://localhost:${port}/dist`
    },

    module:{
        loaders:[
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?sourceMap'
                ]
            },{
                test: /\*\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                ]
            }
        ]
    },

    target: 'electron-renderer'
});