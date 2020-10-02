/*
 * @Description:
 * @Author: zhuyuanzheng
 * @Date: 2019-11-29 00:26:23
 * @LastEditors: zhuyuanzheng
 * @LastEditTime: 2020-09-21 12:49:26
 */
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: '/',
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  responseType: 'blob' //下载二进制
})

// request interceptor
service.interceptors.request.use(
  config => {//config为传入的参数
    console.log('----------------------------',config);
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

//导出方法(二进制形式)
function exportFile() {
  exportCust(this.exportData)
  .then(res => {
    if(res.data.code === '200') {
      const blob = new Blob([res.data], {type: 'application/vnd.ms-excel'}) //构造一个blob对象来处理数据
      const fileName = '渠道业务拜访信息.xlsx' //导出文件名
      const elink = document.createElement('a')
      elink.download = fileName
      elink.style.display = 'none'
      elink.href = URL.createObjectURL(blob)
      document.body.appendChild(elink)
      elink.click() //执行下载
      URL.revokeObjectURL(elink.href)  //释放URL对象
      document.body.removeChild(elink) //释放标签
    }
  })
}

//导出方法(window.open)
this.url = `http://${document.domain}`
function exportExcel() {
  const baseURL = process.env.NODE_ENV === 'development' ? 'http://10.119.18.174.8888' : this.url //开发环境
  let str = '&lDate='
          + 'this.Date.split('-')'
          + '&pageNum=1'
          + '&pageSize=9999'
  const str2 = '/api/v1/reports/centers/export.do?' + str
  const url = baseURL + str2
  window.open(url)
}
