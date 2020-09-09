const path = require('path')

module.exports = {
	mode: 'production',
	optimization: {
		minimize: true,
	},
	entry: {
		index: './src/index.ts',
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.ts'],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'bin'),
		libraryTarget: 'umd',
	}
}