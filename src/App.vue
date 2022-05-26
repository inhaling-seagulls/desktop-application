<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Match projects</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div v-if="false" class="navbar-nav">
          <router-link class="nav-link" to="/profile">Profil</router-link>
          <router-link class="nav-link" to="/projects">Projets</router-link>
          <button @click="logout">Logout</button>
        </div>
        <div v-else class="navbar-nav">
          <router-link class="nav-link" to="/">Login</router-link>
          <router-link class="nav-link" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
  <NavigationForTest />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavigationForTest from "./components/NavigationForTest.vue";

export default defineComponent({
  components: {
    NavigationForTest,
  },
  setup() {},
  methods: {
    logout() {},
  },
});
</script>
