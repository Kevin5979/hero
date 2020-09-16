// 专门用于管理请求请求地址
import Network from './network'

// 新闻资讯
export const getNewsList = () => Network.get('news/list')
// 英雄列表
export const getHeroList = () => Network.get('heroes/list')

