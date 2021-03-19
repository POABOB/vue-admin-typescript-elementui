import axios from 'axios'
// import { UserModule } from '@/store/modules/user'
import { Loading,Message } from 'element-ui'
import store from '@/store'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000
  // withCredentials: true // send cookies when cross-domain requests
})

// Request interceptors
service.interceptors.request.use(
  config => {
    // Add X-Access-Token header to every request, you can add other custom headers here
    // if (UserModule.id_token) {
    //   config.headers['Authorization'] = UserModule.id_token
    // }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// Response interceptors
service.interceptors.response.use(
  response => {
    return Promise.resolve(response)
  },
  error => {
    if (error.response.status === 400 || error.response.status === 401 || error.response.status === 403) {
    //   UserModule.ResetToken()
      location.reload()
    }
    /* eslint-disable */
    if (error.response.data.code == '2000009') {
      return Promise.reject(error)
    }
    var message =
      (error.response && error.response.data.message) ||
      (error.message.indexOf('timeout') > -1 ? '請求超時' : error.message)
    if (
      navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
        Message.error(message)
    } else {
        console.log(error)
        Message.error(message)
    }
    return Promise.reject(error)
  }
)

export default service