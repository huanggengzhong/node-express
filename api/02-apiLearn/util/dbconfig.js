const mysql = require("mysql")
module.exports = {
  // 数据库配置
  config: {
    host: 'localhost',
    port: "3306",
    user: 'root',
    password: 'root',
    database: 'exapp'
  },
  // 数据池链接
  sqlConnect: function (sql, sqlArr, callback) {
    var pool = mysql.createPool(this.config);
    pool.getConnection(function (err, connection) {
      console.log("开始数据库链接...");
      if (err) {
        console.log("链接失败");
        return;
      }
      // 事件驱动回调
      connection.query(sql, sqlArr, callback);
      // 释放链接
      connection.release();
    })

  }
}
