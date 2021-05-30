<template>
  <article class="card">
    <slot></slot>
  </article>
</template>

<script>
export default {
  name: 'CardBase',
  components: {},
  props: {},
  data () {
    return {}
  },

  methods: {},
}
</script>

<style scoped>

.card {
  background: white;
  box-shadow: 0 4px 16px 0 rgba(0,0,0, 0.5)
}

</style>
