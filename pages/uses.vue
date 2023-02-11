<script setup lang="ts">
const uses: Use[] = [
  {
    label: 'Hardware',
    items: [
      {
        title: '14” MacBook Pro, M1 Max, 64GB RAM (2021)',
        subtitle:
          'After working on the M1 Max, I can say that there is nothing like Apple Silicon. I have never even heard the fans turn on and it runs my 4 monitors and anything I can throw at it smoothly.',
      },
      {
        title: 'LG IPS 4K Ultra-wide Monitors',
        subtitle:
          'I have varying sizes of monitors, but all of them perform flawlessly. I have had great experiences with LG monitors.',
      },
      {
        title: 'Keychron K8 Pro',
        subtitle:
          'QMK/VIA Wireless Mechanical Keyboard with RGB Backlight and Gateron G Pro Mechanical Brown switches. This keyboard is a dream to type on and works seamlessly with macOS.',
      },
      {
        title: 'Logitech MX Master 2s',
        subtitle:
          'For the rare occasion that I need to use my mouse, I always go with the Logitech Master series. Best part is that is works with macOS gestures too.',
      },
      {
        title: 'Secretlab TITAN Evo 2022',
        subtitle:
          'When you are in a chair for most of the day, nothing beats the Secretlab TITAN Evo. It is by far the most comfortable chair I have used.',
      },
    ],
  },
  {
    label: 'Development',
    items: [
      {
        title: 'Visual Studio Code',
        subtitle:
          'Having used about every text editor and IDE out there, VSCode is the most popular text editor for a reason. I love the ability to sync my settings through GitHub so that my environment is the same on all of my computers.',
      },
      {
        title: 'iTerm2',
        subtitle:
          'There is no other terminal that compares to iTerm2 on macOS. ',
      },
      {
        title: 'Xcode',
        subtitle:
          'When I write something in Swift, Xcode is the only reasonable choice. It may not be VSCode but it integrates nicely into the Apple ecosystem.',
      },
      {
        title: 'Gitkraken',
        subtitle:
          'I may use the command-line 95% of the time for git commands, but I like having Gitkraken on a screen to see branches and resolve complex git merges.',
      },
      {
        title: 'Insomnia',
        subtitle:
          'Recently switched from Postman and have been really liking it for API testing and development.',
      },
    ],
  },
  {
    label: 'Design',
    items: [
      {
        title: 'Figma',
        subtitle: 'This is an amazing tool. ',
      },
    ],
  },
  {
    label: 'Productivity',
    items: [
      {
        title: 'Yabai and SKHD',
        subtitle:
          'After working on the M1 Max, I can say that there is nothing like Apple Silicon. I have never even heard the fans turn on and it runs my 4 monitors and anything I can throw at it smoothly.',
      },
      {
        title: 'Obsidian',
        subtitle:
          'I have varying sizes of monitors, but all of them perform flawlessly. I have had great experiences with LG monitors.',
      },
      {
        title: 'NeoVim',
        subtitle:
          'When you are in a chair for most of the day, nothing beats the Secretlab TITAN Evo. It is by far the most comfortable chair I have used.',
      },
      {
        title: 'Tmux',
        subtitle:
          'For the rare occasion that I need to use my mouse, I always go with the Logitech Master series. Best part is that is works with macOS gestures too.',
      },
      {
        title: 'Maccy',
        subtitle:
          'QMK/VIA Wireless Mechanical Keyboard with RGB Backlight and Gateron G Pro Mechanical Brown switches. This keyboard is a dream to type on and works seamlessly with macOS.',
      },
    ],
  },
]
</script>
<template>
  <div
    class="grid grid-cols-2 gap-y-16 mt-16 lg:grid-cols-4 lg:grid-rows-[auto-1fr] lg:gap-y-0"
  >
    <div class="col-span-3">
      <h1
        class="text-4xl font-bold tracking-tight text-primar-dark-800 dark:text-primary-light-100 sm:text-5xl"
      >
        My favorite hardware, software and other things that keep me productive.
      </h1>
    </div>
    <div
      class="mt-6 col-span-3 space-y-4 text-base text-primary-dark-600 dark:text-primary-light-300"
    >
      <p>
        I have always had a passion for building and automating things. As a
        child I was constantly tearing apart electronics to figure out how they
        worked. In 2017 I built my first Prusa i3 3D printer and taught myself
        Autodesk Fusion 360 so that I could model my own designs.
      </p>
    </div>
    <div></div>
    <div class="col-span-4 mt-16">
      <Uses v-for="use in uses" :label="use.label" :items="use.items" />
    </div>
  </div>
</template>
