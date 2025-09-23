<template>
    <section class="relative py-16 md:py-24 bg-nitro-shades-50">
      <div class="mx-auto w-full max-w-[1640px] px-4 sm:px-8 md:px-20 lg:px-36 text-white">
  
        <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <h2
              class="font-display font-bold
                     text-heading-1 leading-heading-1
                     md:text-heading-2 md:leading-heading-2 md:max-w-[1040px]">
              Selected Works
            </h2>
            <p class="mt-3 font-display font-normal text-body leading-body">
              See our featured work here
            </p>
          </div>
  
          <a href="#"
            class="inline-flex px-6 py-3 border-2 border-nitro-green-500 text-body font-medium"
            aria-label="View all selected works">
            View all
          </a>
        </div>
  
        <div class="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          <SelectedWorksCard
            photo="/Photos/xooltech.jpg"
            title="Xooltech"
            text="We partnered with Rainfall’s amazing team to create a website that tells their unique story and reflects on their values."
          >
            <template #tags>
              <TagCard>Brand identity</TagCard>
              <TagCard>web design</TagCard>
            </template>
          </SelectedWorksCard>

          <SelectedWorksCard
            photo="/Photos/flinkerk.jpg"
            title="Flinkerk"
            text="Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable..."
          >
            <template #tags>
              <TagCard>web design</TagCard>
            </template>
          </SelectedWorksCard>


          <SelectedWorksCard
            photo="/Photos/albertomaya.jpg"
            title="Albertomaya"
            text="Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable..."
          >
            <template #tags>
              <TagCard>design</TagCard>
              <TagCard>Web development</TagCard>
            </template>
          </SelectedWorksCard>

          <SelectedWorksCard
            photo="/Photos/flickered.jpg"
            title="Flickered"
            text="Flinkwerk helps streamline your projects to develop and deploy software for the web in a fully automated and highly configurable..."
          >
            <template #tags>
              <TagCard>graphic design</TagCard>
            </template>
          </SelectedWorksCard>
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup>
  import SelectedWorksCard from './SelectedWorksCard.vue'
  import TagCard from './TagCard.vue'
  </script>
  