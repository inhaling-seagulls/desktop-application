<template>
  <button @click="click">login</button>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const store: any = inject("store");

    const click = () => {
      store.signIn({
        email: "test@email.fr",
        password: "123",
      });
    };

    return { click };
  },
});
</script>
