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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
