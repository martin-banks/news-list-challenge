<template>
  <div class="imageWrapper">
    <div
      :class="{
        imageMask: true,
        [`image__${article.type}`]: true,
        [`mask__${(article.index % 4 < 2) ? 'bottom' : 'top'}`]: true,
        image__hover: hover,
      }"
      :data-angle="article.index % 2"
    >
      <img class="thumbnail" :src="article.ThumbnailImage" />
    </div>
  </div>

</template>

<script>
export default {
  name: 'CardImage',
  components: {},
  props: {
    article: {
      type: Object,
      isRequired: true,
    },
    hover: {
      type: Boolean,
      isRequired: false,
      default: false,
    }
  },
  data () {
    return {}
  },

  methods: {},

}
</script>

<style scoped>

.imageWrapper {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}

.thumbnail {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 300ms ease-in-out
}

.image__hover .thumbnail {
  transform: scale(1.1);
}

.imageMask {
  width: 100%;
  height: 100%;
  overflow: hidden;
  clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 0% 100%)
}
.imageMask[data-angle="1"] {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 90%)
}

@media screen and (min-width: 600px) {
  .image__hero {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 10% 100%)
  }
  .image__double {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 00% 90%)
  }
  .image__small.mask__bottom {
    clip-path: polygon(0% 0%, 100% 0%, 90% 100%, 00% 100%)
  }
  .image__small.mask__top {
    clip-path: polygon(0% 0%, 90% 0%, 100% 100%, 00% 100%)
  }

}

</style>
