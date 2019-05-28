const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('./client', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join('./client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);