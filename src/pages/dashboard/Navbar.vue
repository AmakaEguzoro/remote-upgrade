<template>
  <!-- navbar -->
  <!-- Image and text -->
  <nav class="navbar">
    <div class="navbar-brand">
      <img class="brand-logo  img-fluid" src="../../../logo.png" />
      <p>Terminal Management System</p>
    </div>

    <div class="profile">
      <img class="profile-image" src="../../../user.svg" />
      <p
        class="nav-link dropdown-toggle"
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Ademola
      </p>
    </div>
  </nav>
</template>
<script>
export default {
  setup() {},
};
</script>

<style scoped>
.navbar {
  height: 70px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 50px #4b709a19;
  opacity: 1;
}
.navbar-brand {
  margin-left: 50px;
}

.navbar-brand p {
  font-size: 12px;
}

.brand-logo {
  width: 120px;
  height: auto;
}
.profile {
  margin-right: 50px;
  text-align: center;
}
.profile p {
  font-size: 12px;
  color: #4b709a;
}
.profile-image {
  width: 29px;
  height: 29px;
}
</style>