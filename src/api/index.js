import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 1000000,
})

instance.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`
instance.defaults.headers.common['event-id'] = process.env.REACT_APP_EVETN_ID

export default instance
