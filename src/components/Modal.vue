<template>
    <div>
        modal header
        <div class="header">{{title}}</div> 
        <div class="container">
        <!-- modal body -->
        <slot></slot>
        <hr>
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
    // props: {
    //   title: {
    //     type: String,
    //     required: true
    //   }
      
    // }
}
</script>
<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
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
} */
</style>