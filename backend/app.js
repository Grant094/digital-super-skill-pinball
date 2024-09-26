const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3001;
const db = require('./queries');

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(bodyParser.json());
/*
app.get('/', (req, res) => {
    res.send('Hello World!');
});
*/
app.post('/score', db.addScore);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});