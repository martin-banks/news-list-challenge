<template>
  <div class="container">
    <card-article
      v-for="article in articles"
      :key="`article-${article.id}`"
      :article="article"
      :index="article.index"
    />

  </div>
</template>

<script>
import CardArticle from '../components/card-article'

export default {
  name: 'ArticleList',
  components: {
    CardArticle,
  },
  props: {
    articles: {
      type: Array,
      default: () => [],
    }
  },
  data () {
    return {}
  },

  methods: {},
}
</script>

<style scoped>

.container {
  display: grid;
  gap: 1.5rem;
}

@media screen and (min-width: 600px) {
  .container {
    grid-template-columns: 1fr 1fr;
  }
}

</style>
