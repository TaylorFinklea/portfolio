<script setup lang="ts"></script>
<template>
  <div
    class="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto-1fr] lg:gap-y-12 bg-blue-600"
  >
    <div class="lg:pl-20 bg-green-500">
      <div class="max-w-xs px-2.5 lg:max-w-none bg-red-500">
        <NuxtImg src="/test01.jpeg" sizes="sm:100vw md:50vw lg:300px" />
      </div>
    </div>
    <div class="lg:order-first lg:row-span-2 bg-orange-500">
      <h1
        class="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
      >
        Hi, I'm Taylor Finklea. I am a maker and an automator.
      </h1>
      <div
        class="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400 bg-amber-500"
      >
        <p>
          I have always had a passion for building and automating things. As a
          child I was constantly tearing apart electronics to figure out how
          they worked. In 2017 I build my first Prusa i3 3D printer and taught
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
          Despite my many technical interests, I love to be outside. I am an
          amateur wildlife and nature photographer and especially enjoy
          photographing and learning about birds. I strive to hike daily where
          I'm able to disconnect and ground myself.
        </p>
        <p>
          My wife, kids and I enjoy spending time together and trying new
          things. Together we garden, tend to our land and animals and explore
          our many acres here in Kansas City.
        </p>
      </div>
    </div>
    <div class="lg:pl-20 bg-purple-500">
      <ul>
        <li>LinkedIn</li>
        <li>Github</li>
        <li>Unsplash</li>
        <li>Thingiverse</li>
        <li
          class="mt-8 border-t border-primary-dark-100 pt-8 dark:border-primary-dark-700/40"
        >
          <NuxtLink to="mailto:taylor.finklea@gmail.com">
            taylor.finklea@gmail.com
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
