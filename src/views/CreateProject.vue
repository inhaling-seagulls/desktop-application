<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>Définissez votre projet</h1>
    </header>
    <main>
      <form>
        <div class="mb-3">
          <h2>Nom</h2>
          <input class="form-control" type="text" v-model="name" />
        </div>
        <div class="mb-3">
          <h2>Technologies utilisées lors de ce projet</h2>
          <div class="flex-wrap">
            <div class="flex-item" v-for="skill in data" :key="skill.name">
              <input type="checkbox" class="btn-check" :id="skill.name" autocomplete="off" v-model="skills" :value="skill.id" />
              <label class="btn btn-outline-dark" :for="skill.name">{{ skill.name }}</label><br />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <h2>Description de votre projet</h2>
          <textarea class="form-control" v-model="description" />
        </div>
        <div class="mb-3">
          <h2>Choississez une image pour illustrer votre projet</h2>
          <input type="text" class="form-control" v-model="image" />
        </div>
        <button type="submit" class="btn btn-primary mb-3" @click.prevent="createProject">Confirmer</button>
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
  import store from '../store'

  const { data } = useFetch<Tag[]>('tags', 'GET')
  const name = ref('')
  const description = ref('')
  const skills = ref([])
  const image = ref('')

  const createProject = () => {
    store.fetchMyData(async () => {
      const id = store.auth.user?.profile.id

      await fetch(`http://localhost:8000/api/v1/profiles/${id}/projects`, {
        method: 'POST',
        headers: { ...BASE_HEADERS, Authorization: store.getToken()},
        body: JSON.stringify({
          name: name.value, 
          description: description.value, 
          tags: skills.value,
          image: image.value,
        })
      })

      router.push({ path: '/profile' })
    })

  }
</script>