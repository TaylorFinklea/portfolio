<script setup lang="ts">
// 02/10/2023
// defineProps cannot use globally defined types due to this bug
// https://github.com/vuejs/core/issues/4294
type Use = {
  label: string
  items: Array<{
    title: string
    subtitle: string
  }>
}
const props = defineProps<Use>()
</script>
<template>
  <div class="grid grid-cols-5 mb-16">
    <span
      class="border-l-2 pl-6 dark:text-primary-light-200 dark:border-primary-600"
    >
      {{ props.label }}
    </span>
    <ul role="list" class="col-span-4 col-start-2">
      <li v-for="item in props.items" class="pb-16 last:pb-0">
        <h3 class="col-span-4 pb-1">{{ item.title }}</h3>
        <p class="col-start-2 text-sm dark:text-primary-dark-400">
          {{ item.subtitle }}
        </p>
      </li>
    </ul>
  </div>
</template>
