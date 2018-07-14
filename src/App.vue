<template>
  <div id="app">
    <img class="logo" src="./assets/logo1.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 1200px;
  margin: auto;
}
  .logo {
    display: block;
    width: 200px;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
  }
</style>
