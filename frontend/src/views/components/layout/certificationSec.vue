<template>
  <div class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
    <div class="mb-10">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900">Certifications</h2>
      <p class="text-gray-500 mt-2">Verified professional credentials and specialized training.</p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        class="group flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <div
          class="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-100 group-hover:bg-white transition-colors"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
            alt="Cert Logo"
            class="w-10 h-10 object-contain"
          />
        </div>

        <div class="ml-5">
          <h3 class="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            Professional Data Engineer
          </h3>
          <p class="text-[12px] text-gray-500 font-medium">Google Cloud • 2025</p>

          <a
            href="#"
            class="mt-2 inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-black transition-colors"
          >
            View Credential
            <svg class="ml-1 w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>

      <div
        class="group flex items-center p-4 bg-white border border-gray-200 rounded-xl hover:border-black transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <div
          class="flex-shrink-0 w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden border border-gray-100 group-hover:bg-white transition-colors"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            alt="Cert Logo"
            class="w-10 h-10 object-contain"
          />
        </div>
        <div class="ml-5">
          <h3 class="text-sm font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
            AWS Solutions Architect
          </h3>
          <p class="text-[12px] text-gray-500 font-medium">Amazon Web Services • 2024</p>
          <a
            href="#"
            class="mt-2 inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-400 group-hover:text-black transition-colors"
          >
            Verify Badge
          </a>
        </div>
      </div>
    </div>
  </div>
</template>