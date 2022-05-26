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
    <h1>Créer un compte</h1>
  </header>
  <main>
    <form action="">
      <div class="card shadow">
        <div class="card-body">
          <div class="mb-3">
            <label for="email" class="form-label">Nom :</label>
            <input
              type="text"
              class="form-control"
              id="name"
              v-model="name"
            />
          </div>
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
          <div class="mb-3">
            <label for="confirmpassword" class="form-label">Confirmer votre mot de passe :</label>
            <input
              type="password"
              class="form-control"
              id="confirmpassword"
              rows="3"
              v-model="password_confirmation"
            />
          </div>
          <button type="submit" class="btn btn-primary float-end" @click.prevent="register">S'enregistrer</button>
        </div>
      </div>
    </form>
  </main>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  import store from "../store";

  const router = useRouter()
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const password_confirmation = ref('')
  
  const register = () => {
    store.signUp({
      name: name.value, 
      email: email.value, 
      password: password.value, 
      password_confirmation: password_confirmation.value
    }, onSignup)
  }

  const onSignup = () => {
    router.push({ path: '/newprofile' })
  }
</script>