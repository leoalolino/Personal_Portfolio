<template>
  <section id="contact" class="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 mb-24">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-3xl md:text-4xl font-black tracking-tighter text-gray-900 uppercase">
            Get in Touch
          </h2>
          <p class="mt-6 text-gray-500 font-medium leading-relaxed max-w-md">
            Are you interested in collaborating or have a question about my work? I am currently
            open to new opportunities and would love to hear from you.
          </p>
        </div>

        <div class="mt-12 lg:mt-0">
          <h3 class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
            Digital Channels
          </h3>
          <div class="flex flex-col gap-4">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.link"
              class="group flex items-center text-xs font-bold uppercase tracking-widest text-gray-900 hover:text-gray-500 transition-all"
            >
              <span
                class="w-8 h-px bg-gray-200 mr-4 group-hover:w-12 group-hover:bg-black transition-all"
              ></span>
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>

      <div class="bg-gray-50 p-8 rounded-2xl border border-gray-100">
        <form @submit.prevent="handleSubmit" class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400"
              >Email Address</label
            >
            <input
              type="email"
              placeholder="example@gmail.com"
              class="bg-transparent border-b border-gray-200 py-3 outline-none focus:border-black transition-colors text-sm font-medium"
            />
          </div>

          <div class="flex flex-col gap-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400"
              >Your Message</label
            >
            <textarea
              rows="4"
              placeholder="Tell me about your project..."
              class="bg-transparent border-b border-gray-200 py-3 resize-none outline-none focus:border-black transition-colors text-sm font-medium h-32"
            ></textarea>
          </div>

          <button
            type="submit"
            class="mt-4 w-full bg-black text-white py-4 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-gray-800 transition-all active:scale-[0.98]"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const socials = [
  { name: 'LinkedIn', link: '#' },
  { name: 'GitHub', link: '#' },
  { name: 'Instagram', link: '#' },
  { name: 'Email', link: 'mailto:leo@example.com' },
]

const handleSubmit = () => {
  // Add your logic here
  console.log('Inquiry sent.')
}
</script>