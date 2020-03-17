import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

const create = async newObject => {
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(baseUrl, newObject, config)
  return res.data
}

const del = async id => {
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.delete(`${baseUrl}/${id}`, config)
  return res.data
}

const like = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getAll, create, setToken, like, del }