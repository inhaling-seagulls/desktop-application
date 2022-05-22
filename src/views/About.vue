<template>
  <p>About</p>
  <p v-if="data">{{ data }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFetch } from "../composables/useFetch";

export default defineComponent({
  setup() {
    const { data } = useFetch("profiles");

    return { data };
  },
});
</script>
