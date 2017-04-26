const path = require('path');

module.exports = {
    entry: './dist/index.js',
    target: "node",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
