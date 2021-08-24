<template>
  <div>
    <navbar />
    <sidebar />

    <main >
      <div class="row display-cards">
        <div class="card master-card col-md-3">
          <p class="label">Number of terminals supported</p>
          <p class="amount">100,000,000</p>
        </div>
        <div class="card visa col-md-3">
          <p class="label">Number of terminals supported</p>
          <p class="amount">134,000,000</p>
        </div>
        <div class="card verve col-md-3">
          <p class="label">Number of terminals supported</p>
          <p class="amount">14,000,000</p>
        </div>
        <div class="card master-card col-md-3">
          <p class="label">Number of terminals supported</p>
          <p class="amount">500,000</p>
        </div>
      </div>

      <br />

      <div class="row">
        <div class="col-md-6"></div>

        <div class="col-md-6 filter">
          <div class="merchant-contact">
            <input
              type="text"
              class="search-contact"
              placeholder="All Issuer"
            />
          </div>
          <div class="merchant-status">
            <input
              type="text"
              class="search-status"
              placeholder="Search by Terminal ID"
            />
          </div>
          <button class="btn btn-lg btn-block">Add Card Scheme</button>
        </div>
      </div>
      <br>
      <!-- table -->
      <table class="table table-striped">
        <!-- table head -->
        <thead>
          <tr>
            <th>
              <span>
                <input type="checkbox" id="checkbox1" name="option[]" />
                <label for="selectAll"></label>
              </span>
            </th>
            <th>S/N</th>
            <th>TERMINAL ID</th>
            <th>EXPONENT</th>
            <th>ISSUER</th>
            <th>EXPONENT</th>
            <th>RID LIST</th>
            <th>KEY LENGTH</th>
            <th>SHAI</th>
            <th>KEY TYPE</th>
            <th>EXPIRES</th>
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
            <td>1</td>
            <td>1223456789</td>
            <td>SDFGHJKHGFDRTYYYYYYYY</td>
            <td>Mastercard</td>
            <td>03</td>
            <td>A0000004</td>
            <td>1023</td>
            <td>GAEURTYUDI...</td>
            <td>TEST</td>
            <td>31/02/23</td>
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
  name: 'Capk',
  components: { Navbar, Sidebar },
};
</script>
<style scoped>
main {
  min-height: 100%;
  padding: 1rem 1rem 2rem 13rem;
  margin-right: 30px;
  background-color: #ffffff;
}

.card {
  width: 190px;
  height: 125px;
  background: #ffffff1a 0% 0% no-repeat padding-box;
  border: 3px solid #4b709a;
  border-radius: 8px;
  opacity: 1;
}
.display-cards {
  justify-content: space-between;
}
/* .display-cards p{
  font-size: 10px;
} */
.label {
  color: #707070;
  font-size: 9px;
}
.amount {
  font-size: 12px;
  margin-top: -13px;
}

.filter {
  display: flex;
  justify-content: space-between;
  float: right;
}
.search-contact {
  width: 120px;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.merchant-contact {
  color: #4b709a;
  font-size: 12px;
}

.merchant-contact ::placeholder {
  font-size: 8px;
  color: #4b709a;
}

.search-status {
  width: 130px;
  height: 30px;
  box-sizing: border-box;
  border: 2px solid #4b709a;
  border-radius: 4px;
  opacity: 1;
}

.merchant-status {
  color: #4b709a;
  font-size: 12px;
}

.merchant-status ::placeholder {
  font-size: 8px;
  color: #707070;
}
.btn {
  background-color: #4b709a;
  color: white;
  font-size: 10px;
  border-radius: 4px;
  opacity: 1;
  height: 30px;
  width: 130px;
}

.table {
  width: 100%;
  border: 1px solid #C7C7C7;
  border-radius: 4px;
  opacity: 1;
}
.table th {
  border: 1px solid #C7C7C7;
  text-align: center;
  font-size: 10px;
  color: #c7c7c7;
}
.table td {
  text-align: left;
  font-size: 10px;
  letter-spacing: 0px;
  color: #253A66;
  text-transform: uppercase;
  opacity: 0.77;
}

</style>
