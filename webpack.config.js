var path = require("path");
var webpack = require('webpack');
module.exports = {
    devtool: "source-map",
    devtool: "inline-source-map", 
    entry: {
        app:["./js/entry.js"]
    },
    output:{
        path:path.resolve(__dirname, "build"),
        publicPath:"/assets/",
        filename:"[name].bundle.js",
        // sourceMapFilename: '[name].map'
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        noInfo: true,
        port: 8085,
    },
    module:{
        rules:[
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, 
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url-loader?limit=10000&mimetype=application/octet-stream"
            }, 
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+|\?\w)?$/,
                loader: "file-loader"
            }, 
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+|#\w)$/,
                loader: "url-loader?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    // plugins:[
    //     new webpack.optimize.UglifyJsPlugin(
    //     )
    // ]
};
