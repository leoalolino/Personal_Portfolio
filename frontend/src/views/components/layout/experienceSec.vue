<template>
  <section id="experience" class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
    <div class="mb-12 flex justify-between items-end">
      <div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase">
          Experience
        </h2>
        <p class="text-gray-500 mt-2 font-medium uppercase tracking-[0.2em] text-[10px]">
          Career Path & Industry Contribution
        </p>
      </div>

      <button
        @click="isDeleteMode = !isDeleteMode"
        class="inline-flex items-center text-[11px] font-black uppercase tracking-[0.2em] transition-colors"
        :class="isDeleteMode ? 'text-red-600' : 'text-gray-400 hover:text-black'"
      >
        {{ isDeleteMode ? 'Cancel Delete —' : 'Delete Exp +' }}
        <svg class="ml-2 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>

    <div
      class="border-2 border-gray-100 rounded-md p-8 lg:p-12 relative h-[520px] overflow-hidden group bg-white"
      @wheel.prevent="handleScroll"
    >
      <div class="absolute top-8 right-8 flex gap-2 z-10">
        <button
          v-for="(_, index) in baseList"
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentIndex === index ? 'bg-black w-6' : 'bg-gray-200'"
        ></button>
      </div>

      <div class="relative h-full perspective-1000">
        <div
          class="w-full h-full transform-style-3d transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
          :style="{ transform: `translateY(-${currentIndex * 240}px)` }"
        >
          <div
            v-for="(job, index) in baseList"
            :key="index"
            class="h-[240px] w-full relative"
            :style="getFaceStyle(index)"
          >
            <button
              v-if="isDeleteMode && !job.isAdd"
              @click="handleDelete(job)"
              class="absolute top-0 right-0 w-8 h-8 bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-black transition-all z-20 active:scale-90"
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

            <div
              v-if="!job.isAdd"
              class="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full bg-white py-2"
            >
              <div class="lg:col-span-4">
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">{{
                  job.period
                }}</span>
                <h3 class="text-xl font-black uppercase tracking-tighter text-gray-900 mt-2">
                  {{ job.company }}
                </h3>
              </div>
              <div class="lg:col-span-8 relative pl-8 border-l-2 border-gray-100">
                <div
                  class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
                ></div>
                <h4 class="text-lg font-black uppercase tracking-tight text-gray-900 mb-2">
                  {{ job.role }}
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(task, tIndex) in job.tasks"
                    :key="tIndex"
                    class="text-sm text-gray-600 leading-tight flex items-start"
                  >
                    <span
                      class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"
                    ></span>
                    {{ task }}
                  </li>
                </ul>
              </div>
            </div>

            <div v-else class="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full opacity-40 py-2">
              <div class="lg:col-span-4">
                <span class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400"
                  >Next Record</span
                >
                <h3 class="text-xl font-black uppercase tracking-tighter text-gray-900 mt-2">
                  Add New
                </h3>
              </div>
              <div class="lg:col-span-8">
                <div
                  class="w-full h-24 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center"
                >
                  <span class="text-2xl text-gray-300">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const isAuthorized = ref(false)
const isDeleteMode = ref(false)
const currentIndex = ref(0)
const isAnimating = ref(false)
let autoTimer = null

const experiences = ref([
  {
    period: '2024 — Present',
    company: 'Tech Solutions Inc.',
    role: 'Senior Full-Stack Developer',
    tasks: [
      'Led migration of legacy architecture to Vue 3 stack.',
      'Architected and implemented scalable RESTful APIs.',
    ],
  },
  {
    period: '2022 — 2024',
    company: 'Creative Digital Agency',
    role: 'Web Developer',
    tasks: [
      'Developed responsive landing pages for international clients.',
      'Optimized front-end assets for speed.',
    ],
  },
  {
    period: '2020 — 2022',
    company: 'Startup Hub',
    role: 'Junior Dev',
    tasks: ['Maintained legacy PHP codebases.', 'Implemented UI bug fixes.'],
  },
])

const baseList = computed(() => {
  const list = [...experiences.value]
  if (isAuthorized.value) list.push({ isAdd: true })
  return list
})

const moveStep = (step) => {
  const nextIndex = currentIndex.value + step
  if (nextIndex < 0 || nextIndex >= baseList.value.length) return
  currentIndex.value = nextIndex
}

const handleDelete = (jobToDelete) => {
  // If we delete the last item, move the index up so we don't view a blank screen
  if (currentIndex.value === experiences.value.length - 1 && currentIndex.value > 0) {
    currentIndex.value--
  }
  experiences.value = experiences.value.filter((j) => j.company !== jobToDelete.company)
}

const handleScroll = (event) => {
  if (isAnimating.value) return
  isAnimating.value = true
  startTimer()
  moveStep(event.deltaY > 0 ? 1 : -1)
  setTimeout(() => {
    isAnimating.value = false
  }, 600)
}

const getFaceStyle = (index) => {
  const diff = index - currentIndex.value
  if (diff === 0 || diff === 1) return { transform: 'rotateX(0deg)', opacity: 1 }
  return { transform: 'rotateX(-60deg)', opacity: 0 }
}

const startTimer = () => {
  stopTimer()
  autoTimer = setInterval(() => {
    if (currentIndex.value >= baseList.value.length - 1) {
      currentIndex.value = 0
    } else {
      moveStep(1)
    }
  }, 4000)
}

const stopTimer = () => {
  if (autoTimer) clearInterval(autoTimer)
}

onMounted(startTimer)
onUnmounted(stopTimer)
</script>

<style scoped>
.perspective-1000 {
  perspective: 1500px;
}
.transform-style-3d {
  transform-style: preserve-3d;
  will-change: transform;
}
</style>