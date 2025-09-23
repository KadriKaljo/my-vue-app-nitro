<template> 
    <article class="h-full p-6 flex flex-col group"> 
        <div class="relative w-full aspect-[529/430] flex items-center justify-center"> 
            <img :src="photo" :alt="title" class="absolute inset-0 w-full h-full object-cover" /> 
        </div>

        <div class="flex items-center justify-between gap-4 mb-2">
            <h2 class="text-heading-2 font-display mb-2">{{ title }}</h2> 
        
            <div class="flex items-center flex-wrap gap-2">
                <slot name="tags" />
            </div>
        </div>
        
        <p class="text-body"> {{ text }}      
        </p> 
    </article> 
</template> 
        
<script setup> 
defineProps({ 
    photo: { type: String, required: true }, 
    title: { type: String, required: true }, 
    text: { type: String, required: true }, }) 
</script>