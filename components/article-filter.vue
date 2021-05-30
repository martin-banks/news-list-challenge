<template>
  <!-- Filter -->
  <div class="filter__container">
    <h4 class="filter__title">Filter</h4>
    <!-- filter options list -->
    <ul class="filter__categoryWrapper">
      <li
        :class="{
          filter__category: true,
          'filter__category--all': true,
          filter__active: !Object.keys(filters).find(k => filters[k])
        }"
        @click="handleReset()"
      >
        All Categories
        <span class="filter__activeLine" />
      </li>

      <li
        v-for="category in categories"
        :key="`filter-option-${category}`"
        :class="{
          filter__category: true,
          filter__active: filters[category],
        }"
        @click="handleClick(category)"
      >
        {{ category }}
        <span class="filter__activeLine" />
      <li>

      <!-- Reset -->
      <li
        class="filter__category filter__category--reset"
        @click="handleReset()"
      >
        <span class="filter__verticalBar" />Reset
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'ArticleFilter',
  components: {},
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Object,
      isRequired: true,
    },
  },
  data () {
    return {
      active: {},
    }
  },

  methods: {
    handleClick (category) {
      this.$emit('updateFilter', category)
    },
    handleReset () {
      this.$emit('resetFilters', true)
    }
  },

  mounted () {
    this.handleReset()
  }
}
</script>

<style scoped>

.filter__container {
  color: white;
  display: block;
  width: 100%;
  margin-bottom: 2rem;
}

.filter__title {
  font-weight: bold;
}

.filter__categoryWrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
.filter__categoryWrapper li {
  list-style: none;
}
.filter__category {
  position: relative;
  list-style: none;
  margin: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  opacity: 0.4;
  transition: all 200ms;
}

.filter__category:hover,
.filter__active {
  opacity: 1;
}

.filter__category--all {
  margin-left: 0;
}

.filter__category--reset {
  justify-self: flex-end;
  margin-left: auto;
  padding-right: 0;
  padding-left: 1rem;
  font-weight: bold;
  opacity: 1;
}

.filter__verticalBar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 1px;
  border-left: solid 1px rgba(255,255,255, 0.5);
  transform: scaleY(0.6);
}

.filter__activeLine {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-bottom: solid 1px white;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 200ms;
}
.filter__category:hover .filter__activeLine,
.filter__active .filter__activeLine {
  transform: scaleX(1)
}

</style>
