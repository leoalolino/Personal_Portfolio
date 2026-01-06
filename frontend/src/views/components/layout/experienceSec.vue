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

    <div class="space-y-16">
      <div
        v-for="(job, index) in experiences"
        :key="index"
        class="grid grid-cols-1 lg:grid-cols-12 gap-8"
      >
        <div class="lg:col-span-4">
          <div class="sticky top-24">
            <span class="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              {{ job.period }}
            </span>
            <h3 class="text-xl font-black uppercase tracking-tighter text-gray-900 mt-2">
              {{ job.company }}
            </h3>
            <p class="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">
              {{ job.location }}
            </p>
          </div>
        </div>

        <div class="lg:col-span-8 relative pl-8 border-l-2 border-gray-100">
          <div
            class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-black"
          ></div>

          <h4 class="text-lg font-black uppercase tracking-tight text-gray-900 mb-4">
            {{ job.role }}
          </h4>

          <ul class="space-y-4">
            <li
              v-for="(task, tIndex) in job.tasks"
              :key="tIndex"
              class="text-sm text-gray-600 leading-relaxed flex items-start"
            >
              <span class="mr-3 mt-1.5 w-1.5 h-1.5 bg-black rounded-full flex-shrink-0"></span>
              {{ task }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 mt-8">
            <span
              v-for="tech in job.technologies"
              :key="tech"
              class="px-3 py-1 bg-gray-50 text-[9px] font-black uppercase tracking-tighter text-gray-400 border border-gray-100"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    period: '2024 — Present',
    company: 'Tech Solutions Inc.',
    location: 'Manila, PH',
    role: 'Senior Full-Stack Developer',
    tasks: [
      'Led the migration of legacy architecture to a modern Vue 3 and Node.js stack, increasing performance by 40%.',
      'Architected and implemented scalable RESTful APIs and integrated third-party payment gateways.',
      'Mentored junior developers through code reviews and weekly technical workshops.',
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    period: '2022 — 2024',
    company: 'Creative Digital Agency',
    location: 'Remote',
    role: 'Web Developer',
    tasks: [
      'Developed pixel-perfect, responsive landing pages for international clients using Tailwind CSS.',
      'Optimized front-end assets and implemented lazy-loading techniques, resulting in a 25% faster load time.',
      'Collaborated with UI/UX designers to translate Figma prototypes into functional code.',
    ],
    technologies: ['React', 'Tailwind', 'Figma', 'JavaScript'],
  },
]
</script>