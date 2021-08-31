<template>
  <div id="app">
    <home />
  </div>
</template>

<script>
import home from "../src/pages/home";

export default {
  name: "App",
  components: {
    home,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
#app {
  font-family: poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
