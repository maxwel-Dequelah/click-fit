const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql2')



const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'clickfit',
  password:''
});


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
  db.query("CALL addUser('maxwell6225@gmail.com', 'MyWi-fiP@sword', 'Admin')",(err,result)=>{
    if (err) {
      console.log(err.message)
    }
    else{
      console.log(result[0])
    }
  })
})

app.listen(8082,()=>{
    console.log('😃😃😃😃Started server')
})