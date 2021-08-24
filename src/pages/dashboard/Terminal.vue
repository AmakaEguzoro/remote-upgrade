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
          <div class="col-md-6 terminal-search">
            <div class="terminal-id">
              <p>Terminal ID</p>
              <input type="text" class="search-ID" placeholder="3473*******" />
            </div>

            <div class="terminal-model">
              <p>Model</p>
              <input type="text" class="search-model" placeholder="All Model" />
            </div>
          </div>

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
          <p>View</p>
          <p>Add</p>
          <p>Edit</p>
          <p>Delete</p>
          <p>Enable</p>
          <p>Disable</p>
          <p>Copy</p>
          <p>Batch Deploy</p>
          <p>Import</p>
          <p>Export</p>
          <p>Schedule</p>
          <p>Restore</p>
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
            <th>Terminal ID</th>
            <th>Model</th>
            <th>Status</th>
            <th>Download SN</th>
            <th>Last Download Time</th>
            <th>Download Status</th>
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
            <td></td>
            <td></td>
            <td></td>
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
  name:"Terminal",
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
  display: flex;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  border: 2px solid #4b6f99;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #fff;
  opacity: 1;
}
.flexicon p {
  float: left;
  margin: 10px;
  color: #5dcc96;
  margin-top: 8px;
  font-size: 12px;
}

.table {
  width: 100%;
  border: 2px solid #4B709A;
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