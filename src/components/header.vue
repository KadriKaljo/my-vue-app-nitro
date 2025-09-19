<template>
    <header class="w-full bg-black">
      <div 
        class="h-[60px] md:h-[63px] 
               max-w-[1640px] mx-auto 
               flex items-center justify-between 
               px-[var(--container-padding-mobile)] 
               md:px-[var(--container-padding-tablet)] 
               lg:px-[var(--container-padding-desktop)] 
               xl:px-[var(--container-padding-xl)]">
        
        <span 
          class="text-heading-3 leading-heading-3 font-normal text-white 
                 md:text-heading-2 md:leading-heading-2 md:font-medium">
          Nitro
        </span>
  
        <button aria-label="Open menu" class="p-2">
          <img src="/Icons/hamburger-desktop.svg" alt="" class="hidden md:block w-[60px] h-[30px]" />
          <img src="/Icons/hamburger-mobile.svg"  alt="" class="block md:hidden w-[30px] h-[20px]" />
        </button>
      </div>
    </header>
  </template>
  