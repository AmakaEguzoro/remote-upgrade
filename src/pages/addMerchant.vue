<template>
  <div>
    <!-- modal head -->
    <div class="header">
      <p>Add Merchant</p>
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
      <div>
        <p class="merchant-type">Merchant Type</p>

        <div class="row">
          <div class="col mx-1">
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Business To Business
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Convinence
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Public Sector
            </div>
          </div>

          <div class="col mx-1">
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Internet
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Petroleum
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Retail W/tip
            </div>
          </div>

          <div class="col mx-1">
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Restaurant
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Fast Food
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Mail/Phone
            </div>
          </div>

          <div class="col mx-1">
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              lodging
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Shopping Mall
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Hotel
            </div>
          </div>
          <div class="col mx-1">
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Retail
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Utility
            </div>
            <div class="selections">
              <input type="checkbox" id="selectAll" />
              Others
            </div>
          </div>
        </div>
        <hr class="dotted" />
        <div class="row">
          <div class="form-check form-check-inline col">
            <label class="form-check-label col-md-4" for="inlineCheckbox1">Country</label>
            <select name="country" id="country" class="form-control input-country">
              <option value="select Country" class="dropdown">-Select Country-</option>
              <option value="Nigeria" class="dropdown-option">Nigeria</option>
              <option value="Ghana" class="dropdown-option">Ghana</option>
              <option value="Togo" class="dropdown-option">Togo</option>
            </select>
          </div>
           <div class="form-check form-check-inline col">
            <label class="form-check-label col-md-6" for="inlineCheckbox1">State/Province</label>
            <select name="country" id="country" class="form-control input-state ">
              <option value="select Country" class="dropdown">-Select State-</option>
              <option value="Nigeria" class="dropdown-option">Lagos</option>
              <option value="Ghana" class="dropdown-option">Abuja</option>
              <option value="Togo" class="dropdown-option">Port Harcourt</option>
            </select>
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
            <select name="organisation" id="organisation" class="form-control input-organisation ">
              <option value="select Country" class="dropdown">-Select Organisation-</option>
              <option value="Nigeria" class="dropdown-option">ITEX</option>
              <option value="Ghana" class="dropdown-option">Ghana</option>
              <option value="Togo" class="dropdown-option">Togo</option>
            </select>
          </div>
      </div>
    </div>
    <hr />
    <!-- modal footer -->
    <div class="buttons">
      <button onclick="goBack()" type="button" class="btn back-btn">Back</button>
      <button type="button" class="btn done-btn">Done</button>
    </div>
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

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
.header {
  height: 40px;
  width: 240px;
  text-align: center;
  color: #fff;
  font-family: poppins;
  padding-top: 7px;
  background: #5dcc96 0% 0% no-repeat padding-box;
  border-radius: 0px 70px 70px 0px;
  opacity: 1;
}

.container {
  padding-left: 40px;
  padding-right: 40px;
}
.row {
  justify-content: space-evenly;
}

.merchant-id {
  color: #4b709a;
  font-family: poppins;
  font-size: 12px;
  margin-top: 10px;
}
.merchant-name {
  color: #4b709a;
  font-family: poppins;
  font-size: 12px;
  margin-top: 10px;
}
.merchant-email {
  color: #4b709a;
  font-family: poppins;
  font-size: 12px;
  margin-top: 10px;
}
.merchant-number {
  color: #4b709a;
  font-family: poppins;
  font-size: 12px;
  margin-top: 10px;
}
.merchant-description {
  color: #4b709a;
  font-family: poppins;
  font-size: 12px;
  margin-top: 10px;
}
.input-id {
  width: 204px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}
.input-name {
  width: 250px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}
.email {
  width: 262px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}
.phone-number {
  width: 212px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}
.description {
  width: 362px;
  height: 40px;
  box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}
.form-control {
  margin-top: 7px;
}
.selections {
  color: #4b709a;
  font-family: Poppins;
  font-size: 12px;
}
.merchant-type{
  font-family: Poppins;
  font-size: 14px;
  color:#4b709a;
}
.address{
   box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}
.postal{
  box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}
.input-organisation, .input-state, .input-country{
  box-sizing: border-box;
  border: 1px solid #4b709a;
  border-radius: 4px;
  font-size: 12px;
  color: #4b709a;
  opacity: 1;
}
.form-check-label{
  font-family: poppins;
  font-size: 12px;
  color: #4b709a;
}
.dropdown{
  font-size: 12px;
  font-family: Poppins;
  color: #4b709a;
}

.dropdown-option{
  font-size: 15px;
  font-family: Poppins;
  color: #4b709a;
}
/* label{
  font-size:10px;
  font-family: Poppins;
  letter-spacing: 0px;
  color: #BCBCBC;
  opacity: 1;
} */
.dotted{
  border-top: 1px dashed rgb(211, 208, 208);
}
.buttons {
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
  background: #d3d3d3 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #4b709a19;
  border-radius: 4px;
  opacity: 1;
}
.done-btn {
  color: white;
  font-family: poppins;
  font-size: 12px;
  height: 40px;
  width: 80px;
  background: #4b709a 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 6px #4b709a19;
  border-radius: 4px;
  opacity: 1;
}
</style>
