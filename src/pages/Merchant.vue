<template>
  <div>
    <!-- main dashboard -->
    <main>
      <div class="dashboard-container">
        <!-- SEARCH -->
        <div class="row search">
          <!-- search by id -->
          <div class="col-md-3 merchant-id"> 
            <p>Merchant ID</p>          
            <select name="organisation" id="organisation" class="form-control input-organisation ">
              <option value="select Country" class="dropdown">-Select ID-</option>
              <option value="Nigeria" class="dropdown-option">ITEX</option>
              <option value="Ghana" class="dropdown-option">Ghana</option>
              <option value="Togo" class="dropdown-option">Togo</option>
            </select>
         
          </div>

          <div class="col-md-3"></div>
          <!-- filter -->
          <div class="col-md-6 filter">
            <div class="merchant-contact col">
              <p>Contact</p>
              <input type="text" class="search-contact" />
            </div>
            <div class="merchant-name col">
              <p>Merchant Name</p>
              <input type="text" class="search-name" />
            </div>
            <div class="merchant-status col">
              <p>Status</p>
              <input type="text" class="search-status" />
            </div>
            <button class="btn btn-lg col ">Filter</button>
          </div>
        </div>
      </div>
      <br />

      <!-- modals  -->
      <div class="flexicon">
        <ul>
          <li @click="callModal('viewMerchant', { msg: 'msg' })">
            <img
              class="flexicon-image img-responsive"
              src="../assets/web.svg"
            /><a>View</a>
          </li>
          <li @click="callModal('addMerchant', { msg: 'msg' })">
            <img
              class="flexicon-image img-responsive"
              src="../assets/ui.svg"
            /><a>Add</a>
          </li>
          <li @click="callModal('editMerchant', { msg: 'msg' })">
            <img
              class="flexicon-image img-responsive"
              src="../assets/archive.svg"
            /><a>Edit</a>
          </li>
          <li>
            <img
              class="flexicon-image img-responsive"
              src="../assets/rubbish.svg"
            /><a>Delete</a>
          </li>
          <li>
            <img class="flexicon-image" src="../assets/arrows.svg" /><a
              >Import</a
            >
          </li>
          <li>
            <img class="flexicon-image" src="../assets/arrows.svg" /><a
              >Export</a
            >
          </li>
        </ul>
      </div>
      
      <!-- table -->
      
      <div class="table-responsive" id="app">
        <table class="table" >
          <!-- table head -->
          <thead>
            <tr>
              <th>
                <span>
                  <input type="checkbox" id="checkbox1" name="option[]" />
                  <label for="selectAll"></label>
                </span>
              </th>
              <th>Merchant ID</th>
              <th>Merchant name</th>
              <th>Contact</th>
              <th>Organisation</th>
            </tr>
          </thead>
          <!-- table body -->
          <tbody>
            <tr >
              <td>
                <span>
                  <input type="checkbox" id="selectAll" />
                  <label for="selectAll"></label>
                </span>
              </td>
              <td>D210</td>
              <td>Cosmetic Intelligence</td>
              <td></td>
              <td>PAX</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import addMerchant from "../pages/addMerchant.vue";
import editMerchant from "../pages/editMerchant.vue";
import viewMerchant from "../pages/viewMerchant.vue";
export default {
  name: "Merchant", 

  data() {
    return {
      add: "",
    };
  },
  components: {},
  methods: {
    callModal(name, { msg }) {
      switch (name) {
        case "addMerchant":
          name = addMerchant;
          break;
        case "editMerchant":
          name = editMerchant;
          break;
        case "viewMerchant":
          name = viewMerchant;
          break;
      }
      this.$modal.show(
        name,
        { msg: msg },
        { adaptive: true, draggable: false, width: "60%", height: "100%", clickToClose: true }
      );
    },
  },
  
};
</script>

<style scoped>
main {
  min-height: 100%;
  padding: 1rem 1rem 2rem 14rem;
  background-color: #ffffff;
}

.flexicon {
  height: 40px;
  width: 100%;
  border: 2px solid #4b6f99;
  border-radius: 4px;
  background-color: #fff;
  opacity: 1;
  margin-bottom: 10px;
}

.flexicon ul {
  list-style-type: none;
  display: flex;
  color: #5dcc96;
  cursor: pointer;
}

.flexicon li {
  margin-right: 20px;
}
.flexicon a {
  float: left;
  margin: 10px;
  font-size: 12px;
}

.flexicon-image {
  width: 15px;
  height: 15px;
  margin-bottom: -10px;
}

.table {
  width: 100%;
  border: 2px solid #4b709a;
  opacity: 1;
}
.table th {
  border: 2px solid #4b709a;
  text-align: center;
  font-size: 12px;
  color: #4b709a;
  height: 30px;
}
.table td {
  text-align: center;
  font-size: 12px;
}

.input-organisation {
  width: 200px;
  height: 35px;
  font-size: 12px;
  color: #4b709a;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.merchant-id {
  color: #4b709a;
  font-size: 15px;
  
}

.filter {
  display: flex;
  
  float: right;
}
.search-contact {
  width: 130px;
  height: 35px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.merchant-contact {
  color: #4b709a;
  font-size: 12px;
}

.search-name {
  width: 180px;
  height: 35px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.merchant-name {
  color: #4b709a;
  font-size: 12px;
}

.search-status {
  width: 100px;
  height: 35px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.merchant-status {
  color: #4b709a;
  font-size: 12px;
}

.btn {
  background-color: #4b709a;
  color: white;
  font-size: 12px;
  border-radius: 4px;
  opacity: 1;
  height: 35px;
  margin-top: 33px;
}
</style>
