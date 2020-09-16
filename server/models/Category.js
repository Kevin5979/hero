const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  // 关联
  parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
})

schema.virtual('children', {
  localField: '_id',
  foreignField: 'parent',
  justOne: false,
  ref: 'Category'
})

schema.virtual('newsList', {
  localField: '_id',
  foreignField: 'categories',
  justOne: false,
  ref: 'Essay'
})


module.exports = mongoose.model('Category', schema)
