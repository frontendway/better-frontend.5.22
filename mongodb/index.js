
let mongoose = require('./node_modules/mongoose')

let conn = mongoose.createConnection('mongodb://127.0.0.1/school', {
  useNewUrlParser: true
})
// 创建骨架 
let userSechma = new mongoose.Schema({
  username: String,
  password: String,
  date: Date,
  meta: {type: String, default: '备注'},
  hobby: []
})
// hobby 没插入默认是个空数组

// 创建模型 模型可进行增删改查操作
let userModel = conn.model('User', userSechma)

/* 
创建
  userModel.create({username: 'zm',password: 123456,date: new Date()}).then(data => {
    console.log(data)
  }) 

updateMany 更新多条
  userModel.updateOne({username: 'zm',password: 123456}, {meta: '123',$addToSet: {hobby: {$each: ['吃', '喝']}}}).then(doc => {
    console.log(doc)
  }) 

删除
  userModel.deleteOne({username: 'zm',password: 123456}).then(res => {
    console.log(res)
  })


  find 返回数组
  findOne 返回单条对象、查不到返回null
  findById
*/
let pageSize = 5
let pageNum = 2
// 先查找 再 排序 再 跳过 在 limit
// 查询结果只显示用户名 不显示id
userModel.find({}, {username: 1, _id: 0}).sort({password: -1}).limit(pageSize).skip((pageNum - 1) * pageSize).then()
