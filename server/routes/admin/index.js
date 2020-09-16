module.exports = app => {
  const express = require('express')
  const router = express.Router({ mergeParams: true })
  const AdminUser = require("../../models/AdminUser")
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')

  // 文件上传
  const multer = require('multer')
  const upload = multer({ dest: __dirname + '/../../uploads' })

  // 登录校验中间件
  const authMiddleware = require("../../middleware/auth")

  // 资源中间件
  const resourceMiddleware = require("../../middleware/resource")

  // 创建分类
  router.post('/', async (req, res) => {
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 修改分类
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除分类
  router.delete('/:id', async (req, res) => {
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 分类列表
  router.get('/', async (req, res) => {
    let queryOptions = {}
    if (req.Model.modelName === 'Category') {
      queryOptions.populate = 'parent'
    }
    const items = await req.Model.find().setOptions(queryOptions)
    // const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })

  // 获取详情页
  router.get('/:id', authMiddleware(), async (req, res) => {
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  app.use('/admin/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 图片上传
  app.post('/admin/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 用户登录
  app.post('/admin/api/login', async (req, res) => {
    const { username, password } = req.body
    // 1.找用户

    // 前缀- 被排除, 前缀+ 被强制选择
    const user = await AdminUser.findOne({ username }).select('+password')
    assert(user, 422, "用户名不存在")
    // 2.校验密码
    const isValid = require('bcryptjs').compareSync(password, user.password)
    assert(isValid, 422, "密码错误")
    // 3.返回token
    const token = jwt.sign({ id: user._id }, app.get('secret'))
    res.send({ token })
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })

}