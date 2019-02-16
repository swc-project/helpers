const path = require('path');


module.exports = {
    mode: process.env.WEBPACK_ENV || 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'lib'),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'swc-loader',
                    options: {
                        // module: {
                        //     type: "commonjs"
                        // }
                    }
                }
            }
        ]
    },
    plugins: [],
    optimization: {},
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx'],
    },
};