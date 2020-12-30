const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const ejs = require('ejs')
const app = express()
const port = 3000


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('<h1>I am a server</h1>')
})

app.listen(port, function(){
    console.log('Server started on port', port);
})