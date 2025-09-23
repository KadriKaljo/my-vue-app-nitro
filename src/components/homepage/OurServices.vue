<template>
    <section class="relative py-16 md:py-24 bg-nitro-shades-50">
      <div class="mx-auto w-full max-w-[1920px] px-4 sm:px-8 md:px-20 lg:px-36">
        <div class="flex flex-col gap-[100px]">
          <!-- Heading -->
          <div class="flex flex-col gap-5 md:text-left">
            <p class="text-nitro-green-400 font-display font-bold
                      text-heading-5 leading-heading-5">
              Our Delightful Services
            </p>
  
            <h2 class="text-white font-display font-normal
                       text-heading-2 leading-heading-2 md:text-heading-1 
                       md:leading-heading-1
                       md:max-w-[1040px]">
              We are a group of passionate people working <br />
              closely with clients so their business can grow.
            </h2>
          </div>
  
          <div class="grid grid-cols-1 lg:grid-cols-3 text-white gap-6 items-stretch">
            
            <ServiceCard
              icon="/ServiceIcons/uiux.svg"
              hoverIcon="/ServiceIcons/uiux-hover.svg"
              title="UI/UX"
              text="Creating user centered design for web/app interfaces."
            />
            
            <ServiceCard
              icon="/ServiceIcons/brandidentity.svg"
              hoverIcon="/ServiceIcons/brandidentity-hover.svg"
              title="Brand Identity"
              text="We specialize in providing comprehensive brand identity services to businesses of all sizes."
            />           

            <ServiceCard
              icon="/ServiceIcons/SEO.svg"
              hoverIcon="/ServiceIcons/SEO-hover.svg"
              title="SEO"
              text="We provide excellent Search Engine Optimization (SEO)so you can capture more traffic and revenue."
            />    

            <ServiceCard
              icon="/ServiceIcons/webdesign.svg"
              hoverIcon="/ServiceIcons/webdesign-hover.svg"
              title="Web Design"
              text="Crafting web design that not only works but looks good."
            />    

            <ServiceCard
              icon="/ServiceIcons/webdev.svg"
              hoverIcon="/ServiceIcons/webdev-hover.svg"
              title="Web Development"
              text="Developing those beautifully designed websites effciently and fast!"
            />    

            <ServiceCard
              icon="/ServiceIcons/appdev.svg"
              hoverIcon="/ServiceIcons/appdev-hover.svg"
              title="App Development"
              text="We build apps that add value to your business, and boost your efficiency through cutting edge technologies."
            />    
          </div>
        </div>
      </div>
    </section>
  </template>
  
<script setup>
import ServiceCard from './ServiceCard.vue'
</script>