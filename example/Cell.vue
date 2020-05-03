<template>
  <h2>Hello from Ad Cell</h2>
  <h1>Ad</h1>
  <h2>{{ ad.company }}</h2>
  <p>{{ ad.text }}</p>
  <button @click="count++">{{ count }}</button>
</template>

<script>
import { ref } from 'vue'
import Cell from './Cell.vue'

export default {
  async setup () {
    const r = await window.fetch('/api/users/2')
    const { ad } = await r.json()
    let count = ref(0)

    return {
      ad,
      count,
    }
  }
}
</script>
