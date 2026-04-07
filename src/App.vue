<template>
  <div id="app">
    <h1>Module 11 Vue Router Assignment</h1>

    <nav>
      <router-link to="/about">About</router-link> |
      <router-link to="/quotes">Random Quotes</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
nav {
  margin-bottom: 20px;
}
nav a {
  margin: 0 10px;
}
</style>