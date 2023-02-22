const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Learning AWS Code-pipeline, This looks interesting, simple and nice'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
