const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join('./', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join('./', 'build', 'index.html'));
});


const PORT = process.env.PORT || 5000;
app.listen(PORT);