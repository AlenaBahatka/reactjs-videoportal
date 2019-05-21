const common = require('./webpack.config.common');
const merge = require('webpack-merge');
const path = require('path');
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;

module.exports = merge(common, {
	name: 'client',
	target: 'web',
	// entry point of app
	entry: './src/app/client.jsx',

	// tell webpack where to put output file that is generated
	output: {
		path: path.resolve('public'),
		chunkFilename: '[name].bundle.js',
		filename: '[name].bundle.js',
		publicPath: '/'
	},

	plugins: [
		new reactLoadablePlugin({
			filename: './public/react-loadable.json'
		})
	]
});
