var dbConfig = require("./../util/dbconfig")
// 得到一个两数之间的随机数 
// 引用:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function rand(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// 模拟发送短信接口
sendCode = (req, res) => {
  let phone = req.body.user_phone;
  let code = rand(1000, 9999);
  res.send({
    "code": 200,
    "message": "发送成功"
  })
  console.log(code, "发送的随机数")

}
module.exports = {
  sendCode
}
