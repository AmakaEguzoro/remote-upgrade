<template>
  <div>
    <navbar />
    <sidebar />

    <!-- main dashboard -->
    <main>
      <div class="dashboard-container">
        <!-- SEARCH -->
        <div class="row search">
          <!-- search by id -->
          <div class="col-md-3 merchant-id">
            <p>Merchant ID</p>
            <input type="text" class="search-merchant" />
          </div>

          <div class="col-md-3"></div>
          <!-- filter -->
          <div class="col-md-6 filter">
            <div class="merchant-contact">
              <p>Contact</p>
              <input type="text" class="search-contact" />
            </div>
            <div class="merchant-name">
              <p>Merchant Name</p>
              <input type="text" class="search-name" />
            </div>
            <div class="merchant-status">
              <p>Status</p>
              <input type="text" class="search-status" />
            </div>
            <button class="btn btn-lg ">Filter</button>
          </div>
        </div>
      </div>
      <br />

      <!-- modals  -->
      <div class="flexicon">
        <ul>
          <li>
            <img class="flexicon-image img-responsive" src="../../../web.svg" /><a>View</a>
          </li>
          <li>
            <img class="flexicon-image img-responsive" src="../../../ui.svg" /><a>Add</a>
          </li>
          <li>
            <img class="flexicon-image img-responsive" src="../../../archive.svg" /><a>Edit</a>
          </li>
          <li>
            <img class="flexicon-image img-responsive" src="../../../rubbish.svg" /><a
              >Delete</a
            >
          </li>
          <li>
            <img class="flexicon-image" src="../../../arrows.svg" /><a
              >Import</a
            >
          </li>
          <li>
            <img class="flexicon-image" src="../../../arrows.svg" /><a
              >Export</a
            >
          </li>
        </ul>
      </div>

      <!-- table -->
      <div class="table-responsive">
        <table class="table">
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
            <tr>
              <td>
                <span>
                  <input type="checkbox" id="selectAll" />
                  <label for="selectAll"></label>
                </span>
              </td>
              <td>D210</td>
              <td>ITEX integrated</td>
              <td></td>
              <td>Pax</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
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

.search-merchant {
  width: 80%;
  height: 50%;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.merchant-id {
  color: #4b709a;
  font-size: 12px;
}

.filter {
  display: flex;
  justify-content: space-between;
  float: right;
}
.search-contact {
  width: 80%;
  height: 50%;
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
  width: 80%;
  height: 50%;
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
  width: 80%;
  height: 50%;
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
  height: 50%;
  margin-top: 33px;
 
}
</style>
