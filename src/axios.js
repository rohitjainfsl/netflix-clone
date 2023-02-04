import axios from 'axios'

const baseURLRequest = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
})

export default baseURLRequest