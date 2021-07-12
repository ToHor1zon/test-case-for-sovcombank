<template>
  <div id="app">
    <MainSearch />
  </div>
</template>

<script>
import MainSearch from './components/MainSearch.vue'

export default {
  name: 'App',
  components: {
    MainSearch,
  }
}
</script>

<style >

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
