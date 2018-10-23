import getData from './axios'


export default {
  getArticles: data => getData({
    method: 'GET',
    url: 'http://localhost:8080/article',
    params: data,
  })
}
