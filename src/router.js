import Vue from "vue";
import Router from "vue-router";
import Login from "./pages/Login.vue";
import Merchant from "./pages/Merchant.vue";
import Terminal from "./pages/Terminal.vue";
import Application from "./pages/Application.vue";
import Model from "./pages/Model.vue";
import Capk from "./pages/Capk.vue";

Vue.use(Router);
export default new Router({
  routes: [
    { path: "", name: "Login", component: Login },
    { path: "/merchant", name: "Merchant", component: Merchant },
    { path: "/terminal", name: "Terminal", component: Terminal },
    { path: "/application", name: "Application", component: Application },
    { path: "/model", name: "Model", component: Model },
    { path: "/capk", name: "Capk", component: Capk },
  ],

  mode: "history",
});
