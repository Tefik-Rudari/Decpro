import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../views/Projects/Projects/Projects.vue")
  },
  {
    path: "/services",
    name: "Services",
    component: () => import("../views/Services/Services.vue")
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: () => import("../views/ContactPage/ContactPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes: routes
});

export default router;
