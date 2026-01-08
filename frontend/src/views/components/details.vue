<template>
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
  >
    <div
      class="relative flex h-[450px] w-full max-w-lg flex-col justify-end rounded-sm bg-white p-8 shadow-2xl ring-1 ring-black/5"
    >
      <button
        class="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-all hover:bg-red-500 hover:text-white hover:cursor-pointer"
      >
        <span class="text-xl">×</span>
      </button>

      <form @submit.prevent class="flex flex-col gap-4">
        <div class="flex flex-col gap-1">
          <label class="text-xs font-bold uppercase tracking-wider text-gray-400"
            >Target Script</label
          >
          <input
            type="file"
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
            class="w-full rounded-lg border border-gray-200 p-3 text-sm outline-none transition-all focus:border-green-500 focus:ring-2 focus:ring-green-500/20"
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

<script>
</script>