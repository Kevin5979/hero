module.exports = app => {
  const mongoose = require("mongoose")
  mongoose.set('useCreateIndex', true)
  mongoose.connect('mongodb://127.0.0.1:27017/hero-union', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  // 引用所有模型
  require('require-all')(__dirname + '/../models')
}