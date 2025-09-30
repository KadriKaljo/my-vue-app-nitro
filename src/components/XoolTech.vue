<template>
    <section class="relative py-16 md:py-24 bg-nitro-shades-50">
      <div class="mx-auto w-full max-w-[1920px] px-4 sm:px-8 md:px-20 lg:px-36 text-white">
        <Header class="absolute top-0 left-0 w-full z-20" />

        <div class="flex justify-between items-start">
            <div class="text-left">
                <button class="text-body leading-body flex items-center gap-2">
                <img src="/Photos/IconArrow.png" alt="Back to work page" class="w-4 h-4" /> Back to work page </button>
            </div>
        </div>

        <div class="flex flex-col md:flex-row md:items-start md:justify-between pt-12 gap-5">
            <div class="flex flex-col gap-4">
                <h1 class="text-heading-1 leading-heading-1 text-semibold">XoolTech</h1>

                <div class="flex flex-wrap gap-2 font-bold">
                    <TagCard>Brand identity</TagCard>
                    <TagCard>web design</TagCard>
                </div>
            </div>

            <div class="flex flex-col items-end gap-1">
                <p class="text-body leading-body">2022</p>
                <button class="text-body leading-body flex items-center gap-2">Visit Website 
                    <img src="/Photos/IconArrowUP.png" alt="Visit Website" class="w-4 h-4" />
                </button>
            </div>

        </div>

    <div class="flex flex-col gap-4 pt-12 w-full md:w-1/2">
        <p class="text-body leading-body">
            XoolTech ecommerce website for furniture. From building a design <br />
            system to sketches then making the website responsive, here’s the <br />
            whole process.
        </p>
    </div>

    <div class="pt-12">
        <img src="/Photos/XoolTech/XoolTech1.jpg" alt="XoolTech" class="w-full h-auto object-contain" />
    </div>
    </div>
</section>
</template>

<script setup>
import TagCard from './homepage/TagCard.vue';
import Header from './Header.vue';
</script>
