const express = require('express');
const httpProxy = require('express-http-proxy');
const app = express();
const port = 3000;
const {
  EMAIL_SERVICE_URL,
} = require('./URLs');

const emailServiceProxy = httpProxy(EMAIL_SERVICE_URL);

app.get('/', (req, res) => res.send('Hello Gateway API'));
app.post('/email', (req, res) => emailServiceProxy(req, res));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));