import _ from 'lodash';
import express from 'express';
import webpack from 'webpack';
import config from '../webpack.config.js';

var app = express();

const compiler = webpack(config);

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log("Hello");
})

app.listen(3000, () => console.log("Example app running on port 3000"));