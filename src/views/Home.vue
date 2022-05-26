<style scoped>
  header {
    text-align: center;
    margin: 100px 0 50px;
  }

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<template>
  <header>
    <h1>Bienvenue sur la plateforme !</h1>
  </header>
  <main>
    <div class="card shadow">
      <div class="card-body">
        <form class="clearfix" action="">
          <div class="mb-3">
            <label for="email" class="form-label">Email :</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
              v-model="email"
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="password"
              rows="3"
              v-model="password"
            />
          </div>
          <div v-if="store?.auth.error" class="alert alert-danger">Identifiants invalides</div>
          <button
            type="submit"
            class="btn btn-primary float-end mb-3"
            @click.prevent="login"
          >
            Se connecter
          </button>
        </form>
        <div class="text-center">
          <router-link class="nav-link" to="/register">Pas de compte ?</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import router from "../routes";
  import store from "../store";

  const email = ref('me@bewiwi.fr')
  const password = ref('bewiwi')

  const login = () => {
    store.signIn({
      email: email.value,
      password: password.value,
    }, onSignedIn)
  };

  const onSignedIn = () => {
    if (store.auth.isLoggedIn) {
      store.fetchMyData(onDataFetched)
    }
  }

  const onDataFetched = () => {
    if (store.auth.user?.profile) {
      router.push({ path: '/projects/1' })
    } else {
      router.push({ path: "/newprofile" });
    }
  }
</script>
