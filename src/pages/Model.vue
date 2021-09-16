<template>
  <div>
   

    <!-- main dashboard -->
    <main>
    <div>
      <div class="dashboard-container">
        <!-- SEARCH -->
        <div class="row search">
          <!-- search by id -->
          <div class="col-md-3 model-search">
            Model          
            <select name="model" id="model" class="form-control input-model ">
              <option value="select Country" class="dropdown">D210</option>
              <option value="Nigeria" class="dropdown-option">F456</option>
              <option value="Ghana" class="dropdown-option">S347</option>
              <option value="Togo" class="dropdown-option">D312</option>
            </select>
          </div>

          <div class="col-md-3"></div>

          <!-- filter -->
          <div class="col-md-6 filter">
            <div class="model-number col">
              Model
              <input type="text" class="search-number" />
            </div>
            <div class="merchant-name col">
              Version
              <input type="text" class="search-name" />
            </div>
            <div class="merchant-status col">
              Status
              <input type="text" class="search-status" />
            </div>
            <button class="btn btn-lg btn-block col">Filter</button>
          </div>
        </div>

        <br />
        <!-- modals -->
        <div class="flexicon">
          <ul>
            <li>
              <img class="flexicon-image" src="../assets/rubbish.svg" /><a
                >Delete</a
              >
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
    </div>
    </main>
  </div>
</template>

<script>

export default {
    
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
  font-size: 10px;
  color: #4b709a;
  height: 30px;
}
.table td {
  text-align: center;
  font-size: 12px;
}



.input-model {
 width: 200px;
  height: 35px;
  font-size: 12px;
  color: #4b709a;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}


.model-search {
  color: #4b709a;
  font-size: 15px;
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
.search-number {
  width: 120px;
  height: 40px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.model-number {
  color: #4b709a;
  font-size: 12px;
}

.search-name {
  width: 150px;
  height: 40px;
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
  height: 40px;
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
  height: 40px;
  width: 80px;
}
</style>
