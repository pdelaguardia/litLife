const path = require('path');


module.exports = {
    devtool: 'inline-source-map',
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './index.js'
    },
    target: "web",
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'bundle.js',
        publicPath: '/'        
    },
    devServer: {
        contentBase: path.resolve(__dirname, './src')
    },
    plugins: [],
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.js$/, 
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015"]
                    }
                }],
            },
        ]
    }
};
