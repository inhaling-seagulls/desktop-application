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
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="password"
              rows="3"
            />
          </div>
          <button type="submit" class="btn btn-primary float-end mb-3" @click.prevent="login">Se connecter</button>
        </form>
        <div class="text-center">
          <router-link class="nav-link" to="/register">Pas de compte ?</router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
  import { defineComponent, inject } from "vue";
  import router from '../routes'

  export default defineComponent({
    setup() {
      const store: any = inject("store");

      const click = () => {
        store.signIn({
          email: "email@email.fr",
          password: "123",
        });

        console.log(store);
      };

      const test = "test";

      return { test, click };
    },
      methods: {
        login() {
          router.push({ path : '/newprofile' })
        }
      }
  });
</script>
