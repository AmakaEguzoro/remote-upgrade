<template>
  <div class="">
      <p>calling add merchant</p>
  </div>
</template>

<script>
export default {
  name: "addMerchant",
  methods: {
    close() {
      this.$modal.hideAll();
      console.log("calling");
    },
  },
};
</script>

<style></style>
