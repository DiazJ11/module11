<template>
  <div>
    <h2>404 - Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <router-link to="/about">Go Home</router-link>
    <br /><br />
    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  name: 'NotFound',
  components: { GoBack }
}
</script>