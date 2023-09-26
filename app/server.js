const express = require('express')
const app = express()
const path = require('path')



const upload = require('./upload')
const bodyParser = require('body-parser')

app.use(express.static('upload_images'))
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  // Render form view
  res.sendFile(path.join(__dirname,'/public/index.html'))
})


app.post('/upload', upload.single('photo'), (req, res,next) => {
  // Handle the uploaded file
    if(req.file){
      console.log(req.file.filename)
      res.json({success:true})
    }
    else{
      console.log('no file')
      res.json({success:false})
    }
    next()
    console.log('saved')
    // res.redirect('/')
});

app.post('/newuser',(req,res)=>{
  console.log(req.body)


  // alling the stored procedure addUser 
 
  })


app.listen(process.env.PORT,()=>{
    console.log('😃😃😃😃Started server')
})
