import axios from 'axios'

let instance = axios.create({

})

instance.interceptors.request.use(config => {
  config.headers.Authorization = window.localStorage.getItem('token')

  return config
},(error) =>{
  return Promise.reject(error);
});

//返回状态判断
instance.interceptors.response.use(res => {
  return res.data
}, (error) => {
  return Promise.reject(error)
});

export default instance