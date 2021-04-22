import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import Features from "../views/Features.vue";
import Service from "../views/service.vue";
import Downloud from "../views/downloud.vue";

const routes = [
  {
    path: "/",
    name: "About",
    component: About,
  },
  {
    path: "/features",
    name: "Features",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Features,
  },
  {
    path: "/service",
    name: "Service",
    component: Service,
  },
  {
    path: "/downloud",
    name: "Downloud",
    component: Downloud,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
