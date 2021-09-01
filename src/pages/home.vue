<template>
  <div class="">
    <Navbar />
    <Sidebar />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style></style>
