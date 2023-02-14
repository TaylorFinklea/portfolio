<script setup lang="ts">
type Props = {
  icon: string
  iconSize?: string
  screenReaderLabel: string
}

const props = defineProps<Props>()
</script>
<template>
  <button
    class="rounded-2xl text-sm px-3 h-10 items-end text-primary-dark-800/70 shadow-lg shadow-primary-dark-800/5 ring-1 ring-primary-dark-900/5 hover:text-primary-dark-800/90 hover:ring-primary-dark-900/10 backdrop-blur transition dark:bg-primary-dark-700/60 dark:text-primary-light-400 dark:hover:text-primary-light-200 dark:ring-primary-light-100/10 dark:hover:ring-primary-light-100/20"
  >
    <span class="sr-only">{{ props.screenReaderLabel }}</span>
    <Icon :name="props.icon" :class="[iconSize ? iconSize : 'h-5 w-5']" />
  </button>
</template>
