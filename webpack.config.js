const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

var config = {
    entry: './index.jsx',
    context: path.join(__dirname, 'src'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CaseSensitivePathsPlugin()
    ],
    watch: false
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
      config.devtool = 'source-map';
    }

    if (argv.mode === 'production') {
        config.devtool = 'cheap-module-source-map';
    }

    return config;
};