<template>
    <div class="grid grid-cols-[220px_2px_1fr] gap-x-8 max-w-[664px] items-start">

      <div class="py-8 text-right">
        <h2 class="font-display text-heading-2 leading-heading-2 text-white">
          {{ title }}
        </h2>
      </div>
  

      <div class="relative flex justify-center">
        <span 
            class="absolute top-12 -mt-[0.875rem] left-1/2 -translate-x-1/2 z-10
           w-5 h-5 rounded-full bg-nitro-green-600
            border-4 border-nitro-green-300
            hover:bg-[#C9CEDD] hover:border-[#C9CEDD] 
            duration-300 cursor-pointer"
            aria-hidden="true">
        </span>
      </div>

      <div class="py-8">
        <ProcessBox :text="text" />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import ProcessBox from './ProcessBox.vue'
  
  defineProps({
    title: { type: String, required: true },
    text: { type: String, required: true }
  })
  </script>
  