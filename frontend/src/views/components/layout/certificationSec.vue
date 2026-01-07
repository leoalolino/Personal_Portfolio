<template>
  <section id="certifications" class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-24">
    <div class="mb-12 flex justify-between items-end">
      <div>
        <h2 class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase">
          Certifications
        </h2>
        <p class="text-gray-500 mt-2 font-medium uppercase tracking-[0.2em] text-[10px]">
          Verified Credentials & Specialized Training
        </p>
      </div>

      <button
        @click="showAll = !showAll"
        class="hidden md:flex items-center text-[11px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-black transition-colors"
      >
        {{ showAll ? 'Show Less —' : 'View All +' }}
      </button>
    </div>

    <TransitionGroup
      tag="div"
      name="list"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="cert in visibleCerts"
        :key="cert.title"
        class="group flex items-center p-5 bg-white border border-gray-100 rounded-none hover:border-black transition-all duration-300 relative overflow-hidden"
      >
        <div
          class="flex-shrink-0 w-14 h-14 bg-gray-50 flex items-center justify-center border border-gray-100 group-hover:bg-white transition-colors"
        >
          <img
            :src="cert.logo"
            :alt="cert.title"
            class="w-8 h-8 object-contain grayscale group-hover:grayscale-0 transition-all"
          />
        </div>

        <div class="ml-5">
          <h3 class="text-[13px] font-black uppercase tracking-tight text-gray-900 leading-tight">
            {{ cert.title }}
          </h3>
          <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
            {{ cert.issuer }} • {{ cert.year }}
          </p>

          <a
            :href="cert.link"
            class="mt-3 inline-flex items-center text-[9px] font-black uppercase tracking-widest text-gray-300 group-hover:text-black transition-colors"
          >
            Verify Credential
            <svg class="ml-1.5 w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="3"
                d="M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <button
        v-if="allCertifications.length < 3 || showAll"
        key="add-cert-btn"
        class="group flex items-center p-5 bg-white border-2 border-dashed border-black rounded-none hover:bg-gray-50 transition-all duration-300 w-full"
      >
        <div
          class="flex-shrink-0 w-14 h-14 bg-white flex items-center justify-center border-2 border-black group-hover:scale-105 transition-transform"
        >
          <div class="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
            <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </div>
        </div>

        <div class="ml-5 text-left">
          <h3 class="text-[13px] font-black uppercase tracking-tight text-gray-900 leading-tight">
            Add New <br />
            Credential
          </h3>
          <p class="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">
            Verified Record
          </p>
        </div>
      </button>
    </TransitionGroup>

    <div class="mt-10 flex justify-center md:hidden">
      <button
        @click="showAll = !showAll"
        class="px-8 py-4 border border-gray-200 text-[11px] font-black uppercase tracking-widest w-full"
      >
        {{ showAll ? 'Show Less' : 'View All Certifications' }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const showAll = ref(false)

const allCertifications = [
  {
    title: 'Professional Data Engineer',
    issuer: 'Google Cloud',
    year: '2025',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
    link: '#',
  },
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
    link: '#',
  },
  {
    title: 'Meta Front-End Developer',
    issuer: 'Coursera',
    year: '2024',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg',
    link: '#',
  },
  {
    title: 'Certified Kubernetes Admin',
    issuer: 'Cloud Native Foundation',
    year: '2023',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
    link: '#',
  },
  {
    title: 'Full-Stack JavaScript',
    issuer: 'FreeCodeCamp',
    year: '2023',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    link: '#',
  },
  {
    title: 'UI/UX Design Specialization',
    issuer: 'Adobe / Coursera',
    year: '2023',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    link: '#',
  },
]

// Logic to show only 3 or all
const visibleCerts = computed(() => {
  return showAll.value ? allCertifications : allCertifications.slice(0, 3)
})
</script>

<style scoped>
/* Exact same animation style as Tech Stack */
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