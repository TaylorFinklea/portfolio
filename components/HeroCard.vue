<script setup lang="ts">
type Props = {
  image: string;
  label: string;
  href: string;
};

const props = defineProps<Props>();
</script>
<template>
  <div
    class="group p-6 hover:bg-primary-light-50 hover:dark:bg-primary-dark-800/50 rounded-xl transition-colors"
  >
    <NuxtLink class="block" :to="props.href">
      <div class="aspect-video overflow-hidden rounded-xl mb-4">
        <NuxtImg
          :src="props.image"
          class="w-full h-full object-cover transition-transform group-hover:scale-105"
          sizes="sm:100vw md:50vw lg:400px"
        />
      </div>
      <h3
        class="text-lg font-semibold text-primary-dark-800 dark:text-primary-light-100 text-center group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors"
      >
        {{ props.label }}
      </h3>
    </NuxtLink>
  </div>
</template>
