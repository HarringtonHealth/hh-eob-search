const path = require('path');

module.exports = {
	entry: {
		app: './src/app/app.module.js'
	},
	output: {
		filename: '[name].build.js',
		path: path.resolve(__dirname, './dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader', options: { sourceMap: true } },
					{ loader: 'css-loader', options: { sourceMap: true } }
				],
			},
			{
				test: /\.html$/,
				loader: 'html-loader',
				exclude: [/node_modules/]
			}
		]
	},
	devtool: '#inline-source-map',
	plugins: [],
	mode: 'development',
	externals: {
		angular: 'angular'
	}
}