<template>
  <!-- sidebar -->
  <div class="sidebar">
    <div class="menu-items">
      <router-link to="/merchant" active-class="active"  class="side-btn">
        <div class="link-container">Merchant</div>
      </router-link>
      <router-link to="/terminal" active-class="active"  class="side-btn">
        <div class="link-container">Terminal</div>
      </router-link>
      <router-link to="/application" active-class="active"  class="side-btn">
        <div class="link-container">Application</div>
      </router-link>
      <router-link to="/model" active-class="active"  class="side-btn">
        <div class="link-container">Model</div>
      </router-link>
      <router-link to="/capk" active-class="active"  class="side-btn">
        <div class="link-container">CAPK</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sidebar'
}
</script>

<style scoped>

.sidebar {
  position: fixed;
  width: 150px;
  height: 100%;
  padding-top: 30px;
  color: #fff;
  background-color: #5dcc96;
  opacity: 1;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 15px;
  
}

.side-btn.active {
  position: relative;
  background-color: white ;
  border-radius: 30px 0px 0px 30px;
  height: 40px;
  color: #4b709a;
 
}
.side-btn {
  padding: 10px 25px;
  width: 100%;
  margin-top: 10px;
  cursor: pointer;
  font-size: 15px;
  align-items: center;
  color: #fff;
  background-color: transparent;
  text-decoration: none !important;
}
</style>
