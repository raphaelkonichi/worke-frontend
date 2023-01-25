import Vue from "vue";
import VueRouter from "vue-router";
import LandingMobile from "../views/LandingMobile.vue";
import LandingWeb from "../views/LandingWeb.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import Groups from "../views/Groups.vue";
import Employees from "../views/Employees.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: LandingMobile,
  },
  {
    path: "/Empresas",
    name: "Empresas",
    component: LandingWeb,
  },
  {
    path: "/Login",
    name: "loginCard",
    component: Login,
    meta: {
      header: 0,
    },
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/Groups",
    name: "Groups",
    component: Groups,
  },
  {
    path: "/Employees",
    name: "Employees",
    component: Employees,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
