import axios from 'axios'
const baseUrl = 'http://api.citybik.es/v2/networks/citybikes-helsinki'

const getAll = async () => {
  const res = await axios.get(baseUrl)
  return res.data
}

export default { getAll }