<script setup lang="ts">
const social = [
  {
    label: 'GitHub',
    icon: 'mdi:github',
    href: 'https://github.com/TaylorFinklea',
  },
  {
    label: 'LinkedIn',
    icon: 'mdi:linkedin',
    href: 'https://www.linkedin.com/in/taylor-finklea-8614238b',
  },
  {
    label: 'Unsplash',
    icon: 'ri:unsplash-fill',
    href: 'https://unsplash.com/@tfinklea',
  },
  {
    label: 'Thingiverse',
    icon: 'simple-icons:thingiverse',
    href: 'https://www.thingiverse.com/taylorfinklea/designs',
  },
]
</script>
<template>
  <div
    class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto-1fr] lg:gap-y-0"
  >
    <div class="lg:pl-20">
      <div class="max-w-xs px-2.5 lg:max-w-none">
        <NuxtImg
          src="/taylor2.jpg"
          sizes="sm:100vw md:50vw lg:300px"
          class="rounded-3xl"
        />
      </div>
    </div>
    <div class="lg:order-first lg:row-span-2">
      <h1
        class="text-4xl font-bold tracking-tight text-primary-dark-800 dark:text-primary-light-100 sm:text-5xl"
      >
        Hi, I'm Taylor Finklea.
      </h1>
      <h1
        class="text-4xl font-bold tracking-tight text-primary-dark-800 dark:text-primary-light-100 sm:text-5xl"
      >
        I am a maker and an automator.
      </h1>
      <div
        class="mt-6 space-y-4 text-base text-primary-dark-600 dark:text-primary-light-300"
      >
        <p>
          I have always had a passion for building and automating things. As a
          child I was constantly tearing apart electronics to figure out how
          they worked. In 2017 I built my first Prusa i3 3D printer and taught
          myself Autodesk Fusion 360 so that I could model my own designs.
        </p>
        <p>
          When I want to learn something new, I usually start by learning it at
          home. In my homelab I run a kubernetes cluster, my containerized smart
          home, home surveillance system with object and person detection,
          firewall, access points and network switches. I built my smart home
          using amazing open-source projects like Home Assistant, Node Red and
          WLED.
        </p>
        <p>
          In addition to my many technical interests, I love to be outside. I am
          an amateur wildlife and nature photographer and especially enjoy
          photographing and learning about birds. I strive to hike daily where
          I'm able to connect with nature and ground myself.
        </p>
        <p>
          My wife, kids and I enjoy spending time together, eating good food and
          trying new things. Together we garden, tend to our land and animals
          and explore the area here in Kansas City.
        </p>
      </div>
    </div>
    <div class="lg:pl-20">
      <ul>
        <SocialLink
          v-for="link in social"
          :href="link.href"
          :label="link.label"
          :icon="link.icon"
        />
        <li
          class="mt-8 border-t border-primary-dark-100 pt-8 dark:border-primary-dark-700/40"
        >
          <SocialLink
            href="mailto:taylor.finklea@gmail.com"
            label="taylor.finklea@gmail.com"
            icon="mdi:email"
          ></SocialLink>
        </li>
      </ul>
    </div>
  </div>
</template>
