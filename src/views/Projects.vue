<template>
  <div class="p-4">
    <header>
      <h1>Projets</h1>
    </header>
    <div class="container mt-5">
      <div class="row row-cols-2 mb-5">
        <div class="col" v-for="project in result.data" :key="project.name">
          <div class="card mb-3 h-100">
            <router-link :to="`/project/${project.id}`">
              <div class="row g-0">
                  <div class="col-md-6">
                    <img :src="project.image" class="img-thumbnail rounded-start" alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h4 class="card-title">{{ project.name }}</h4>
                      <p class="card-text">{{ project.description }}</p>
                      <span class="badge rounded-pill bg-primary mx-1" v-for="tag in result.data.tags">{{ tag.name }}</span>
                    </div>
                  </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <nav>
        <ul class="pagination justify-content-center" >
          <li class="page-item">
            <a class="page-link" href="#">Previous</a>
          </li>
          <li :class="{ 'page-item': true, 'active': page == route.params.page }" v-for="page in result.response?.meta.last_page">
            <router-link :to="`/projects/${page}`">
              <a class="page-link">{{ page }}</a>
            </router-link>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">Next</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue"
  import { useRoute } from "vue-router"
  import { useFetch } from "../composables/useFetch"
  import { Project } from "../models/Project.model"

  const route = useRoute()
  const result = ref()

  result.value = useFetch<Project[]>(`projects`)

  watch(
    () => route.params.page,
    async (newPage) => {
      result.value = useFetch<Project[]>(`projects?page=${newPage}`)
    }
  )
</script>