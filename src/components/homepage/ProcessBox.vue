<template>
    <div class="bg-nitro-green-600 p-6 text-white hover:bg-nitro-green-900 text-nitro-green-800 hover:text-nitro-green-800 cursor-pointer">
        <p class="font-body font-normal text-small leading-small ">
            {{ text }}
        </p>
    </div>
</template>

<script setup lang="ts">
defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>