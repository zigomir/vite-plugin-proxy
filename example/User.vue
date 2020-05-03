<template>
  <h1>Current user</h1>

  <ul>
    <li>{{ user.firstName }}</li>
    <li>{{ user.lastName }}</li>
    <li>{{ user.email }}</li>
  </ul>

  <img :src="user.avatar" alt="User Avatar" />

  <div>
    <button @click="loadUser(userId - 1)" :disabled="userId === 1">Prev user</button>
    <button @click="loadUser(userId + 1)" :disabled="userId === 12">Next user</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'

export default {
  setup () {
    let userId = ref(1)
    let user = reactive({})

    async function loadUser (id) {
      const r = await window.fetch(`/api/users/${id}`)
      const { data } = await r.json()
      user.firstName = data.first_name
      user.lastName = data.last_name
      user.email = data.email
      user.avatar = data.avatar
      userId.value = id
    }

    loadUser(userId.value)

    return {
      user,
      userId,
      loadUser,
    }
  }
}
</script>
