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
        <div v-if="store.auth.isLoggedIn" class="navbar-nav">
          <router-link class="nav-link" to="/profile">Profil</router-link>
          <router-link class="nav-link" to="/projects/1">Projets</router-link>
          <button @click="logout">Logout</button>
        </div>
        <div v-else class="navbar-nav">
          <router-link class="nav-link" to="/">Login</router-link>
          <router-link class="nav-link" to="/register">Register</router-link>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup lang="ts">
  import { useRouter } from "vue-router";
  import store from "./store";

  const router = useRouter()
  
  const logout = () => {
    store.signOut(() => {
      router.push({ path: '/' })
    })
  }
</script>
