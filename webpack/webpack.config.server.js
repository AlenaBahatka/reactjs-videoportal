const common = require('./webpack.config.common');
const merge = require('webpack-merge');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = merge(common, {
	name: 'server',
	target: 'node',

	// entry point of app
	entry: './src/app/server.js',
	// to not bundle any libraries into output bundle in the server,
	// if it exists inside the node_modules folder
	externals: [ nodeExternals() ],

	// tell webpack where to put output file that is generated
	output: {
		filename: 'bundle.js',
		path: path.resolve('./build')
	}
});
