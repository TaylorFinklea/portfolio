<script setup lang="ts">
type Props = {
  image: string
  label: string
  jobTitle: string
  dates: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="grid grid-cols-3">
    <div class="col-span-2">
      <div class="flex">
        <NuxtImg
          :src="props.image"
          class="rounded-full p-1 bg-primary-light-300 dark:bg-primary-dark-700 w-12 h-12"
        />
        <div class="col-span-3 pl-4">
          <div class="grid grid-cols-1">
            <span
              class="text-sm text-primary-dark-800 dark:text-primary-light-300"
            >
              {{ props.label }}
            </span>
            <span
              class="text-sm text-primary-dark-800 dark:text-primary-light-400/80"
            >
              {{ props.jobTitle }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <span class="text-xs dark:text-primary-dark-400/80">{{
        props.dates
      }}</span>
    </div>
  </div>
</template>
