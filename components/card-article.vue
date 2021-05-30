<template>
  <a
    :href="article.URL"
    :class="{
      card: true,
      [`card__${article.type}`]: true,
      card__hover: hover,
    }"
    :style="{
      gridRowStart: windowWidth > 600 ? article.type === 'double' ? article.index - 1 : article.index + 1 : 'auto',
      gridRowEnd: windowWidth > 600 ? article.type === 'double' ? article.index + 1 : article.index + 2 : 'auto',
    }"
    @mouseover="setHover(true)"
    @mouseout="setHover(false)"
  >
    <card-image
      :article="article"
      :style="{
        order: (article.type === 'hero' && windowWidth > 600) ? 2 : 1,
      }"
      :hover="hover"
    />
    <card-text
      :article="article"
      :style="{
        order: (article.type === 'hero' && windowWidth > 600) ? 1 : 2,
      }"
    />

    <corner-flash v-if="article.type === 'hero' && windowWidth > 600"/>
  </a>
</template>

<script>
import CardText from './card-text.vue'
import CardImage from './card-image.vue'
import CornerFlash from './corner-flash.vue'

export default {
  name: 'CardHero',
  components: {
    CardText,
    CardImage,
    CornerFlash,
  },
  props: {
    article: {
      type: Object,
      isRequired: true,
    },
    index: {
      type: Number,
      isRequired: true,
    },
  },
  data () {
    return {
      windowWidth: 0,
      hover: false,
    }
  },

  methods: {
    setHover (value) {
      this.hover = value
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

.card {
  position: relative;
  background: white;
  display: grid;
  box-shadow: 0 4px 16px -4px rgba(0,0,0, 0.6);
  text-decoration: none;
  transition: all 300ms ease-in-out;
}
.card__hover {
  background: #ddd
}

.card__hero {
  text-align: left;
}

@media screen and (min-width: 600px) {
  .card__hero {
    grid-template-columns: 30% 70%;
    grid-column: 1 / span 2;
  }
  .card__small {
    grid-template-columns: 55% 45%;
  }

  .card__double {
    grid-template-rows: 50% 50%;
  }
}

</style>
