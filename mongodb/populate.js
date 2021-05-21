
let mongoose = require('mongoose')
let ObjectId = mongoose.SchemaTypes.ObjectId

let conn = mongoose.createConnection('mongodb://127.0.0.1/school', {
  useNewUrlParser: true
})

let userSechma = new mongoose.Schema({
  username: String,
  password: String,
  date: Date,
  meta: {type: String, default: '备注'},
  hobby: []
})
let userModel = conn.model('User', userSechma)

let cartSechma = new mongoose.Schema({
  name: String,
  price: Number,
  user: {type: ObjectId, ref: userModel}
})

let cartModel = conn.model('Cart', cartSechma)

/* 
  userModel.create({username: 'zm'}).then(doc => {
    cartModel.create({name: 'iphone', price: 99, user: doc._id}).then(res => {
    console.log(res)
  })
}) */

// 两个集合联查
cartModel.findById('5c9f71f279ecd623c88f414d').populate('user')
.then(doc => {
  console.log(doc)
})
