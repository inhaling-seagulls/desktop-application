<template>
  <p>{{ test }}</p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const test = "test";

    return { test };
  },
});
</script>
