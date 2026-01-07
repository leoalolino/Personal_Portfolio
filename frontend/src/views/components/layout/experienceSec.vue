<template>
  <section id="experience" class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
    <div class="mb-12">
      <h2 class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase">
        Experience
      </h2>
      <p class="text-gray-500 mt-2 font-medium uppercase tracking-[0.2em] text-[10px]">
        Career Path & Industry Contribution
      </p>
    </div>

    <div
      class="border-2 border-gray-100 rounded-2xl p-8 lg:p-12 relative h-[520px] overflow-hidden group"
      @wheel.prevent="handleScroll"
    >
      <div class="absolute top-8 right-8 flex gap-2 z-10">
        <button
          v-for="(_, index) in experiences"
          :key="index"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="displayIndex === index ? 'bg-black w-6' : 'bg-gray-200'"
        ></button>
      </div>

      <div class="relative h-full perspective-1000">
        <div
          class="w-full h-full transform-style-3d"
          :class="{
            'transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]': !isResetting,
          }"
          :style="{ transform: `translateY(-${currentIndex * 240}px)` }"
        >
          <div
            v-for="(job, index) in doubledExperiences"
            :key="index"
            class="h-[240px] w-full"
            :style="getFaceStyle(index)"
          >
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

// SET THIS TO FALSE to hide the Add button and remove the gap entirely
const isAuthorized = ref(false)

const currentIndex = ref(0)
const isResetting = ref(false)
const isAnimating = ref(false)
let autoTimer = null

const experiences = [
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
]

// THE FIX: Only build the list with "Add New" if authorized.
// This ensures the math (currentIndex * 240) never hits a "dead" space.
const baseList = computed(() => {
  const list = [...experiences]
  if (isAuthorized.value) {
    list.push({ isAdd: true })
  }
  return list
})

const doubledExperiences = computed(() => [...baseList.value, ...baseList.value])
const displayIndex = computed(() => currentIndex.value % baseList.value.length)

const startTimer = () => {
  stopTimer()
  autoTimer = setInterval(() => {
    moveStep(1)
  }, 5000)
}

const stopTimer = () => {
  if (autoTimer) clearInterval(autoTimer)
}

const moveStep = (step) => {
  if (isResetting.value) return
  currentIndex.value += step

  // Infinite wrap-around math based on actual list size
  if (currentIndex.value >= baseList.value.length * 2 - 1) {
    setTimeout(() => {
      isResetting.value = true
      currentIndex.value = currentIndex.value % baseList.value.length
      setTimeout(() => {
        isResetting.value = false
      }, 50)
    }, 1000)
  }
}

const handleScroll = (event) => {
  if (isAnimating.value) return
  isAnimating.value = true
  startTimer()
  moveStep(event.deltaY > 0 ? 1 : -1)
  setTimeout(() => {
    isAnimating.value = false
  }, 800)
}

const getFaceStyle = (index) => {
  const diff = index - currentIndex.value
  if (diff === 0 || diff === 1) return { transform: 'rotateX(0deg)', opacity: 1 }
  return { transform: 'rotateX(-60deg)', opacity: 0 }
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
}
</style>