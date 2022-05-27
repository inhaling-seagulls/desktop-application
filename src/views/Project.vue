<template>
  <div class="p-4">
    <header class="custom-header mb-4">
      <h1>{{ project?.name}}</h1>
      <div> Réalisé par <router-link :to="`/profiles/${project?.profile?.id}`">{{ project.profile.pseudo }}</router-link></div>
    </header>
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <img class="img-thumbnail" :src="project?.image" />
          </div>
          <div class="col-8">
            <h2>Description</h2>
            <p>{{ project?.description }}</p>
            <div>
              <span class="badge rounded-pill bg-primary mx-1" v-for="tag in project?.tags" :key="tag">
                {{ tag.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { useRoute } from "vue-router";
  import { useFetch } from "../composables/useFetch";
  import { Project } from "../models/Project.model";

  const route = useRoute()
  const projectResponse = useFetch<Project>(`projects/${route.params.id}`)
  const project = projectResponse.data
</script>