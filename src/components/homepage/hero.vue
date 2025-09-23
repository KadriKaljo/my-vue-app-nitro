<template>
    <section
      class="relative bg-cover bg-center min-h-[700px] lg:min-h-[900px]
             bg-[url('/Photos/hero-bg.jpg')] flex items-center">
  
      <Header class="absolute top-0 left-0 w-full z-20" />
  
      <div class="relative z-20 mx-auto w-full max-w-[1920px]
                  px-4 sm:px-8 md:px-20 lg:px-36
                  flex flex-col items-center text-center gap-10
                  -translate-y-[6%]">
  
        <h1 class="text-white font-display font-normal
                   text-hero sm:text-heading-1 sm:leading-heading-1 md-
                   leading-hero lg:leading-hero-lg">
          We Build High-Converting Websites <br />
          That Deliver Results
        </h1>
  
        <div class="flex flex-col sm:flex-row gap-5">
          <a class="inline-flex items-center justify-center px-6 py-3
                     bg-nitro-green-500 
                     text-white text-body font-medium">
            Book a Call
          </a>
          <a class="inline-flex items-center justify-center px-6 py-3
                    bg-nitro-green-800 
                     text-white text-body font-medium">
            See our Works
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import Header from '../Header.vue'
  </script>