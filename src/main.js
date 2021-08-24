import Vue from 'vue'
import App from './App.vue'
 import router from './router.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from "axios";
import VueAxios from 'vue-axios';

 import VueToast from 'vue-toast-notification';
 // Import one of the available themes
 //import 'vue-toast-notification/dist/theme-default.css';
 import 'vue-toast-notification/dist/theme-sugar.css';

 Vue.use(VueAxios,axios);

 Vue.use(VueToast);
 //Vue.$toast.open({/* options */});
 let instance = Vue.$toast.open('You did it!');
 
 // Force dismiss specific toast
 instance.dismiss();
 // Dismiss all opened toast immediately
 Vue.$toast.clear();
new Vue({
    router,
    render:(h)=>h(App),
}).$mount("#app");

 



