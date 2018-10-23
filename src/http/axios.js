import axios from 'axios'

const getData = config => axios(config).then((res) => {
  if (res.status === 200 || res.status === '200') {
    return res.data
  }
  return {
    code: res.code,
    message: res.message
  }
})

export default getData
