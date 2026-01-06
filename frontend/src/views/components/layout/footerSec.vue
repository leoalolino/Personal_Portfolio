<template>
  <footer
    class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-gray-100 mt-20"
  >
    <div class="flex flex-col md:flex-row justify-between items-center gap-6">
      <div class="flex flex-col items-center md:items-start">
        <p class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-900">Leo Alolino</p>
        <p class="text-[10px] font-medium uppercase tracking-widest text-gray-400 mt-1">
          © 2026 All Rights Reserved.
        </p>
      </div>

      <div class="flex items-center space-x-8">
        <a
          v-for="social in socials"
          :key="social.name"
          :href="social.href"
          target="_blank"
          class="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-black transition-colors duration-300"
        >
          {{ social.name }}
        </a>
      </div>

      <div class="hidden md:block">
        <p class="text-[9px] font-bold uppercase tracking-[0.1em] text-gray-300">
          Designed & Built in <span class="text-gray-400">Manila</span>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const socials = [
  { name: 'LinkedIn', href: '#' },
  { name: 'GitHub', href: '#' },
  { name: 'Twitter', href: '#' },
  { name: 'Resume', href: '#' },
]
</script>