import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';
import baseConfig from './webpack.config.base';

const port = process.env.PORT || 3000;

export default merge(baseConfig, {

    debug: true,

    devtool: 'cheap-module-eval-source-map',

    entry:[
        'babel-polyfill',
        './src/index'
    ],

    output:{
        publicPath: `http://localhost:${port}/dist`
    },

    plugins: [
   	    new webpack.ProvidePlugin({
   	    	$: 'jquery',
   	    	jQuery: 'jquery',
   	    	jquery: 'jquery',
   	    	'window.jQuery': 'jquery',
   	    	'window.jquery': 'jquery',
   	    	'window.$': 'jquery',
        }),

        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                screw_ie8: true,
                warnings: false
             }
        }),
        new ExtractTextPlugin("[name].css")
   ],

    module:{
        loaders:[
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract( 
                    'style-loader',
                    'css-loader'
                )
            },{
                test: /\*\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style-loader',
                    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                )
            },{
                test:/\.(eot|woff|woff2|ttf|svg)$/,
                loader: 'file'
            }
        ]
    },

    target: 'electron-renderer'
});