var dbConfig = require("./../util/dbconfig")

//获取分类

getCate = (req, res) => {

  // 演示数据库链接
  var sql = "select * from cate "
  var sqlArr = []
  var callback = (err, data) => {
    if (err) {
      console.log("链接出错了");
    } else {
      res.send({
        "list": data
      })
    }
  }
  // 链接数据库
  dbConfig.sqlConnect(sql, sqlArr, callback)
}


// 获取指定分类的文章列表
getPostCate = (req, res) => {
  // 根据参数获取指定分类
  let {
    id
  } = req.query;
  var sql = "select * from post where cate_id=?";
  var sqlArr = [id]
  var callback = (err, data) => {
    if (err) {
      console.log("链接出错了");
    } else {
      res.send({
        "list": data
      })
    }
  }
  // 链接数据库
  dbConfig.sqlConnect(sql, sqlArr, callback)
}

module.exports = {
  getCate,
  getPostCate
}
