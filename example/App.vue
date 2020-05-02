<template>
  <Suspense>
    <template #default>
      <Cell />
    </template>
    <template #fallback>loading...</template>
  </Suspense>
</template>

<script>
import { ref } from 'vue'
import Cell from './Cell.vue'

export default {
  components: { Cell },
  setup () {
    let count = ref(0)

    return {
      count,
    }
  }
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
