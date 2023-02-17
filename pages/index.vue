<script setup lang="ts">
const projects = await useProjects()
const featuredProjects: Ref<Project[]> = ref([
  projects[5],
  projects[3],
  projects[2],
])
const social = [
  {
    icon: 'mdi:github',
    href: 'https://github.com/TaylorFinklea',
  },
  {
    icon: 'mdi:linkedin',
    href: 'https://www.linkedin.com/in/taylor-finklea-8614238b',
  },
  {
    icon: 'ri:unsplash-fill',
    href: 'https://unsplash.com/@tfinklea',
  },
  {
    icon: 'mdi:email',
    href: 'mailto:taylor.finklea@gmail.com',
  },
]
const work = [
  {
    label: 'Lumifi Cyber Inc.',
    jobTitle: 'Manager of DevOps & Infrastructure',
    image: '/lumifi.png',
    dates: '2019 - Present',
  },
  {
    label: 'Executech Inc.',
    jobTitle: 'Systems Admin/PM',
    image: '/executech.jpeg',
    dates: '2017 - 2019',
  },
  {
    label: 'DigiCert Inc.',
    jobTitle: 'Support Engineer',
    image: '/digicert.png',
    dates: '2015 - 2017',
  },
  {
    label: 'Dixie State University',
    jobTitle: 'IT Support',
    image: '/dixie.png',
    dates: '2014 - 2015',
  },
  {
    label: 'ManagerPlus Solutions',
    jobTitle: 'Support Technician',
    image: '/managerPlus.png',
    dates: '2014 - 2015',
  },
]
const downloadResume = () => {
  const link = document.createElement('a')
  link.href = '/resumeTaylorFinklea.pdf'
  link.download = 'resumeTaylorFinklea.pdf'
  link.target = '_blank'
  link.click()
}
</script>
<template>
  <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-5 lg:gap-y-0">
    <NuxtImg
      src="/taylor1.png"
      sizes="sm:100px"
      class="rounded-full lg:col-span-5"
    />
    <h1 class="base-h1 lg:col-span-4 mt-7">
      DevSecOps and Infrastructure Engineer
    </h1>
    <div class="base-subtitle lg:col-span-4">
      <p>
        I'm Taylor, manager of DevOps, Infrastructure and Information Security.
        I am passionate about development and deploying automated, scalable,
        robust and secure infrastructure.
      </p>
    </div>
    <div class="col-start-1">
      <NuxtLink v-for="link in social" :to="link.href" class="mr-4"
        ><Icon
          :name="link.icon"
          class="h-6 w-6 dark:text-primary-light-300 hover:text-primary-500 hover:dark:text-primary-500"
      /></NuxtLink>
    </div>
    <div class="lg:col-span-5">
      <h2 class="base-h2 mt-24">Featured Projects</h2>
      <div class="grid grid-cols-1 lg:grid-cols-3">
        <HeroCard
          v-for="project in featuredProjects"
          :href="project._path"
          :image="project.image"
          :label="project.title"
        />
      </div>
    </div>
    <!-- WORK -->
    <div
      class="lg:col-span-3 mt-24 lg:mr-10 border-2 rounded-xl border-primary-light-100 dark:border-primary-dark-800"
    >
      <div class="p-6">
        <span class="base-h3">Work</span>
        <WorkCard
          v-for="item in work"
          class="mt-6"
          :label="item.label"
          :jobTitle="item.jobTitle"
          :image="item.image"
          :dates="item.dates"
        />
        <div class="flex justify-center">
          <button
            class="base-subtitle px-2 w-full lg:px-10 py-2 lg:w-5/6 rounded-xl dark:bg-primary-dark-800 hover:bg-primary-400 hover:dark:bg-primary-700"
            @click="downloadResume"
          >
            Download Resume
            <Icon class="ml-2" name="mdi:arrow-down" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
