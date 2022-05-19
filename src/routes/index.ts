import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About, meta: { auth: true } },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth && !store.auth.isLoggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
