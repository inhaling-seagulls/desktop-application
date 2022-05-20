<template>
  <p>{{ test }}</p>
  <button @click="click">login</button>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";

export default defineComponent({
  setup() {
    const store: any = inject("store");

    const click = () => {
      store.signIn({
        email: "email@email.fr",
        password: "123",
      });

      console.log(store);
    };

    const test = "test";

    return { test, click };
  },
});
</script>
