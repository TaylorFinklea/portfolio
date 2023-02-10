<script setup lang="ts">
type Props = {
  icon: string
  label: string
  href: string
}

const props = defineProps<Props>()
</script>
<template>
  <li class="mb-3">
    <NuxtLink
      class="group flex text-sm font-medium text-primary-dark-800 transition hover:text-primary-500 dark:text-primary-light-300"
      :to="props.href"
    >
      <Icon class="w-6 h-6 text-primary-light-600 dark:text-primary-light-400" :name="props.icon" /><span class="pl-5">{{ props.label }}</span>
    </NuxtLink>
  </li>
</template>
