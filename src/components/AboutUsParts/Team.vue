<script setup lang="ts"></script>

<template>
  <div
    class="bg-white 
           px-[var(--container-padding-mobile)] 
           md:px-[var(--container-padding-tablet)] 
           lg:px-[var(--container-padding-desktop)] 
           xl:px-[var(--container-padding-xl)] 
           py-16 md:py-28 lg:py-[140px]"
  >
    <div>
      <!-- Pealkiri -->
      <p
        class="font-semibold 
               text-3xl sm:text-4xl md:text-5xl lg:text-[64px] 
               text-[#004849] 
               mb-10"
      >
        Meet the Team
      </p>

      <!-- Grid kõigi liikmete jaoks -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-20">
        
        <!-- Liige 1 -->
        <div>
          <div class="relative group mb-6">
            <img
              src="/home/marelle/nitro/my-vue-app-nitro/src/assets/Icons/ServiceIcons/CeoImage.png"
              class="w-full h-auto rounded"
              alt="CEO"
            />
            <div
              class="absolute inset-0 flex items-center justify-center 
                     bg-[#09ADA8E5] opacity-0 
                     group-hover:opacity-100 transition"
            >
              <div class="flex gap-3">
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="text-xl md:text-2xl font-medium mb-2">Yogarasa Gandhi</p>
          <p class="text-base md:text-lg text-gray-600">CEO & Director</p>
        </div>

        <!-- Liige 2 -->
        <div>
          <div class="relative group mb-6">
            <img
              src="/home/marelle/nitro/my-vue-app-nitro/src/assets/Icons/ServiceIcons/CeoImage.png"
              class="w-full h-auto rounded"
              alt="COO"
            />
            <div
              class="absolute inset-0 flex items-center justify-center 
                     bg-[#09ADA8E5] opacity-0 
                     group-hover:opacity-100 transition"
            >
              <div class="flex gap-3">
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="text-xl md:text-2xl font-medium mb-2">Nnenna Jioke</p>
          <p class="text-base md:text-lg text-gray-600">COO & Product Manager</p>
        </div>

        <!-- Liige 3 -->
        <div>
          <div class="relative group mb-6">
            <img
              src="/home/marelle/nitro/my-vue-app-nitro/src/assets/Icons/ServiceIcons/CeoImage.png"
              class="w-full h-auto rounded"
              alt="Motion Designer"
            />
            <div
              class="absolute inset-0 flex items-center justify-center 
                     bg-[#09ADA8E5] opacity-0 
                     group-hover:opacity-100 transition"
            >
              <div class="flex gap-3">
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="text-xl md:text-2xl font-medium mb-2">Yogarasa Gandhi</p>
          <p class="text-base md:text-lg text-gray-600">Motion Designer</p>
        </div>

        <!-- Liige 4 -->
        <div>
          <div class="relative group mb-6">
            <img
              src="/home/marelle/nitro/my-vue-app-nitro/src/assets/Icons/ServiceIcons/CeoImage.png"
              class="w-full h-auto rounded"
              alt="Digital Marketer"
            />
            <div
              class="absolute inset-0 flex items-center justify-center 
                     bg-[#09ADA8E5] opacity-0 
                     group-hover:opacity-100 transition"
            >
              <div class="flex gap-3">
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="text-xl md:text-2xl font-medium mb-2">Yogarasa Gandhi</p>
          <p class="text-base md:text-lg text-gray-600">Digital Marketer</p>
        </div>

        <!-- Liige 5 -->
        <div>
          <div class="relative group mb-6">
            <img
              src="/home/marelle/nitro/my-vue-app-nitro/src/assets/Icons/ServiceIcons/CeoImage.png"
              class="w-full h-auto rounded"
              alt="Product Designer"
            />
            <div
              class="absolute inset-0 flex items-center justify-center 
                     bg-[#09ADA8E5] opacity-0 
                     group-hover:opacity-100 transition"
            >
              <div class="flex gap-3">
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="text-xl md:text-2xl font-medium mb-2">Nnenna Jioke</p>
          <p class="text-base md:text-lg text-gray-600">Product Designer</p>
        </div>

        <!-- Liige 6 -->
        <div>
          <div class="relative group mb-6">
            <img
              src="/home/marelle/nitro/my-vue-app-nitro/src/assets/Icons/ServiceIcons/CeoImage.png"
              class="w-full h-auto rounded"
              alt="Web Developer"
            />
            <div
              class="absolute inset-0 flex items-center justify-center 
                     bg-[#09ADA8E5] opacity-0 
                     group-hover:opacity-100 transition"
            >
              <div class="flex gap-3">
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a href="#" class="hover:opacity-75 bg-white p-2 rounded">
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </div>
            </div>
          </div>
          <p class="text-xl md:text-2xl font-medium mb-2">Yogarasa Gandhi</p>
          <p class="text-base md:text-lg text-gray-600">Web Developer</p>
        </div>

      </div>
    </div>
  </div>
</template>

