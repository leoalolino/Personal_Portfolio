<template>
  <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <h2 class="text-3xl font-bold tracking-tighter text-gray-900 uppercase">Tech Stack</h2>
        <p class="text-gray-500 mt-2 font-medium">Professional toolkit categorized by domain.</p>
      </div>

      <button
        @click="isExpanded = !isExpanded"
        class="group inline-flex items-center text-sm font-bold text-black hover:text-gray-600 transition-colors uppercase tracking-widest"
      >
        {{ isExpanded ? 'Show Less' : 'View Full Stack' }}
        <svg
          :class="{ 'rotate-180': isExpanded }"
          class="ml-2 w-4 h-4 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>

    <div class="space-y-12">
      <div v-for="(category, catIndex) in categorizedData" :key="catIndex">
        <h3
          class="text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center"
        >
          <span class="mr-4">{{ category.title }}</span>
          <div class="h-px bg-gray-100 flex-1"></div>
        </h3>

        <TransitionGroup
          tag="div"
          name="list"
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <div
            v-for="tech in visibleTech(category.items)"
            :key="tech.name"
            class="group flex items-center p-4 bg-white border border-gray-200 rounded-sm hover:border-black hover:shadow-md transition-all duration-300 ease-in-out cursor-default"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-100 group-hover:bg-white transition-colors"
            >
              <span
                class="w-7 h-7 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300"
                v-html="tech.svg"
              ></span>
            </div>

            <div class="ml-4">
              <h3
                class="text-sm font-bold text-gray-900 group-hover:text-black transition-colors uppercase tracking-wide"
              >
                {{ tech.name }}
              </h3>
              <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">
                {{ category.label }}
              </p>
            </div>
          </div>

          <button
            v-if="category.items.length < 4 || isExpanded"
            key="add-btn"
            class="group flex items-center p-4 bg-white border-2 border-dashed border-black rounded-sm hover:bg-gray-50 transition-all duration-300 ease-in-out cursor-pointer w-full"
          >
            <div
              class="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-black group-hover:scale-105 transition-transform"
            >
              <div
                class="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center"
              >
                <svg
                  class="w-4 h-4 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>

            <div class="ml-4 text-left">
              <h3 class="text-sm font-black text-gray-900 uppercase tracking-wide">Add Tech</h3>
              <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">
                New Skill
              </p>
            </div>
          </button>
        </TransitionGroup>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isExpanded = ref(false)

// Function to limit shown items to 4 (or 2 per row) unless expanded
const visibleTech = (items) => {
  return isExpanded.value ? items : items.slice(0, 4)
}

const categorizedData = [
  {
    title: 'Frontend Development',
    label: 'Frontend',
    items: [
      { name: 'Vue.js', svg: '<svg>...</svg>' },
      { name: 'Tailwind', svg: '<svg>...</svg>' },
      { name: 'React', svg: '<svg>...</svg>' },
      { name: 'TypeScript', svg: '<svg>...</svg>' },
      { name: 'Next.js', svg: '<svg>...</svg>' },
      // This has 5 items: Add Button will be HIDDEN by default (shows on expand)
    ],
  },
  {
    title: 'Backend & Systems',
    label: 'Backend',
    items: [
      { name: 'Node.js', svg: '<svg>...</svg>' },
      { name: 'Express', svg: '<svg>...</svg>' },
      // This has 2 items: Add Button will be VISIBLE by default
    ],
  },
  {
    title: 'Database & Storage',
    label: 'Database',
    items: [
      { name: 'Postgres', svg: '<svg>...</svg>' },
      { name: 'MongoDB', svg: '<svg>...</svg>' },
      { name: 'Redis', svg: '<svg>...</svg>' },
      { name: 'MySQL', svg: '<svg>...</svg>' },
      // This has 4 items: Add Button will be HIDDEN by default (shows on expand)
    ],
  },
]
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>