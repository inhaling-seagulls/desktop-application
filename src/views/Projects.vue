<template>
  <div class="p-4">
    <header>
      <h1>Projets</h1>
    </header>
    <div class="container mt-5">
      <div class="row row-cols-2 mb-5">
        <div class="col" v-for="project in projectsToDisplay" :key="project.name">
          <div class="card mb-3 h-100">
            <router-link :to="`/project/${project.id}`">
              <div class="row g-0">
                  <div class="col-md-6">
                    <img :src="project.image" class="img-thumbnail rounded-start" alt="..." />
                  </div>
                  <div class="col-md-6">
                    <div class="card-body">
                      <h4 class="card-title">Score: {{ project.score }}%</h4>
                      <h4 class="card-title">{{ project.name }}</h4>
                      <p class="card-text">{{ project.description }}</p>
                      <span class="badge rounded-pill bg-primary mx-1" v-for="tag in project.tags">{{ tag.name }}</span>
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
          <li :class="{ 'page-item': true, 'active': i == page }" v-for="i in Math.ceil(projectsWithScore.length / 2)">
            <a class="page-link" href="#" @click="() => changePage(i)">{{ i }}</a>
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
  import { Project } from "../models/Project.model"
  import { Profile } from "../models/Profile.model"
  import { BASE_HEADERS } from "../constants/api"
  import store from "../store"

  const page = ref(0)
  const projectsWithScore = ref([])
  const projectsToDisplay = ref([])


  const sort = (a : Project, b : Project) : number => {
    a.score = a.score || 0
    b.score = b.score || 0

    if (a.score > b.score) return -1
    if (a.score < b.score) return 1
    return 0
  }

  const addUntil = (i : number) : number => {
    if (i <= 0) return i * 2
    return i * 2 + addUntil(i - 1)
  }

  const calculateScores = (profile : Profile, projects : Project[]) : Project[] => {
    const projectsWithScore = [...projects]
    const tagNames = profile.tags.map((tag) => tag.name)
    for (const project of projectsWithScore) {
      let likes = 0;
      let dislikes = 0;
      for (const tag of project.tags) {
        if (tagNames.includes(tag.name)) {
          likes++
        } else {
          dislikes++
        }
      }
      let score;
      if (likes === tagNames.length) {
        score = Math.max(0, 100 - addUntil(dislikes))
      } else {
        score = Math.max(0, (likes / tagNames.length * 100) - addUntil(dislikes))
      }
      project.score = score
    }
    projectsWithScore.sort(sort)
    return projectsWithScore
  }

  const changePage = (i : number) => {
    console.log('Change page?', i)
    page.value = i
  }

  // Runtime
  fetch('http://localhost:8000/api/v1/projects?match=1', {
    method: 'GET',
    headers: { ...BASE_HEADERS, Authorization: store.getToken()},
  })
  .then((response) => response.json())
  .then((projects) => {
    const profile = store.auth.user?.profile
    projectsWithScore.value = calculateScores(profile, projects.data)
    projectsToDisplay.value = projectsWithScore.value.slice(0, 2)
  })

  watch(
    page,
    async (newPage) => {
      projectsToDisplay.value = projectsWithScore.value.slice((newPage - 1) * 2, (newPage - 1) * 2 + 2)
    }
  )
</script>