<script setup>
import SelectedWorks from '../components/homepage/SelectedWorks.vue'
import Footer from '../components/Footer.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="min-h-dvh bg-nitro-shades-50 text-white">
    <Header />
    <main class="mx-auto w-full max-w-[1920px] px-4 sm:px-8 md:px-20 lg:px-36 py-10 md:py-16">
      <SelectedWorks />

      <RouterLink
        to="/works/xooltech"
        class="inline-block mt-4 px-4 py-2 border border-nitro-green-500 text-white"
      >
        Read more
      </RouterLink>
    </main>

    <Footer />
  </div>
</template>
