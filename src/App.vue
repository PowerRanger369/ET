<template>

  <div class="app">
    <!-- This is where Vue Router will dynamically render the active route's component -->
    <router-view></router-view>
  </div>

</template>

<script>

export default {
  name: "App",
};

</script>
<style>

.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  justify-content: center;
}


</style>
