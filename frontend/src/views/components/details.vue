<script setup>
import { ref } from 'vue'

const dataBody = [
  {
    techstacks: [
      {
        frontend: '',
        frontend_img: '',
      },
      {
        backend: '',
        backend_img: '',
      },
      {
        database: '',
        database_img: '',
      },
      {
        tool: '',
        tool_img: '',
      },
    ],
  },
  {
    projects: [
      {
        project_img: '',
        project_type: '',
        title: '',
        short_description: '',
        description: '',
        purposes: '',
        usedtech: '',
        live_url: '',
        github_link: '',
        target_audience: '',
        featured: '',
      },
    ],
  },
  {
    certificates: [
      {
        display_img: '',
        title: '',
        issued_by: '',
        received_at: '',
        verification_url: '',
        certificate_img: '',
      },
    ],
  },
  {
    experiences: [
      {
        company_name: '',
        company_logo: '',
        job_title: '',
        responsibilities: '',
        start_date: '',
        end_date: '',
      },
    ],
  },
  {
    emails: [
      {
        email: '',
        message: '',
      },
    ],
  },
  {
    users: [
      {
        username: '',
        password: '',
        is_admin: '',
      },
    ],
  },
]
const { techstacks } = dataBody
const data = ref(dataBody)

const sendBtn = async () => {
  const res = await fetch('http://localhost:3000/dynamic/create', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data.value),
  })

  if (!res) alert('failed to send to api')
}
</script>

<template>
  <div
    :id="techstacks"
    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 hidden"
  >
    <div
      class="relative flex h-[450px] w-full max-w-lg flex-col justify-center rounded-sm bg-white p-8 shadow-2xl ring-1 ring-black/5"
    >
      <button
        id="btn"
        class="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all hover:bg-red-500 hover:text-white hover:cursor-pointer"
      >
        <span class="text-xl">×</span>
      </button>

      <div class="uppercase text-7xl font-bold my-6">dynamic</div>

      <form @submit.prevent class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-bold uppercase tracking-wider text-gray-400"
            >techstack img</label
          >
          <input
            type="text"
            class="w-full cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-2 text-sm file:mr-4 file:rounded-md file:border-0 file:bg-black file:px-3 file:py-1 file:text-xs file:font-semibold file:text-white hover:bg-gray-100"
          />
        </div>

        <div class="flex flex-col gap-1">
          <label class="text-xs font-bold uppercase tracking-wider text-gray-400"
            >techstack name</label
          >
          <input
            type="text"
            placeholder="e.g. typescript"
            class="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all"
          />
        </div>

        <button
          type="submit"
          class="mt-2 w-full rounded-lg bg-green-500 py-3 font-bold text-white transition-all hover:bg-green-300 hover:cursor-pointer"
        >
          Add New techstack
        </button>
      </form>
    </div>
  </div>
</template>