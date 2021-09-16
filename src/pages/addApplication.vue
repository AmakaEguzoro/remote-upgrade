<template>
  <div>
    <!-- modal head -->
    <div class="header">
      <p>Add Application</p>
    </div>

    <br>
    <!-- modal body -->
    <div class="container">
      <div class="row">
        <div class=" col-md-6 model-detail">
          Model
          <input type="text" class="form-control model-name" />
        </div>
        <div class=" col-md-6 app-file">
          App File
          <input type="text" class="form-control file-name" />
        </div>
      </div>
      <hr class="dotted" />
      <div class="row">
          <div class="form-check form-check-inline col">
            <label class="form-check-label col-lg-3" for="inlineCheckbox1">Application Name</label>
            <input type="text" class="form-control app-name ">
          </div>

           <div class="form-check form-check-inline col">
            <label class="form-check-label col-lg-3" for="inlineCheckbox1">Application Version</label>
            <input type="text" class="form-control app-version ">
          </div>

        </div>
        <div class="row">
          <div class="form-check form-check-inline col">
            <label class="form-check-label col-lg-3" for="inlineCheckbox1">Program File Name</label>
            <input type="text" class="form-control program-name ">
          </div>

           <div class="form-check form-check-inline col">
            <label class="form-check-label col-lg-3" for="inlineCheckbox1">Program File Version</label>
            <input type="text" class="form-control program-version ">
          </div>
        </div>
        <div class="form-check form-check-inline col">
            <label class="form-check-label " for="inlineCheckbox1">Description</label>
            <input type="text" class="form-control description ">
          </div>
        <hr class="dotted" />
        <div class="row">
        <div class=" col-md-6 organisation-name">
          Organisation
          <input type="text" class="form-control organisation" />
        </div>
        <div class=" col-md-6 expiration-period">
          Expiration date/time
          <input type="text" class="form-control expiration-date" />
        </div>
      </div>
      <br>
      <div class="row">
        <div class="selections col">
              <input type="checkbox" id="selectAll" />
              Share to Sub organisation
            </div>
        <div class="selections col">
              <input type="checkbox" id="selectAll" />
              Make this an Application Manager
            </div>       
      </div>
    </div>
    <hr />
    <!-- modal footer -->
    <div class="buttons">
      <button type="button" class="btn back-btn">Back</button>
      <button type="button" class="btn done-btn">Done</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "viewApplication",
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
.model-detail, .app-file, .form-check-label, .organisation-name, .expiration-period, .selections{
  font-family: poppins;
  font-size: 12px;
  color:#4B709A;
}
.form-control{
 background: #EFEFEF 0% 0% no-repeat padding-box;
}
.model-name{
  width: 234px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid #4b709a;
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
