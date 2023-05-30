import axios from 'axios'

const api = axios.create({
  baseURL: 'https://unyleya-api.fly.dev/products',
})

export default api
