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
          <div class="col-md-3 terminal-search">
            <div class="terminal-id">
              <p>Model</p>
              <input type="text" class="search-ID" placeholder="ITEX" />
            </div>
          </div>

          <div class="col-md-3"></div>

          <!-- filter -->
          <div class="col-md-6 filter">
            <div class="merchant-contact">
              <p>Model</p>
              <input type="text" class="search-contact" />
            </div>
            <div class="merchant-name">
              <p>Model Name</p>
              <input type="text" class="search-name" />
            </div>
            <div class="merchant-status">
              <p>Status</p>
              <input type="text" class="search-status" />
            </div>
            <button class="btn btn-lg btn-block">Filter</button>
          </div>
        </div>

        <br />
        <!-- modals -->
        <div class="flexicon">
          <ul>
            
            <li>
              <img class="flexicon-image" src="../../../rubbish.svg" /><a>Delete</a>
            </li>
            <li>
              <img class="flexicon-image" src="../../../arrows.svg" /><a>Import</a>
            </li>
            <li>
              <img class="flexicon-image" src="../../../arrows.svg" /><a>Export</a>
            </li>
          </ul>
          
        </div>
      </div>

      <!-- table -->
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
            <th>Model Name</th>
            <th>Terminal os Platform</th>
            <th>Update By</th>
            <th>Update Time</th>
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
            <td>iTEX integrated</td>
            <td></td>
            <td>Pax</td>
          </tr>
        </tbody>
      </table>
    </main>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";

export default {
  components: { Navbar, Sidebar },
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
.flexicon ul{
  list-style-type: none;
  display: flex;
  color: #5dcc96;
  cursor: pointer;
}
.flexicon li{
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
  border: 2px solid #4B709A;
  opacity: 1;
}
.table th {
  border: 2px solid #4b709a;
  text-align: center;
  font-size: 10px;
  color: #4b709a;
  height: 30px;
}
.table td {
  text-align: center;
  font-size: 12px;
}

.terminal-search {
  display: flex;
}

.search-ID {
  width: 150px;
  height: 30px;
  margin-top: -7px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.terminal-search ::placeholder {
  color: #4b709a;
  font-size: 10px;
  padding-left: 10px;
}

.terminal-id {
  color: #4b709a;
  font-size: 12px;
  margin-right: 20px;
}

.search-model {
  width: 120px;
  height: 30px;
  margin-top: -7px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.terminal-model {
  color: #4b709a;
  font-size: 12px;
}

.filter {
  display: flex;
  justify-content: space-between;
  float: right;
}
.search-contact {
  width: 110px;
  height: 30px;
  margin-top: -7px;
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
  width: 110px;
  height: 30px;
  margin-top: -7px;
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
  width: 80px;
  height: 30px;
  margin-top: -7px;
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
  margin-top: 27px;
  border-radius: 4px;
  opacity: 1;
  height: 30px;
  width: 80px;
}
</style>