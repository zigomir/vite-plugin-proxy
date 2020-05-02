<template>
  <h2>Hello from Ad Cell</h2>
  <h1>Ad</h1>
  <h2>{{ ad.company }}</h2>
  <p>{{ ad.text }}</p>
</template>

<script>
import { ref } from 'vue'
import Cell from './Cell.vue'

export default {
  async setup () {
    const r = await window.fetch('/api/users/2')
    const { ad } = await r.json()

    return {
      ad,
    }
  }
}
</script>
