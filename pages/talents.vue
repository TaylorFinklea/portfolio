<script setup lang="ts">
const talents: TalentGroup[] = [
  {
    label: 'DevOps',
    items: ['Test1', 'Test2', 'Test3', 'Test4', 'Test5'],
  },
  {
    label: 'Leadership',
    items: [''],
  },
  {
    label: 'Infrastructure',
    items: [''],
  },
  {
    label: 'Development',
    items: [''],
  },
]
</script>
<template>
  <div
    class="grid grid-cols-2 gap-y-16 mt-16 lg:grid-cols-4 lg:grid-rows-[auto-1fr] lg:gap-y-0"
  >
    <div class="col-span-4">
      <h1
        class="text-4xl font-bold tracking-tight text-primary-dark-800 dark:text-primary-light-100 sm:text-5xl"
      >
        A list of my skills and experiences.
      </h1>
    </div>
    <div
      class="mt-6 col-span-3 space-y-4 text-base text-primary-dark-600 dark:text-primary-light-300"
    >
      <p>
        I am passionate about DevOps and strive to implement modern
        best-practices. This will give you a glimpse of my strengths and ability
        to learn new things in an ever-changing industry.
      </p>
    </div>
    <div></div>
    <div class="col-span-4 mt-16">
      <TalentList
        v-for="item in talents"
        :label="item.label"
        :items="item.items"
      />
    </div>
  </div>
</template>
