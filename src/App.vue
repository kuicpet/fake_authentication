<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue'

export default {
  components: {Navbar, Footer}
}
</script>

<style scoped>

</style>
