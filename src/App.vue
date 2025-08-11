<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen bg-nitro-grey-50 p-8">
    <div class="max-w-4xl mx-auto">
      <!-- Typography Test -->
      <div class="mb-8">
        <h1 class="text-display-1 font-display text-nitro-green-500 mb-4">Display 1 - Suur pealkiri</h1>
        <h2 class="text-display-2 font-display text-nitro-green-600 mb-4">Display 2 - Väiksem pealkiri</h2>
        
        <h1 class="text-heading-1 font-body text-nitro-grey-800 mb-3">Heading 1 - Põhipealkiri</h1>
        <h2 class="text-heading-2 font-body text-nitro-grey-700 mb-3">Heading 2 - Alampealkiri</h2>
        <h3 class="text-heading-3 font-body text-nitro-grey-600 mb-3">Heading 3 - Keskmine pealkiri</h3>
        <h4 class="text-heading-4 font-body text-nitro-grey-500 mb-3">Heading 4 - Väike pealkiri</h4>
        <h5 class="text-heading-5 font-body text-nitro-grey-400 mb-3">Heading 5 - Väga väike pealkiri</h5>
        <h6 class="text-heading-6 font-body text-nitro-grey-300 mb-3">Heading 6 - Kõige väiksem pealkiri</h6>
        
        <p class="text-body font-body text-nitro-grey-800 mb-2">Body text - Põhitekst 16px</p>
        <p class="text-small font-body text-nitro-grey-600 mb-2">Small text - Väike tekst 14px</p>
        <p class="text-tiny font-body text-nitro-grey-500">Tiny text - Väga väike tekst 12px</p>
      </div>

      <!-- Grid System Test -->
      <div class="mb-8">
        <h2 class="text-heading-2 font-body text-nitro-green-600 mb-4">Grid System Test</h2>
        
        <!-- 12-kolonniline grid -->
        <div class="grid grid-cols-12 gap-4 mb-6">
          <div class="col-span-12 bg-nitro-green-100 p-4 rounded">
            <p class="text-body font-body text-nitro-green-800">12 kolonni - täis laius</p>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4 mb-6">
          <div class="col-span-6 bg-nitro-green-200 p-4 rounded">
            <p class="text-body font-body text-nitro-green-800">6 kolonni - pool laiust</p>
          </div>
          <div class="col-span-6 bg-nitro-green-200 p-4 rounded">
            <p class="text-body font-body text-nitro-green-800">6 kolonni - pool laiust</p>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4 mb-6">
          <div class="col-span-4 bg-nitro-green-300 p-4 rounded">
            <p class="text-body font-body text-nitro-green-800">4 kolonni</p>
          </div>
          <div class="col-span-4 bg-nitro-green-300 p-4 rounded">
            <p class="text-body font-body text-nitro-green-800">4 kolonni</p>
          </div>
          <div class="col-span-4 bg-nitro-green-300 p-4 rounded">
            <p class="text-body font-body text-nitro-green-800">4 kolonni</p>
          </div>
        </div>
        
        <div class="grid grid-cols-12 gap-4 mb-6">
          <div class="col-span-3 bg-nitro-green-400 p-4 rounded">
            <p class="text-small font-body text-nitro-green-800">3 kolonni</p>
          </div>
          <div class="col-span-3 bg-nitro-green-400 p-4 rounded">
            <p class="text-small font-body text-nitro-green-800">3 kolonni</p>
          </div>
          <div class="col-span-3 bg-nitro-green-400 p-4 rounded">
            <p class="text-small font-body text-nitro-green-800">3 kolonni</p>
          </div>
          <div class="col-span-3 bg-nitro-green-400 p-4 rounded">
            <p class="text-small font-body text-nitro-green-800">3 kolonni</p>
          </div>
        </div>
      </div>

      <!-- Original content -->
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <h1 class="text-heading-1 font-body text-nitro-green-500 mb-4">NITRO Design System</h1>
        <div class="flex space-x-4 mb-6">
          <a href="https://vite.dev" target="_blank">
            <img src="/vite.svg" class="logo" alt="Vite logo" />
          </a>
          <a href="https://vuejs.org/" target="_blank">
            <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
          </a>
        </div>
        <HelloWorld msg="Typography System Working!" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
