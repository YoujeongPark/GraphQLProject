import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000' // axios를 편하게 쓰기 위해서 fetcher.js를 만듦

const fetcher = async (method, url, ...rest) => { // 인자가 여러개 들어감 
  const res = await axios[method](url, ...rest)
  return res.data
}

export default fetcher

// GET : axios.get(url[, config])
// POST : axios.post(url, data[, config])
// PUT : axios.put(url, data[, config])
// DELETE : axios.delete(url[, config])