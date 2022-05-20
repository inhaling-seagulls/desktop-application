<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { useFetch } from "./composables/useFetch";
import { Profile } from "./models/Profile.model";

export default defineComponent({
  setup() {
    const { data, response, error } = useFetch<Profile>("profiles", "GET");

    watchEffect(() => {
      console.log(data.value);
      console.log(response.value);
      console.log(error.value);
    });
  },
});
</script>
