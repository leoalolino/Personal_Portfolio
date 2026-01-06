<script setup>
import { ref } from 'vue'

const navbarData = ref({
  label: '',
  url: '',
})
const sender = async () => {
  try {
    const resp = await fetch('http://localhost:3000/navbars/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(navbarData.value),
    })

    if (resp) return alert('data send!')
  } catch (e) {
    throw new Error(e)
  }
}
</script>

<template>
  <form @submit.prevent="sender">
    <input type="text" v-model="navbarData.label" required/>
    <input type="text" v-model="navbarData.url" required/>
    <button type="submit">submit</button>
  </form>
</template>

<style scoped></style>
