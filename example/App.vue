<template>
  <Suspense>
    <template #default>
      <User />
    </template>
    <template #fallback>loading...</template>
  </Suspense>
</template>

<script>
import { ref } from 'vue'
import User from './User.vue'

export default {
  components: { User },
}
</script>

<style scoped>
h1 {
  color: #4fc08d;
}

h1, p {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
