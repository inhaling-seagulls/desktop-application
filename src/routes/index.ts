import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Register from "../views/Register.vue";
import Project from "../views/Project.vue";
import Projects from "../views/Projects.vue";
import CreateProfile from "../views/CreateProfile.vue";
import CreateProject from "../views/CreateProject.vue";
import Profile from "../views/Profile.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About, meta: { auth: true } },
    { path: "/register", name: "register", component: Register },
    { path: "/project", name: "project", component: Project },
    { path: "/projects", name: "projects", component: Projects },
    { path: "/newprofile", name: "createprofile", component: CreateProfile },
    {
      path: "/create-project",
      name: "createproject",
      component: CreateProject,
    },
    { path: "/profile", name: "profile", component: Profile },
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
