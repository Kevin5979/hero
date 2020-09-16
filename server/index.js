const express = require("express")

const app = express()

// 秘钥
app.set('secret', 'ughouqgifiuqhfdderf')

// 跨域处理
app.use(require('cors')())

// json处理
app.use(express.json())

// 技巧
require('./routes/admin')(app)
require('./routes/web')(app)
require('./plugins/db')(app)

app.use('/uploads', express.static(__dirname + '/uploads'))


app.listen(3000, () => {
  console.log('http://localhost:3000')
})
