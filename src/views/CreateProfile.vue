<style scoped>
  textarea {
    height: 300px;
  }
</style>

<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>Create your profile</h1>
    </header>
    <main>
      <form class="mx-auto">
        <div class="mb-3">
          <h2>Pseudo</h2>
          <input class="form-control" type="text" v-model="pseudo" />
        </div>
        <div class="mb-3">
          <h2>Intéressé.e par</h2>
          <div class="flex-wrap">
            <div class="flex-item mb-3" v-for="skill in data" :key="skill.name">
              <input type="checkbox" class="btn-check" :id="skill.name" autocomplete="off" v-model="skills" :value="skill.id" />
              <label class="btn btn-outline-dark" :for="skill.name">{{ skill.name }}</label>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <h2>Comment vous contacter ?</h2>
          <textarea class="form-control" v-model="contact" />
        </div>
        <button type="submit" class="btn btn-primary mb-3" @click.prevent="createProfile">Confirmer</button>
      </form>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  import { useFetch } from "../composables/useFetch";
  import { BASE_HEADERS } from "../constants/api";
  import { Tag } from "../models/Tag.model";
  import router from "../routes";
  import store from "../store";

  const { data } = useFetch<Tag[]>('tags', 'GET')
  const pseudo = ref('')
  const contact = ref('')
  const skills = ref([])

  const createProfile = async () => {
    await fetch('http://localhost:8000/api/v1/profiles', {
      method: 'POST',
      headers: { ...BASE_HEADERS, Authorization: store.getToken()},
      body: JSON.stringify({ user_id: store?.auth?.user?.id, pseudo: pseudo.value, contact: contact.value, tags: skills.value })
    })
    router.push({ path: '/profile' })
  }
</script>
