<template>
  <div>
    <!-- main dashboard -->
    <main>
      <div>
        <div class="dashboard-container">
          <!-- SEARCH -->
          <div class="row search">
            <!-- search by id -->
            <div class="col-md-6 terminal-search">
              <div class="terminal-id">
                <p>Terminal ID</p>
                <input
                  type="text"
                  class="search-ID"
                  placeholder="3473*******"
                />
              </div>

              <div class="terminal-model">
                <p>Model</p>          
            <select name="model" id="model" class="form-control input-model ">
              <option value="select Country" class="dropdown">-All Model-</option>
              <option value="Nigeria" class="dropdown-option">ITEX</option>
              <option value="Ghana" class="dropdown-option">Ghana</option>
              <option value="Togo" class="dropdown-option">Togo</option>
            </select>
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
            <ul>
              <li @click="callModal('viewTerminal', { msg: 'msg' })">
                <img class="flexicon-image" src="../assets/web.svg" /><a
                  >View</a
                >
              </li>
              <li @click="callModal('addTerminal', { msg: 'msg' })">
                <img class="flexicon-image" src="../assets/ui.svg" /><a
                >Add</a>
              </li>
              <li @click="callModal('editTerminal', { msg: 'msg' })">
                <img class="flexicon-image" src="../assets/archive.svg" /><a
                  >Edit</a
                >
              </li>
              <li>
                <img class="flexicon-image" src="../assets/rubbish.svg" /><a
                  >Delete</a
                >
              </li>
              <li>
                <img class="flexicon-image" src="../assets/open.svg" /><a
                  >Enable</a
                >
              </li>
              <li>
                <img class="flexicon-image" src="../assets/closed.svg" /><a
                  >Disable</a
                >
              </li>
              <li>
                <img class="flexicon-image" src="../assets/copy.svg" /><a
                  >Copy</a
                >
              </li>
              <li>
                <img class="flexicon-image" src="../assets/files.svg" /><a
                  >Batch Deploy</a
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
              <li>
                <img class="flexicon-image" src="../assets/interface.svg" /><a
                  >Schedule</a
                >
              </li>
              <li>
                <img class="flexicon-image" src="../assets/computer.svg" /><a
                  >Restore</a
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
              <td>ITEX integrated</td>
              <td></td>
              <td>Pax</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import addTerminal from "../pages/addTerminal.vue";
import editTerminal from "../pages/editTerminal.vue";
import viewTerminal from "../pages/viewTerminal.vue";
export default {
  name: "Terminal",
  data() {
    return {
      add: "",
    };
  },
  components: {},
  methods: {
    callModal(name, { msg }) {
      switch (name) {
        case "addTerminal":
          name = addTerminal;
          break;
        case "editTerminal":
          name = editTerminal;
          break;
          case "viewTerminal":
          name = viewTerminal;
          break;
      }
      this.$modal.show(
        name,
        { msg: msg },
        { adaptive: true, draggable: false, width: "60%", height: "80%", clickToClose: true }
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
  margin-right: 30px;
  margin-top: 5px;
}
.flexicon a {
  /* margin: 10px;   */
  font-size: 12px;
  margin-top: 10px;
}

.flexicon-image {
  width: 15px;
  height: 15px;
  /* margin-bottom: -10px; */
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

.terminal-search {
  display: flex;
}

.search-ID {
  width: 150px;
  height: 35px;
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

.input-model {
  width: 160px;
  height: 35px;
  font-size: 12px;
  color: #4b709a;
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
  width: 110px;
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
  width: 80px;
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
  margin-top: 27px;
  border-radius: 4px;
  opacity: 1;
  height: 35px;
  width: 80px;
}
</style>
