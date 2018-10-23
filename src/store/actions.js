import ApiService from '../http'

export default {
  getArticles({ commit }, obj) {
    return ApiService.getArticles(obj).then((res) => {
      commit('setArticles', res.data)
    })
  }
}

