module.exports = options => {
  // 密码验证
  const jwt = require('jsonwebtoken')
  // 错误异常处理
  const assert = require('http-assert')
  const AdminUser = require('../models/AdminUser')
  return async (req, res, next) => {
    // 验证用户合法
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, "请先登录")
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, "请先登录")
    req.user = await AdminUser.findById(id)
    assert(req.user, 401, "请先登录")
    await next()
  }
}