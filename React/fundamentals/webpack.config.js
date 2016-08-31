module.exports = {
	entry: './main.js',
	output: {
		path: './',
		filename: 'index.js'
	},
	devServer: {
		inline: true,		// Allows code to reload on the fly when run via webpack devserver
		port: 8080
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}