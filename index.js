const express = require("express"); //express 모듈 가져옴
const app = express(); //express app 만듦
const port = 5000; //포트설정
const bodyParser = require("body-parser");
const { User } = require("./models/User");

const config = require('./config/key')

//application/x-www-form-urlencoded 형태의 데이터를 분석해서 가져올 수 있음
app.use(bodyParser.urlencoded({ extended: true }));
//application/json
app.use(bodyParser.json());

// 요즘은 body-parser 안불러오고 express에서 제공함
// app.use(express.json()) //For JSON requests
// app.use(express.urlencoded({extended: true}));

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hell!");
});

app.post('/register', (req, res) => {
  //회원가입 할 때 필요한 정보들을 client에서 가져오면
  //그것들을 데이터베이스에 넣어준다.

  const user = new User(req.body); //body-parser가 있기 때문에 클라이언트 정보를 받아올 수 있다.

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      //status(200)은 성공했다는 의미
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
