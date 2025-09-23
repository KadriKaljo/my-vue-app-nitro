<template>
  <article class=" h-full p-6 bg-[#00211D] flex flex-col group">
    <div class="mb-4 w-20 h-20 relative flex items-center justify-center">
      <img
        :src="icon"
        :alt="title"
        class="w-14 h-14"
      />

      <img
        v-if="hoverIcon"
        :src="hoverIcon"
        :alt="`${title} hover`"
        class="w-14 h-14 absolute inset-0 m-auto opacity-0 group-hover:opacity-100"
      />
    </div>

    <h3 class="text-white text-2xl md:text-3xl font-semibold mb-2">{{ title }}</h3>

    <p class="text-[#9CA6C1] text-white text-base leading-6">
      {{ text }}
    </p>
  </article>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon: string
  hoverIcon?: string
  title: string
  text: string
}>(), {
  hoverIcon: ''
})
</script>