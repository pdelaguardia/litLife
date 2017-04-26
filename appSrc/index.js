import _ from 'lodash';
import express from 'express';

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(3000, () => console.log("Example app running on port 3000"));