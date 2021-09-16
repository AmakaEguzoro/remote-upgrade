<template>
  <div>
    <!-- modal head -->
    <div class="header">
      <p>View Terminal</p>
    </div>
    <br />
    <!-- modal body -->
    <div class="container">
      <div class="row">
        <div class="col-md-6 terminal-id">
          Terminal ID
          <input type="text" class="form-control input-id" />
        </div>
        <div class="col-md-6 model-name">
          Model
          <input type="text" class="form-control input-model" />
        </div>
        
      </div>
      <div class="row">
        <div class=" col-md-6 terminal-caption">
          Caption
          <input type="text" class="form-control caption" />
        </div>
        <div class=" col-md-6 terminal-description">
          Description
          <input type="text" class="form-control description" />
        </div>
      </div>
       <hr class="dotted"/>
    <div class="row">
      
        <div class="col-md-6 selections">
              <input type="checkbox" id="selectAll" />
              Limit download time
              <br>
              No download ENV parameter
              <p>Yes</p> 
            </div>
      
      
        <div class="col-md-6 selections">
              <input type="checkbox" id="selectAll" />
              Limit download interval
              <br>
              No download ENV parameter
              <p>No</p> 
            </div>
      
    </div>
    <hr class="dotted"/>
    <div class="row">
        <div class="col-md-6 start-terminal">
          Start date/time
          <input type="text" class="form-control input-period" />
        </div>
        <div class="col-md-6 terminal-expiration">
          Expiration date/time
          <input type="text" class="form-control input-expiration" />
        </div>        
      </div>
      <br>
      <div class="selections">
              <input type="checkbox" id="selectAll" class="delete-application" />
              Delete Application
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
  name: "viewTerminal",
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
.terminal-id, .model-name, .terminal-caption, .terminal-description, .start-terminal, .terminal-expiration{
  font-family: poppins;
  font-size: 12px;
  color: #4B709A;
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
