import axios from 'axios'
import Vue from 'vue'

// 进行一些全局配置
axios.defaults.baseURL = 'http://localhost:3000/web/api/'
axios.defaults.timeout = 10000

// 封装自己的get/post方法
export default {
  get: (path = "", data = {}) => {
    return new Promise((resolve, reject) => {
      axios.get(path, {
        params: data
      }).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      })
    })
  },
  post: (path = "", data = {}) => {
    return new Promise((resolve, reject) => {
      axios.post(path, data).then(response => {
        resolve(response.data);
      }).catch(error => {
        reject(error);
      })
    })
  },
  all: (list) => {
    return new Promise((resolve, reject) => {
      axios.all(list)
        .then(axios.spread((...result) => {
          // 两个请求现在都执行完成
          resolve(result)
        }))
        .catch(err => {
          reject(err)
        })
    })
  }
}
