const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const ejs = require('ejs')
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true, useUnifiedTopology: true})

const acticleSchema = new mongoose.Schema({
  title: String,
  content: String
})

const Article = mongoose.model('Article', acticleSchema)

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

app.get('/', function(req, res) {
    res.send('<h1>I am a server</h1>')
})

app.get('/articles', function(req, res) {

    Article.find({}, function (err, risults) {

        if (!err) {
            res.send(risults)
        } else {
            res.send(err)
        }

    })
    
})


app.post('/articles', function (req, res) {
    
    const newArticle = new Article ({
        title: req.body.title,
        content: req.body.content
    })

    newArticle.save(function(err){
        if (!err){
          res.send('Successfully added a new article.')
        } else {
            res.send(err)
        }
      })

})


app.listen(port, function(){
    console.log('Server started on port', port);
})