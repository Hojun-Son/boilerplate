const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength:50
    },
    email: {
        type: String,
        trim: true,
        unique:1
    },
    password: {
        type: String,
        minlength:5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role: { //일반 회원 or 관리자..
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {//token의 유효기간
        type: Number
    }

})

const User = mongoose.model('User',userSchema)//shcema를 'User'라는 model로 감싼다.
module.exports = {User} //이 모델을 다른파일에서 쓸 수 있게 exports