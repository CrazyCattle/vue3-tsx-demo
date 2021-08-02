import axios, { AxiosRequestConfig } from "axios"

const token = window.sessionStorage.getItem('USER_TOKEN')
axios.interceptors.request.use((config: AxiosRequestConfig) => {
  console.log(config, token)
  return config
})

export default axios
