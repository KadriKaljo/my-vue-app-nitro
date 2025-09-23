<script setup lang="ts"></script>

<template>
  <div
    class="bg-[#E5F6F4] 
           px-[var(--container-padding-mobile)] 
           md:px-[var(--container-padding-tablet)] 
           lg:px-[var(--container-padding-desktop)] 
           xl:px-[var(--container-padding-xl)] 
           py-16 md:py-28 lg:py-[140px] 
           gap-10 flex flex-col"
  >
    <!-- Pealkiri -->
    <div class="max-w-[800px]">
      <p
        class="text-3xl sm:text-4xl md:text-5xl lg:text-[72px] 
               font-semibold leading-tight"
      >
        Designers, Developers <br />
        and Homo Sapiens.
      </p>
    </div>

    <!-- Tekstiplokk -->
    <div class="flex justify-end">
      <p
        class="text-base sm:text-lg md:text-2xl lg:text-[48px] 
               text-[#008576] 
               max-w-full md:max-w-[700px]"
      >
        We are a small team but a force of nature. We are determined, we work
        non-stop and build relationships that our clients return to. We enjoy
        making our client’s businesses a success and go the extra mile to
        provide a service that creates a memorable experience.
      </p>
    </div>
  </div>
</template>
