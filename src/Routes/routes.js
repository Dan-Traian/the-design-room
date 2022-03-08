import Vue from "vue";
import VueRouter from "vue-router";
import Frontpage from "@/components/Frontpage";

Vue.use(VueRouter);

const routes = [
  { path: "*", component: Frontpage },
  { path: "/", component: Frontpage },
  { path: "/home", component: Frontpage },
];

let router = new VueRouter({
  routes,
  linkExactActiveClass: "active",
  mode: "history",
});

export default router;
