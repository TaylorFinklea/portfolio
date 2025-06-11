<script setup lang="ts">
const projects = await useProjects();
const featuredProjects: Ref<Project[]> = ref([
  projects[8], // AI Development Environment
  projects[7], // AI Automation Agents
  projects[6], // Browser Agents
]);
const social = [
  {
    icon: "mdi:youtube",
    href: "https://www.youtube.com/@taylor-finklea",
  },
  {
    icon: "simple-icons:x",
    href: "https://x.com/Taylor_Finklea",
  },
  {
    icon: "mdi:github",
    href: "https://github.com/TaylorFinklea",
  },
  {
    icon: "mdi:linkedin",
    href: "https://www.linkedin.com/in/taylor-finklea-8614238b",
  },
  {
    icon: "ri:unsplash-fill",
    href: "https://unsplash.com/@tfinklea",
  },
  {
    icon: "mdi:email",
    href: "mailto:taylor@novalark.ai",
  },
];
const work = [
  {
    label: "NovaLark AI",
    jobTitle: "Co-Founder & AI Engineer",
    image: "/novalark.png",
    dates: "2025 - Present",
    website: "https://www.novalark.ai",
  },
  {
    label: "TherapyNotes",
    jobTitle: "Manager of Cloud Systems",
    image: "/therapynotes.jpg",
    dates: "2023 - Present",
  },
  {
    label: "Lumifi Cyber Inc.",
    jobTitle: "Manager of Cloud Engineering",
    image: "/lumifi.png",
    dates: "2019 - 2023",
  },
  {
    label: "Executech Inc.",
    jobTitle: "Systems Admin/PM",
    image: "/executech.jpeg",
    dates: "2017 - 2019",
  },
  {
    label: "DigiCert Inc.",
    jobTitle: "Support Engineer",
    image: "/digicert.png",
    dates: "2015 - 2017",
  },
  {
    label: "Dixie State University",
    jobTitle: "IT Support",
    image: "/dixie.png",
    dates: "2014 - 2015",
  },
];
</script>
<template>
  <div class="grid grid-cols-1 gap-y-5 lg:grid-cols-5 lg:gap-y-0">
    <NuxtImg
      src="/taylor1.png"
      class="rounded-full lg:col-span-5 h-[100px] w-[100px]"
    />
    <h1 class="base-h1 lg:col-span-4 mt-7">AI Engineer & Co-Founder</h1>
    <div class="base-subtitle lg:col-span-4">
      <p>
        I'm Taylor, AI Engineer and co-founder of
        <a
          href="https://www.novalark.ai"
          target="_blank"
          class="text-primary-500 hover:text-primary-600"
          >NovaLark AI</a
        >. I'm passionate about building intelligent agentic systems and
        bringing AI automation to everyone. As a YouTuber, I focus on making
        browser agents and AI tools accessible to all skill levels.
      </p>
      <p class="mt-3">
        I specialize in designing and deploying bespoke AI automation solutions,
        with extensive experience in browser agents, LangChain, LangGraph, and
        various AI platforms. I believe in the power of Python-first development
        and open-source technology to create meaningful, real-world solutions.
      </p>
    </div>
    <div class="col-start-1 flex flex-row">
      <NuxtLink
        v-for="link in social"
        :to="link.href"
        class="mr-4"
        target="_blank"
        ><Icon
          :name="link.icon"
          class="h-6 w-6 dark:text-primary-light-300 hover:text-primary-500 hover:dark:text-primary-500"
      /></NuxtLink>
    </div>
    <div class="lg:col-span-5">
      <h2 class="base-h2 mt-24">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
          :website="item.website"
        />
      </div>
    </div>
  </div>
</template>
