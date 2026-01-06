<template>
  <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase">
          Recent Projects
        </h2>
      </div>

      <a
        href="#portfolio"
        class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-black hover:text-gray-500 transition duration-300 group"
      >
        View All Projects
        <svg
          class="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        class="group bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      >
        <div class="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <div
            class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"
          ></div>
          <img
            src="https://picsum.photos/seed/app/600/400"
            alt="Project Preview"
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
          />
        </div>

        <div class="p-6 flex flex-col flex-grow">
          <div class="mb-4">
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400"
              >Featured Web App</span
            >
            <h3 class="text-xl font-black uppercase tracking-tight text-gray-900 mt-1">
              Project Title Alpha
            </h3>
          </div>

          <p class="text-sm text-gray-600 leading-relaxed font-medium mb-6 line-clamp-3">
            A comprehensive web application developed using React and Tailwind CSS. Focused on
            user-centric design, robust state management, and seamless API integration.
          </p>

          <div class="flex flex-wrap gap-2 mb-8">
            <span
              class="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              >React</span
            >
            <span
              class="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              >Tailwind</span
            >
            <span
              class="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              >Node.js</span
            >
          </div>

          <div class="mt-auto flex gap-3">
            <button
              class="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-black text-white text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-gray-800 transition-all active:scale-95"
            >
              View Live
            </button>
            <a
              href="#"
              class="flex-1 inline-flex items-center justify-center px-4 py-2.5 border border-gray-200 text-gray-700 text-[11px] font-bold uppercase tracking-widest rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all active:scale-95"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>