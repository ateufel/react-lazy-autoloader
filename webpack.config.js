const path = require('path');

module.exports = {
	entry: './src/LazyLoad.js',
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'LazyLoad.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.join(__dirname, 'src'),
				loader: 'babel-loader'
			}
		]
	}
};
