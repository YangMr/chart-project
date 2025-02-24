import axios from 'axios'

const service = axios.create({
  baseURL: 'https://mock.mengxuegu.com/mock/669089ba027fa7048df2cc9b/echarts',
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
