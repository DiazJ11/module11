<template>
  <div>
    <h2>About</h2>
    <p>This app uses Vue Router to navigate between pages.</p>
    <GoBack />
  </div>
</template>

<script>
import GoBack from '../components/GoBack.vue'

export default {
  name: 'AboutView',
  components: { GoBack }
}
</script>