<template>
  <main class="container">
    <article-filter
      :categories="categories"
      :filters="filters"
      @updateFilter="handleFilterUpdate"
      @resetFilters="handleResetFilters"
    />
    <article-list :articles="articlesToRender" />
  </main>
</template>

<script>
import ArticleFilter from '../components/article-filter.vue'
import ArticleList from '../components/article-list.vue'

export default {
  name: 'NewsList',
  components: {
    ArticleFilter,
    ArticleList,
  },
  props: [],
  data () {
    return {
      articles: [],
      articlesToRender: [],
      categories: [],
      types: [
        'hero',
        'small',
        'small',
        'double',
      ],
      filters: {}
    }
  },

  async fetch () {
    const articles = await fetch(`https://my.api.mockaroo.com/fed-exercise-data.json?key=${this.$config.apiKey}`)
      .then(res => res.json())

    const articlesWithType = articles.map((a, i) => {
      a.type = this.types[i % 4]
      a.index = i
      return a
    })

    const categories = []
    for (const article of articles) {
      categories.push(...article.Tags)
    }

    const routeQueries = this.$route.query?.topics?.split('+')

    routeQueries?.forEach((topic) => {
      this.filters[topic] = true
    })

    this.categories = [...new Set(categories)]
    this.filters = this.categories
      .reduce((output, category) => {
        const update = output
        update[category] = routeQueries?.includes(category) || false
        return update
      }, {})
    this.articles = articlesWithType
    this.articlesToRender = articlesWithType
  },

  methods: {
    handleFilterUpdate (topic) {
      this.filters[topic] = !this.filters[topic]

      const activeFilters = Object
        .keys(this.filters)
        .filter(k => this.filters[k])

      if (activeFilters.length < 1) {
        this.handleResetFilters()
        return
      }

      this.articlesToRender = this.articles
        .filter((a) => {
          const { Tags } = a
          let found = false
          for (const tag of Tags) {
            if (activeFilters.includes(tag)) {
              found = true
              break
            }
          }
          return found
        })
        .map((a, i) => {
          a.type = this.types[i % 4]
          a.index = i
          return a
        })

      this.$router.push({
        path: this.$route.path,
        query: { topics: activeFilters.join('+') }
      })
    },

    handleResetFilters () {
      this.articlesToRender = this.articles.map((a, i) => {
        a.type = this.types[i % 4]
        a.index = i
        return a
      })

      Object.keys(this.filters).forEach((k) => {
        this.filters[k] = false
      })

      this.$router.push({ path: this.$route.path })
    },
  },

}
</script>

<style>

</style>
