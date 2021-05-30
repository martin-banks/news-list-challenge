<template>
  <div
    :class="{
      textWrapper: true,
      [`text__${article.type}`]: true
    }"
  >
    <h6 class="card__subject">{{ article.Subject }}</h6>
    <h2 class="card__title">{{ article.ArticleTitle }}</h2>
    <p
      v-if="windowWidth > 600 && (article.type === 'hero' || article.type === 'double')"
      class="intro"
    >
      {{ article.ShortDescription }}
    </p>

    <p class="card__author">{{ formattedDate }} | {{ article.Author }}</p>
  </div>
</template>

<script>
import formatDate from '../helpers/format-date'

export default {
  name: 'CardText',
  components: {},
  props: {
    article: {
      type: Object,
      isRequired: true,
    },
  },
  data () {
    return {
      windowWidth: 0
    }
  },

  methods: {},
  computed: {
    formattedDate () {
      return formatDate(this.article.Date)
    }
  },
  mounted () {
    this.windowWidth = window.innerWidth

    let windowResizeTimer = null
    window.addEventListener('resize', () => {
      clearTimeout(windowResizeTimer)
      windowResizeTimer = setTimeout(() => {
        this.windowWidth = window.innerWidth
      }, 500)
    })
  },
}
</script>

<style scoped>

.textWrapper {
  padding: 2rem;
  display: flex;
  flex-direction: column;
}

.textWrapper * {
  color: #333;
  text-decoration: none;
}

.card__subject {
  text-transform: uppercase;
  font-weight: 400;
  margin-bottom: 1.5rem;
}
.card__title {
  font-weight: 300;
  margin-bottom: 2rem;
  font-size: 1.5rem;
}
.text__hero .card__title,
.text__double .card__title {
  font-size: 1.5rem;
}
.card__intro {
  font-size: 0.8rem;
  line-height: 1rem;
}
.card__author {
  margin-top: auto;
  justify-self: flex-end;
  font-size: 0.8rem;
}

@media screen and (min-width: 600px) {
  .textWrapper {
    padding: 3rem;
  }
  .card__subject {
    margin-bottom: 2rem;
  }
  .card__title {
    font-weight: 300;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  .text__hero .card__title,
  .text__double .card__title {
    font-size: 2rem;
  }
}

</style>
