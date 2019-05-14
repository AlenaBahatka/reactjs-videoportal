module.exports = {
	resolve: {
		extensions: [ '.js', '.jsx' ]
	},
	devtool: 'cheap-module-eval-source-map',
	// tell webpack to run babel on every file it runs through
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	}
};
