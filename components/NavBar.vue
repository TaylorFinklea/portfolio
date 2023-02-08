<script setup lang="ts">
const mode = useColorMode({
  emitAuto: true,
})
const { next } = useCycleList(['auto', 'light', 'dark'], {
  initialValue: mode,
})
const links = ref([
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Talents', href: '/talents' },
  { name: 'Projects', href: '/projects' },
  { name: 'Uses', href: '/uses' },
])
</script>
<template>
  <div class="top-1 z-10 h-10 pt-4">
    <div class="grid grid-cols-3">
      <div className="col-start-2 justify-self-end md:justify-self-center">
        <nav>
          <ul
            class="flex rounded-xl bg-white/90 px-3 text-sm font-medium text-primary-dark-800 shadow-lg shadow-primary-dark-800/5 ring-1 ring-primary-dark-900/5 backdrop-blur dark:bg-primary-dark-700/60 dark:text-primary-light-200 dark:ring-white/10"
          >
            <li v-for="link in links">
              <NuxtLink
                :to="link.href"
                class="relative block px-3 py-2 transition"
                :class="
                  $route.path === link.href
                    ? 'text-primary-500 dark:text-primary-400'
                    : 'hover:text-primary-500 dark:hover:text-primary-400'
                "
              >
                <span
                  v-if="$route.path === link.href"
                  class="absolute inset-x-1 -top-px h-px bg-gradient-to-r from-accent-500/0 via-primary-500/40 to-accent-500/0 dark:from-accent-400/0 dark:via-primary-400/40 dark:to-accent-400/0"
                />
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>

      <div class="justify-self-end pr-8">
        <button
          class="rounded-2xl text-sm px-3 py-2 items-end text-primary-dark-800/70 shadow-lg shadow-primary-dark-800/5 ring-1 ring-primary-dark-900/5 hover:text-primary-dark-800/90 hover:ring-primary-dark-900/10 backdrop-blur transition dark:bg-primary-dark-700/60 dark:text-primary-light-400 dark:hover:text-primary-light-200 dark:ring-primary-light-100/10 dark:hover:ring-primary-light-100/20"
          @click="next()"
        >
          <span class="sr-only">Toggle theme</span>
          <Icon
            :name="
              {
                auto: 'material-symbols:contrast',
                dark: 'ph:moon-fill',
                light: 'ph:sun-dim-bold',
              }[mode]
            "
            class="h-6 w-6"
          />
        </button>
      </div>
    </div>
  </div>
</template>
