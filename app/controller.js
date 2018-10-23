/**
 * controller
 */

const MOCKS = [{
  id: 0,
  content: '你站在此地别动，我去买几个橘子去！'
}, {
  id: 1,
  content: '你站在此地别动，我去买几个橘子去！'
}, {
  id: 2,
  content: '你站在此地别动，我去买几个橘子去！'
}, {
  id: 3,
  content: '你站在此地别动，我去买几个橘子去！'
}]

const getArticles = async (ctx, next) => {
  const id = ctx.request.query.id
  if (id !== null) {
    const art = MOCKS.filter(item => item.id == id)
    if (!art) {
      ctx.status = 404
      ctx.body = {
        message: 'cannt find'
      }
    }
    ctx.status = 200
    ctx.body = {
      data: art
    }
  }
}


module.exports = {
  getArticles,
}
