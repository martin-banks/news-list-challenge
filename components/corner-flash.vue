<template>
  <div class="container">
    <p>Lorem ipsum<span class="spacer" /> →</p>
  </div>
</template>

<script>
export default {
  name: 'CornerFlash',
  components: {},
  props: {},
  data () {
    return {}
  },

  methods: {},
}
</script>

<style scoped>

.container {
  background: darkred;
  padding: 1rem 1.5rem;
  color: white;
  position: absolute;
  bottom: 2rem;
  right: 0;
  transform: translateX(0.5rem);
  order: 3;
}

.spacer {
  display: inline-block;
  width: 30px;
  height: 1px;
}

</style>
