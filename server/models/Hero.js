const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  avatar: { type: String },
  title: { type: String },
  categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
  scores: {
    difficult: { type: Number },
    skills: { type: Number },
    attack: { type: Number },
    survive: { type: Number }
  },
  // 技能
  skills: [{
    icon: { type: String },
    name: { type: String },
    desciption: { type: String },
    tips: { type: String }
  }],
  // 装备(顺风出装 + 逆风出装)
  items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Article' }],
  items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Article' }],
  // 使用技巧
  usageTips: { type: String },
  battleTips: { type: String },
  teamTips: { type: String },
  // 英雄关系
  partners: [{
    hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
    desciption: { type: String }
  }]
})


module.exports = mongoose.model('Hero', schema, 'heroes')
