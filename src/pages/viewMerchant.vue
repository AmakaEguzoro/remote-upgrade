<template>
  <div>
    <!-- modal head -->
    <div class="header">
      <p>View Merchant</p>
    </div>
    <br />
    <!-- modal body -->
    <div class="container">
      <div class="row">
        <div class="col-md-4 merchant-id">
          Merchant ID
          <input type="text" class="form-control input-id" />
        </div>
        <div class="col-md-4 merchant-name">
          Merchant Name
          <input type="text" class="form-control input-name" />
        </div>
        <div class="col-md-4 merchant-email">
          Email
          <input type="text" class=" form-control email" />
        </div>
      </div>
      <div class="row">
        <div class=" col-md-6 merchant-number">
          Phone Number
          <input type="text" class="form-control phone-number" />
        </div>
        <div class=" col-md-6 merchant-description">
          Description
          <input type="text" class="form-control description" />
        </div>
      </div>
      <hr class="dotted" />
      <p class="merchant-type">Merchant type: Business To Business  |  Internet  |  Restaurant  |  Shopping Mall  |  Utility</p>
      <hr class="dotted" />

        <div class="row">
          <div class="form-check form-check-inline col">
            <label class="form-check-label col-md-4" for="inlineCheckbox1">Country</label>
            <input type="text" class="form-control country ">
          </div>

           <div class="form-check form-check-inline col">
            <label class="form-check-label col-md-6" for="inlineCheckbox1">State/Province</label>
            <input type="text" class="form-control state ">
          </div>

           <div class="form-check form-check-inline col">
            <label class="form-check-label col-md-4" for="inlineCheckbox1">Postal Code</label>
            <input type="text" class="form-control postal ">
          </div>
        </div>
        <div class="form-check form-check-inline ">
            <label class="form-check-label col-md-4" >Address</label>
            <input type="text" class="form-control address">
          </div>
          <hr class="dotted" />
          <div class="form-check form-check-inline ">
            <label class="form-check-label col-md-4" for="inlineCheckbox1">Organisation</label>
            <input type="text" class="form-control organisation">
          </div>
      
    <hr />
    <!-- modal footer -->
    <div class="buttons">
      <button type="button" class="btn back-btn">Back</button>
      <button type="button" class="btn done-btn">Done</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewMerchant",
  methods: {
    close() {
      this.$modal.hideAll();
      console.log("calling");
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
.header{
    height: 40px;
    width: 240px;
    text-align: center;
    color: #fff;
    font-family: poppins;
    padding-top: 7px;
    background: #5DCC96 0% 0% no-repeat padding-box;
    border-radius: 0px 70px 70px 0px;
    opacity: 1;
}
.merchant-id, .merchant-name, .merchant-email, .merchant-number, .merchant-description, .merchant-type, .form-check-label{
  font-family: poppins;
  font-size: 12px;
  color: #4B709A;
}
.form-control{
  background: #EFEFEF 0% 0% no-repeat padding-box;
  border-radius: 4px;
  opacity: 1;
}
.dotted{
  border-top: 1px dashed rgb(211, 208, 208);
}

.buttons{
  display: flex;
  align-items: center;
  justify-content: center;
}
.back-btn {
  color: white;
  font-family: poppins;
  font-size: 12px;
  height: 40px;
  width: 80px;
  background: #D3D3D3 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #4B709A19;
  border-radius: 4px;
  opacity: 1;
}
.done-btn {
 color: white;
  font-family: poppins;
  font-size: 12px;
  height: 40px;
  width: 80px;
  background: #4B709A 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #4B709A19;
  border-radius: 4px;
  opacity: 1;
}</style>
