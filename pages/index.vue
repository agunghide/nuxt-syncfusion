<template>
  <div class="w-full min-h-screen grid place-items-center">
    <div class="flex space-x-2">
      <nuxt-link class="py-4 px-4 bg-gray-200 hover:bg-gray-400 hover:text-white rounded-md" to="/editor">
        Editor
      </nuxt-link>
      <nuxt-link class="py-4 px-4 bg-gray-200 hover:bg-gray-400 hover:text-white rounded-md" to="/editor-full">
        Editor Full
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
