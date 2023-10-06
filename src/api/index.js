import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000000,
})

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
instance.defaults.headers.common['event-id'] = '634857b8706662e4d7bba0b5'

export default instance
