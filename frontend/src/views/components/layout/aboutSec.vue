<template>
  <section id="about" class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-24">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
      <div class="lg:col-span-7">
        <h2 class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase mb-8">
          About Me
        </h2>
        <div class="space-y-6">
          <p class="text-lg text-gray-700 leading-relaxed font-medium">
            I am a passionate
            <span class="text-black font-black underline decoration-2 underline-offset-4"
              >Full-Stack Developer</span
            >
            based in the Philippines, dedicated to building digital products that combine technical
            logic with intuitive design.
          </p>
          <p class="text-gray-500 leading-relaxed">
            My journey in tech is driven by a constant curiosity for how things work under the hood.
            I don't just write code; I architect solutions. Whether it's optimizing database queries
            or fine-tuning CSS animations, I strive for a level of craftsmanship that makes every
            user interaction feel intentional and seamless.
          </p>
          <div class="pt-4">
            <div
              class="inline-flex items-center space-x-2 text-xs font-black uppercase tracking-[0.2em] text-gray-400"
            >
              <span>Located in</span>
              <span class="text-black">Manila, PH</span>
              <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-5 flex flex-col gap-12">
        <div>
          <h3
            class="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-6 flex items-center"
          >
            <span class="mr-4">Education</span>
            <div class="h-px bg-gray-100 flex-1"></div>
          </h3>
          <div class="space-y-6">
            <div
              v-for="edu in education"
              :key="edu.degree"
              class="relative pl-6 border-l-2 border-black"
            >
              <h4 class="text-sm font-black uppercase tracking-tight text-gray-900">
                {{ edu.degree }}
              </h4>
              <p class="text-xs font-bold text-gray-500 mt-1 uppercase tracking-wide">
                {{ edu.school }}
              </p>
              <p class="text-[10px] text-gray-400 mt-1 font-medium">{{ edu.year }}</p>
            </div>
          </div>
        </div>

        <div>
          <h3
            class="text-[10px] font-black uppercase tracking-[0.25em] text-gray-400 mb-6 flex items-center"
          >
            <span class="mr-4">Interests</span>
            <div class="h-px bg-gray-100 flex-1"></div>
          </h3>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="hobby in hobbies"
              :key="hobby"
              class="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-500 hover:border-black hover:text-black transition-all duration-300 cursor-default"
            >
              {{ hobby }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    degree: 'Bachelor of Science in Information Technology',
    school: 'Your University Name',
    year: '2020 — 2024',
  },
  {
    degree: 'Full-Stack Web Development BootCamp',
    school: 'Online Certification',
    year: '2023',
  },
]

const hobbies = [
  'Photography',
  'Mechanical Keyboards',
  'Hiking',
  'UI Design',
  'Chess',
  'Open Source',
]
</script>