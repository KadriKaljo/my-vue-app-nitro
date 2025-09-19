<script setup lang="ts">
import Footer from './components/Footer.vue';
import Service from './components/Service.vue';
import Homepage from './views/homepage.vue';
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-[#001412] text-white">
    <h1 class="text-4xl md:text-6xl font-semibold tracking-[-0.02em]">New beginning</h1>
  </section>
  <div>
    <Service></Service>
    <Footer></Footer>
  </div>
  <Homepage />
</template>