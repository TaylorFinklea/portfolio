<script setup lang="ts">
type Props = {
  image: string
  label: string
  href: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="hover:bg-primary-light-400 hover:dark:bg-primary-dark-800 pt-6 px-4 rounded-xl">
    <NuxtLink
      class="group flex text-sm font-medium text-primary-dark-800 transition hover:text-primary-500 dark:text-primary-light-300"
      :to="props.href"
    >
      <NuxtImg
        :src="props.image"
        class="rounded-2xl"
        sizes="sm:100vw md:50vw lg:300px"
      />
    </NuxtLink>
    <h3 class="flex justify-center text-xl text-primary-dark-800 dark:text-primary-light-300">{{ props.label }}</h3>
  </div>
</template>
