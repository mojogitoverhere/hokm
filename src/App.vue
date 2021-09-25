<template>
  <!-- <game /> -->
  <setup />
</template>

<script>
// import Game from './components/Game.vue'
import Setup from './components/Setup.vue'

export default {
  name: 'App',
  components: {
    // Game,
    Setup,
  }
}
</script>

<style>
#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 5em auto 0 auto;
  padding: 2em;
  max-width: 700px;
}
</style>
