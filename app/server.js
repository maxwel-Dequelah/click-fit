const express = require('express')
const app = express()
const path = require('path')

const upload = require('./upload')
const bodyParser = require('body-parser')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  // Render form view
  res.sendFile(path.join(__dirname,'/public/index.html'))
})


app.post('/upload', upload.single('file'), (req, res,next) => {
  // Handle the uploaded file
    
    next()
    console.log('saved')
    res.redirect('/')
});

app.listen(8082,()=>{
    console.log('😃😃😃😃Started server')
})