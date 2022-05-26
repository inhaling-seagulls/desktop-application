<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>{{ store.auth.user?.name }}</h1>
      <div>🖊️</div>
    </header>
    <main>
      <div class="row mb-3">
        <div class="col">
          <h2>Intéressé.e par</h2>
          <div>
            <span class="badge rounded-pill bg-primary mx-1" v-for="tag in store.auth.user?.profile.tags">
              {{ tag.name }}
            </span>
          </div>
        </div>
        <div class="col">
          <h2>Vous pouvez me contacter</h2>
          <p>{{ store.auth.user?.profile.contact }}</p>
        </div> 
      </div>
      <div class="mb-3">
        <h2>Mes projets</h2>
        <router-link class="nav-link" to="/create-project">Nouveau projet</router-link>
        <div class="container-fluid">
          <div class="row gx-3">
            <div class="col-4 mb-3" v-for="project in store.auth.user?.profile.projects">
              <router-link :to="`/project/${project.id}`">
                  <div class="card" >
                    <img :src="project.image" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h1>{{ project.name }}</h1>
                      <p class="card-text">{{ project.description }}</p>
                    </div>
                  </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import store from "../store"

  store.fetchMyData(() => {})
</script>


