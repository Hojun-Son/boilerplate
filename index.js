const express = require('express') //express 모듈 가져옴
const app = express() //express app 만듦
const port = 5000 //포트설정
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://hojun:gtsdhr8877@boilerplate.n3fbp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })