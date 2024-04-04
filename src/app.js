const express = require('express');
const actors = require('./routes/actors.js')

const app = express();

app.use(express.json());

const port = 8001;

app.use('/actors', actors);

app.listen(port, () => {
    console.log(`ejecutando en el puerto ${port}`)
})