"use strict";

module.exports = {
	entry: './src/main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,		// Allows code to reload on the fly when run via webpack devserver
		port: 8000
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}, {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }
		]
	}
};