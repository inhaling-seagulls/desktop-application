<style scoped>
  .custom-navigation {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .custom-navigation h4 {
    color: white;
    margin: 0 20px 0 0;
  }

</style>

<template>
  <div class="custom-navigation navbar navbar-expand-md navbar-dark bg-dark">
    <h4>Pages for test</h4>
    <div class="navbar-nav">
      <router-link class="nav-link" to="/">Login</router-link>
      <router-link class="nav-link" to="/register">Register</router-link>
      <router-link class="nav-link" to="/newprofile">Create a profile</router-link>
      <router-link class="nav-link" to="/projects">Projects</router-link>
      <router-link class="nav-link" to="/create-project">Create project</router-link>
      <router-link class="nav-link" to="/profile">Profile</router-link>
      <router-link class="nav-link" to="/project">Project</router-link>
    </div>
  </div>
</template>