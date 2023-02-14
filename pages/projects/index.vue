<script setup lang="ts">
const projects = useProjects()
</script>
<template>
  <div>
    <div v-for="project in projects">
      <a :href="project._path">
        <div
          class="grid grid-cols-3 mx-5 mt-10 p-4 rounded-xl hover:bg-primary-light-200 hover:dark:bg-primary-dark-800"
        >
          <NuxtImg
            :src="project.image"
            class="rounded-2xl"
            sizes="sm:100vw md:50vw lg:300px"
          />
          <div class="col-span-2">
            <h2
              class="text-3xl font-bold tracking-tight text-primary-dark-800 dark:text-primary-light-100 ml-8"
            >
              {{ project.title }}
            </h2>
            <p
              class="ml-8 mt-3 space-y-4 text-base text-primary-dark-600 dark:text-primary-light-300"
            >
              {{ project.description }}
            </p>
            <p
              :href="project._path"
              class="ml-8 pt-4 text-sm text-primary-500 dark:text-primary-400"
            >
              Read Project
            </p>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>
