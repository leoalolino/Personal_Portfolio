<template>
  <section class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-16">
    <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
      <div>
        <h2 class="text-3xl font-bold tracking-tighter text-gray-900 uppercase">Tech Stack</h2>
        <p class="text-gray-500 mt-2 font-medium">Professional toolkit categorized by domain.</p>
      </div>

      <div class="flex gap-6 items-center">
        <button
          @click="isDeleteMode = !isDeleteMode"
          class="group inline-flex items-center text-sm font-bold transition-colors uppercase tracking-widest"
          :class="isDeleteMode ? 'text-red-600' : 'text-gray-400 hover:text-black'"
        >
          {{ isDeleteMode ? 'Cancel Delete' : 'Delete Tech' }}
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
            class="group relative flex items-center p-4 bg-white border border-gray-200 rounded-sm hover:border-black hover:shadow-md transition-all duration-300 ease-in-out cursor-default"
          >
            <button
              v-if="isDeleteMode"
              @click="deleteItem(category, tech)"
              class="absolute -top-2 -right-2 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-black transition-colors z-20"
            >
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

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
const isDeleteMode = ref(false)

const visibleTech = (items) => {
  return isExpanded.value ? items : items.slice(0, 4)
}

const deleteItem = (category, techToRemove) => {
  category.items = category.items.filter((item) => item.name !== techToRemove.name)
}

const categorizedData = ref([
  {
    title: 'Frontend Development',
    label: 'Frontend',
    items: [
      {
        name: 'Vue.js',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M12 21l-8-14.5h16L12 21z"/></svg>',
      },
      {
        name: 'Tailwind',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M12 6c-3 0-5 1.5-6 4.5 1-1.5 2.5-2 4.5-1.5 1 .2 1.8.8 2.6 1.4 1.3 1 2.8 2.1 5.3 2.1 3 0 5-1.5 6-4.5-1 1.5-2.5 2-4.5 1.5-1-.2-1.8-.8-2.6-1.4-1.3-1-2.8-2.1-5.3-2.1z"/></svg>',
      },
      {
        name: 'React',
        svg: '<svg viewBox="0 0 24 24" fill="black"><circle cx="12" cy="12" r="2"/><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2z"/></svg>',
      },
      {
        name: 'TypeScript',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M1.5 1.5v21h21v-21h-21zm17.5 17.5h-2.5v-7.5h-2.5v-2.5h7.5v10z"/></svg>',
      },
    ],
  },
  {
    title: 'Backend & Systems',
    label: 'Backend',
    items: [
      {
        name: 'Node.js',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M12 2L4.5 6.4v8.8L12 19.6l7.5-4.4V6.4L12 2z"/></svg>',
      },
      {
        name: 'Express',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M5 5h14v14H5z"/></svg>',
      },
    ],
  },
  {
    title: 'Database & Storage',
    label: 'Database',
    items: [
      {
        name: 'Postgres',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10z"/></svg>',
      },
      {
        name: 'MongoDB',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M12 2l-1 5 1 15 1-15-1-5z"/></svg>',
      },
    ],
  },
  // ADDED TOOLS & PRODUCTIVITY
  {
    title: 'Tools & Productivity',
    label: 'Tools',
    items: [
      {
        name: 'VS Code',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M23.15 2.58L17.62 0l-9.64 9.12-4.43-3.36L0 7.24V16.8l3.55 1.48 4.43-3.36 9.64 9.12 5.53-2.58V2.58zM17.45 18.29l-4.97-4.24 4.97-4.24v8.48z"/></svg>',
      },
      {
        name: 'Git',
        svg: '<svg viewBox="0 0 24 24" fill="black"><path d="M23.546 10.93L13.067.45a1.495 1.495 0 00-2.115 0L8.8 2.6l2.112 2.112c.302-.103.644-.084.935.07a1.497 1.497 0 01.657 2.11 1.49 1.49 0 01-2.11.657 1.498 1.498 0 01-.65-1.106L7.627 4.32l-5.17 5.17a1.495 1.495 0 000 2.115l10.48 10.478a1.495 1.495 0 002.115 0l10.48-10.477a1.495 1.495 0 000-2.115z"/></svg>',
      },
    ],
  },
])
</script>

<style scoped>
/* RESTORED: FAID IN FROM THE BOTTOM ANIMATION */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(20px); /* SLIDE UP EFFECT */
}
.list-move {
  transition: transform 0.4s ease;
}
</style>