<template>
  <div class="home-view">
    <h1>Koa Vue SSR Template</h1>
    <article v-for="item of articles" v-bind:key="item.id">{{item.content}}</article>
  </div>
</template>

<script>
// import ApiService from '../http'

export default {
  asyncData({ store, route }) {
    console.log('getArticles')
    return store.dispatch('getArticles', { id: 1 })
  },
  title() {
    return 'Koa Vue SSR'
  },
  data() {
    return {
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles
    }
  },
  created() {
  },
  mounted() {
    // ApiService.getArticles({
    //   id: 1
    // }).then((res) => {
    //   if (res) {
    //     this.articles = res.data
    //   } else {
    //     console.log('error')
    //   }
    // }).catch((err) => {
    //   if (err) {
    //     console.log(err)
    //   } else {
    //     console.log('not error')
    //   }
    // })
  }
}
</script>

<style lang="postcss">
.home-view {
  margin-top: 1rem;
  text-align: center;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;

  & h1, & h3 {
    font-weight: normal;
  }

  & p {
    font-size: 18px;
    text-align: center;
    width: 65%;
    margin: 0 auto;
  }
}

</style>
