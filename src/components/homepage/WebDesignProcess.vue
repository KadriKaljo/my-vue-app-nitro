<template>
    <section class="relative py-16 md:py-24 bg-nitro-shades-50">

      <div
        class="mx-auto w-full px-4 sm:px-8 md:px-20 lg:px-[140px]
               flex flex-col items-center justify-center gap-[20px]
               text-center text-white"
      >
        <h5 class="text-nitro-green-500 font-display font-bold text-heading-5 leading-heading-5">
          Our Design Process
        </h5>
  
        <h2 class="font-display font-semibold text-heading-1 leading-heading-1">
          What is your web design <br />
          process? How do you start?
        </h2>
  
        <p class="font-display font-normal text-body leading-body text-nitro-grey-400">
          Our main web design process is divided into the following steps:
        </p>
      </div>
  

      <div class="mt-12 mx-auto w-full px-4">

        <div class="mx-auto max-w-[884px] relative">

          <div class="absolute left-[250px] top-12 bottom-0 w-1 bg-nitro-green-700"></div>
          
          <TimelineRow
            v-for="(s, i) in steps"
            :key="i"
            :title="s.title"
            :text="s.text"
          />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import TimelineRow from './TimelineRow.vue'
  
  type Step = { title: string; text: string }
  
  const steps: Step[] = [
    {
      title: 'Discovery',
      text:
        'Before starting anything, we work with the client to collect detailed information about the business, digital product, its users and explore every aspect of the project.',
    },
    {
      title: 'Scope',
      text:
        'The steps included in a UX audit will vary depending on the time and budget allotted to the project.',
    },
    {
      title: 'Web Structure',
      text:
        'We typically start with user personas, key use cases, competitive analysis, moodboards and with a well defined scope we can then start to build sitemaps, information architecture and proceed with wireframes.',
    },
    {
      title: 'Design Concept to Layout Design',
      text:
        'Now that we have wireframes at hand, we start with content writing for the individual pages with keeping SEO in mind. We start arranging visual elements—like text, images, and shapes along the way.',
    },
    {
      title: 'Visual design',
      text:
        'Now we focus on the interface of the website keeping visual brand in mind. Typography, iconography, brand color, photography style and art direction will make sure the website looks consistent and visually gorgeous.',
    },
    {
      title: 'Site Development',
      text:
        'With designs being approved, its time to take those pages and start developing. We mostly start with frond-end (HTML, CSS) then we go through the back-end and so on.',
    },
    {
      title: 'Site Testing',
      text:
        'Before lunching the site, it will be placed on a internal server where only internal user and anyone who we share the link with can view it. The site testing is cruicial as there will inevitably be issues that need to be addressed before the site goes live. ',
    },
    {
      title: 'Site Launch',
      text:
        'The big day is here! We’ve tested the site, approved by stakeholders and we’re ready to launch. Launching the site is just a start,  we should be prepared for feedback from users to make immediate changes and adjustments.',
    },
    {
      title: 'Site Maintenance',
      text:
        'Dynamic websites are living, breathing entities that need constant care and maintenance. Updating contents, making changes to the backends and fixing broken links and the list goes on,  are all in a day’s work. All of these phases are cruicial to the Web design process.',
    },
  ]
  </script>
  