const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: {
    type: String,
    select: false,
    set(value) {
      return require('bcryptjs').hashSync(value, 10)
    }
  }
})


module.exports = mongoose.model('AdminUser', schema)
