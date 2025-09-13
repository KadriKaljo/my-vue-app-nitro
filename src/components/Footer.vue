<template>
  <footer class="bg-[#001412] text-white px-6 md:px-16 py-12">
    <div class="text-left mb-12">
      <h2 class="text-4xl md:text-6xl ">
        <span class="font-bold">Have an idea? </span><span class="underline">Let’s Talk</span>
      </h2>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
      <div>
        <h3 class="font-semibold mb-3">Get in touch</h3>
        <p class="mb-2">
          <a href="mailto:info@template.com" class="font-bold hover:underline text-2xl md:text-2xl">
            info@template.com
          </a>
        </p>
        <p class="font-bold"> Phone</p>
        <p class="mb-1">+000 111 222 3333</p>
        <p class="mb-4">+444 555 666 7777</p>
        <p class="font-bold">Address</p>
        <p>2352 Middlefield Rd, Markham<br />Ontario, Canada</p>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Pages</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">Home</a></li>
          <li><a href="#" class="hover:underline">Service</a></li>
          <li><a href="#" class="hover:underline">Case Study</a></li>
          <li><a href="#" class="hover:underline">About Us</a></li>
          <li><a href="#" class="hover:underline">Blog</a></li>
          <li><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-3">Admin</h3>
        <ul class="space-y-2">
          <li><a href="#" class="hover:underline">404</a></li>
          <li><a href="#" class="hover:underline">Login</a></li>
          <li><a href="#" class="hover:underline">Licenses</a></li>
          <li><a href="#" class="hover:underline">Instructions</a></li>
          <li><a href="#" class="hover:underline">Styleguide</a></li>
          <li><a href="#" class="hover:underline">Changelog</a></li>
          <li><a href="#" class="hover:underline">More Templates</a></li>
        </ul>
      </div>

      <div>
        <h3 class="font-semibold mb-5">Reach Out to Us</h3>
        <div class="flex gap-3 mb-5">
          <a href="#" class="hover:opacity-75"><i class="fab fa-facebook fa-2x"></i></a>
          <a href="#" class="hover:opacity-75"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="#" class="hover:opacity-75"><i class="fab fa-instagram fa-2x"></i></a> 
        </div>
        <div class="flex gap-3 mb-4">
          <a href="#" class="hover:opacity-75"><i class="fab fa-skype fa-2x"></i></a>
          <a href="#" class="hover:opacity-75"><i class="fab fa-whatsapp fa-2x"></i></a>
          <a href="#" class="hover:opacity-75"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
        <p class="mb-3">Join our mailing list and get to know exciting stuff at first hand</p>
        <form class="flex">
          <input
            type="email"
            placeholder="johnchoe@gmail.com"
            class="p-2 text-black flex-1 bg-white"
          />
          <button type="submit" class="bg-teal-500 px-4  hover:bg-teal-600">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>

    <div class="mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
      <p>Made it with love by Hexwaave. Powered by Webflow.</p>
      <div class="flex gap-4 mt-3 md:mt-0">
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Sitemap</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>


