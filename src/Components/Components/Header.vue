<template>
  <header class="bg-transparent py-2 absolute top-0 left-0 right-0 z-50">
    <div class="flex justify-between items-center h-[50px] sm:h-[63px] max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8">
      <div class="logo flex-shrink-0">
        <h1
          class="text-2xl sm:text-[36px] font-medium leading-[1.2] tracking-[-0.02em]"
          :class="textColor"
        >
          Nitro
        </h1>
      </div>

      <button
        type="button"
        class="transition-colors w-8 h-8 sm:w-[60px] sm:h-[29.33px] p-1 sm:p-2"
        :class="textColor"
        aria-label="Open menu"
      >

        <img
          :src="hamburgerMobileIcon"
          alt="Menu"
          class="block sm:hidden w-full h-full filter brightness-0 invert"
          :class="iconFilterClass"
        />

        <img
          :src="hamburgerDesktopIcon"
          alt="Menu"
          class="hidden sm:block w-full h-full filter brightness-0 invert"
          :class="iconFilterClass"
        />
      </button>
    </div>
  </header>

</template>

<script setup lang="ts">
import { computed } from 'vue'
import hamburgerDesktopIcon from '../../assets/Icons/Icons/Icon=Hamburger Menu, Size=Desktop.svg'
import hamburgerMobileIcon  from '../../assets/Icons/Icons/Icon=Hamburger Menu, Size=Mobile.svg'

interface Props { variant?: 'dark' | 'light' }
const props = withDefaults(defineProps<Props>(), { variant: 'dark' })

const textColor = computed(() =>
  props.variant === 'dark'
    ? 'text-white hover:text-nitro-green-500'
    : 'text-nitro-grey-800 hover:text-nitro-green-500'
)

const iconFilterClass = computed(() => (
  props.variant === 'dark' ? 'brightness-0 invert contrast-200' : ''
))

</script>

