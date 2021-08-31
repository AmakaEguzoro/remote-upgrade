<template>
  <div class="bg">
    <section class="container-fluid ">
      <div class="row justify-content-center">
        <div class="col-md-4 welcome">
          Welcome to <b>ITEX</b> Terminal Management System
        </div>

        <div class="col-md-4">
          <form class="form-signin">
            <h3 class="form-signin-heading text-left">
              Hello,
              <p>Welcome back</p>
            </h3>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="username"
                v-model="username"
                placeholder="Username"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                name="password"
                v-model="password"
                placeholder="Password"
              />
            </div>

            <button class="btn btn-lg btn-block " @click.prevent="login">
              Login
            </button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      baseURL: "http://197.253.19.78:2001/api/user/login",
      loader: false,
    };
  },
  methods: {
    login() {
      const form = {
        login: this.username,
        password: this.password,
      };
      console.log(":: log ::", form);
      //   try{
      var qs = require("qs");
      var data = qs.stringify({
        login: form.login,
        password: form.password,
      });
      var config = {
        method: "post",
        url: "http://197.253.19.78:2001/api/user/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
      };

      this.axios(config)
        .then(function(response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function(error) {
          console.log(error);
        });

    //   this.axios
    //     .post(this.baseURL, form, {
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //     .then((res) => {
    //       console.log(res.json());
    //     })
    //     .catch((err) => {
    //       console.log(err.response);
    //     });
    //   console.log(this.username, this.password);

      //   const user= await this.axios.post(this.baseURL,form,{headers: {
      //        }   // remove headers
      //         })

      //     if (user.status=='200') {

      //           this.loader = false;
      //            this.$toast.open({
      //             message: `<p style="color:white;">${user}</p>`,
      //             type: "success",
      //             duration: 5000,
      //             dismissible: true,
      //             position: "top-right",
      //           });
      //         //   this.$router.push("/verifyemail");
      //         //   this.resetState();
      //         } else {
      //           this.loader = false;

      //           this.$toast.open({
      //             message: `<p style="color:white;">${user}</p>`,
      //             type: "error",
      //             duration: 5000,
      //             dismissible: true,
      //             position: "top-right",
      //           });
      //         }
      //       } catch (e) {

      //         this.loader = false;
      //         this.$toast.open({
      //           message: `<p style="color:white;">${e}</p>`,
      //           type: "error",
      //           duration: 5000,
      //           dismissible: true,
      //           position: "top-right",
      //         });
      //         console.log(e);
      //       }

      //}
      // mounted(){
    }, //     console.log(process.env.base_URL,"base url")
  },
}; // }
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap");
.bg {
  background-image: url("../assets/background.png");
  width: 115%;
  height: 70%;
  background-size: 100%;
  background-repeat: no-repeat;
  margin-top: 200px;
  position: fixed;
}
.form-signin {
  position: absolute;
  top: -15vh;
  background: #fff;
  padding: 50px;
  box-shadow: 0px 3px 50px #4b709a19;
  opacity: 1;
  text-align: center;
  width: 363px;
  height: 378px;
}

.form-signin-heading {
  margin-top: 10px;
  margin-left: -15px;
  margin-bottom: 50px;
  text-align: left;
  font-size: medium;
  letter-spacing: 0px;
  color: #4b709a;
}
.form-group {
  max-width: 380px;
  margin-top: -20px;
  background-color: #fff;
  padding: 10px 10px 10px;
  border-radius: 10px;
}
.form-group input[type="text"],
.form-group input[type="password"] {
  border-color: #4b709a;
  size: 5px;
  font-size: 13px;
  height: 40px;
}

.btn {
  background-color: #4b709a;
  color: white;
  font-size: 15px;
  border-radius: 4px;
  opacity: 1;
  height: 40px;
  width: 245px;
  left: 10px;
  position: relative;
}

::placeholder {
  color: #4b709a;
  font-size: 10px;
}

.welcome {
  height: 70px;
  max-width: 300px;
  margin-top: -80px;
  left: -120px;
  text-align: left;
  font-family: Poppins;
  font-size: 20px;
  color: #4b709a;
}
</style>
