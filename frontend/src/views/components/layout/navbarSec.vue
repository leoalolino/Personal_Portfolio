<template>
  <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
      <div class="text-xl font-medium text-gray-900">Leo Alolino</div>

      <div class="hidden md:flex space-x-10">
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          class="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 hover:text-black transition-all duration-300 ease-in-out"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Traits', href: '#traits' },
  { name: 'Stack', href: '#stack' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]
</script>