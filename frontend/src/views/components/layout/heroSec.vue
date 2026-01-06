<template>
  <section
    id="hero"
    class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-48 md:pb-32"
  >
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div class="lg:col-span-7 flex flex-col items-start text-left">
        <div
          class="inline-block px-3 py-1 bg-black text-[10px] font-black uppercase tracking-[0.3em] text-white mb-6"
        >
          Full-Stack Developer
        </div>

        <h1
          class="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-gray-900 uppercase leading-[0.9]"
        >
          Building <br />
          <span class="text-gray-300">Digital</span> <br />
          Solutions.
        </h1>

        <p class="mt-8 text-base md:text-lg text-gray-500 max-w-lg font-medium leading-relaxed">
          I am Leo Alolino, a developer dedicated to crafting high-performance web applications with
          a focus on clean code and exceptional user experience.
        </p>

        <div class="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            class="px-8 py-4 bg-black text-white text-[11px] font-black uppercase tracking-widest hover:bg-gray-800 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            class="px-8 py-4 bg-white border border-gray-200 text-black text-[11px] font-black uppercase tracking-widest hover:border-black transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      <div class="lg:col-span-5 relative">
        <div class="absolute -inset-4 -z-10 translate-x-4 translate-y-4"></div>

        <div
          class="aspect-[4/5] overflow-hidden bg-gray-100 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-gray-200"
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
            alt="Leo Alolino"
            class="w-full h-full object-cover"
          />
        </div>

        <div
          class="absolute -bottom-6 -left-6 bg-white p-6 border border-gray-100 shadow-xl hidden md:block"
        >
          <p class="text-[10px] font-black uppercase tracking-widest text-gray-400">
            Available for
          </p>
          <p class="text-xs font-black uppercase tracking-tighter text-black">
            Freelance & Full-time
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No extra logic needed for this static hero,
// but you can add GSAP or Intersection Observer here later.
</script>

<style scoped>
/* Optional: Adding a subtle reveal animation */
#hero {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>