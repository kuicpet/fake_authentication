<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'

export default {
  components: {Navbar, Footer}
}
</script>

<style scoped>
  .container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
</style>
