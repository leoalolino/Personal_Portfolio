<template>
  <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase">
          Recent Projects
        </h2>
      </div>

      <div class="flex gap-6 items-center">
        <button
          @click="isDeleteMode = !isDeleteMode"
          class="inline-flex items-center text-xs font-bold uppercase tracking-widest transition-colors"
          :class="isDeleteMode ? 'text-red-600' : 'text-gray-400 hover:text-black'"
        >
          {{ isDeleteMode ? 'Cancel Delete' : 'Delete Project' }}
          <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>

        <button
          @click="showAll = !showAll"
          class="inline-flex items-center text-xs font-bold uppercase tracking-widest text-black hover:text-gray-500 transition duration-300 group"
        >
          {{ showAll ? 'Show Less' : 'View All Projects' }}
          <svg
            :class="{ 'rotate-180': showAll }"
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
        </button>
      </div>
    </div>

    <TransitionGroup
      tag="div"
      name="list"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <div
        v-for="project in visibleProjects"
        :key="project.title"
        class="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      >
        <button
          v-if="isDeleteMode"
          @click="handleDelete(project)"
          class="absolute top-4 right-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-all z-20 active:scale-90"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div class="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
          <div
            class="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"
          ></div>
          <img
            :src="project.image"
            alt="Project Preview"
            class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
          />
        </div>

        <div class="p-6 flex flex-col flex-grow">
          <div class="mb-4">
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{{
              project.type
            }}</span>
            <h3 class="text-xl font-black uppercase tracking-tight text-gray-900 mt-1">
              {{ project.title }}
            </h3>
          </div>
          <p class="text-sm text-gray-600 leading-relaxed font-medium mb-6 line-clamp-3">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2 mb-8">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="bg-gray-50 border border-gray-100 text-gray-600 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded"
              >{{ tag }}</span
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
              >GitHub</a
            >
          </div>
        </div>
      </div>

      <button
        v-if="projects.length < 3 || showAll"
        key="add-project-btn"
        class="group bg-white border-2 border-dashed border-gray-200 rounded-xl overflow-hidden hover:border-black hover:bg-gray-50 transition-all duration-300 flex flex-col h-full w-full text-left"
      >
        <div
          class="h-48 w-full border-b-2 border-dashed border-gray-100 bg-gray-50/50 group-hover:bg-white flex items-center justify-center transition-colors overflow-hidden"
        >
          <svg
            class="w-16 h-16 text-gray-200 group-hover:text-black transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </div>

        <div class="p-6 flex flex-col flex-grow">
          <div class="mb-4">
            <span class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400"
              >New Deployment</span
            >
            <h3 class="text-xl font-black uppercase tracking-tight text-gray-900 mt-1">
              Add New Project
            </h3>
          </div>
          <p class="text-sm text-gray-400 leading-relaxed font-bold uppercase tracking-widest mb-6">
            Initialize build process for a new application.
          </p>
          <div class="mt-auto">
            <div
              class="w-full py-2.5 border-2 border-dashed border-black text-black text-[11px] font-black uppercase tracking-widest rounded-lg text-center group-hover:bg-black group-hover:text-white transition-all"
            >
              Create Repository
            </div>
          </div>
        </div>
      </button>
    </TransitionGroup>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAll = ref(false)
const isDeleteMode = ref(false)

const projects = ref([
  {
    title: 'Project Title Alpha',
    type: 'Featured Web App',
    description: 'A comprehensive web application developed using React and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'Node.js'],
    image: 'https://picsum.photos/seed/app/600/400',
  },
  {
    title: 'Project Title Beta',
    type: 'Mobile Interface',
    description: 'High-performance mobile application with focus on clean architecture.',
    tags: ['Vue.js', 'Firebase', 'Native'],
    image: 'https://picsum.photos/seed/mobile/600/400',
  },
  {
    title: 'Project Title Gamma',
    type: 'Cloud Platform',
    description: 'Scalable cloud infrastructure monitoring tool for real-time analytics.',
    tags: ['Go', 'Docker', 'Postgres'],
    image: 'https://picsum.photos/seed/cloud/600/400',
  },
  {
    title: 'Project Title Delta',
    type: 'E-Commerce',
    description: 'Fully responsive e-commerce storefront with integrated payment gateways.',
    tags: ['Next.js', 'Stripe', 'Redis'],
    image: 'https://picsum.photos/seed/shop/600/400',
  },
])

const visibleProjects = computed(() => {
  return showAll.value ? projects.value : projects.value.slice(0, 3)
})

const handleDelete = (projectToDelete) => {
  projects.value = projects.value.filter((p) => p.title !== projectToDelete.title)
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active,
.list-move {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.9);
}
</style>