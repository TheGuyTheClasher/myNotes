const express = require('express');
const notes = require('./data/notes.js')
const dotenv = require('dotenv')

const app = express();
dotenv.config();
const PORT = process.env.PORT || 6000

app.get('/', (req, res) => {
    res.send('Hello world!!')
});

app.get('/api/notes', (req, res) => {
    res.json(notes)
})

app.get('/api/notes/:id', (req, res) => {
    const note = notes.find((note) => note._id === req.params.id);
    res.send(note);
})

app.listen(PORT, console.log(`server started on PORT ${PORT}`))

