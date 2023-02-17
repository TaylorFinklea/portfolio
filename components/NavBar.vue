<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'

const mode = useColorMode({
  emitAuto: true,
})
const { next } = useCycleList(['auto', 'light', 'dark'], {
  initialValue: mode,
})
const links = ref([
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Talents', href: '/talents' },
  { name: 'Uses', href: '/uses' },
])
</script>
<template>
  <div class="top-1 z-50 h-10 pt-4 sticky">
    <div class="grid grid-cols-3">
      <div
        className="hidden md:block col-start-2 justify-self-end md:justify-self-center"
      >
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
      <div class="md:hidden col-span-2">
        <span class="sr-only">Open mobile menu</span>
        <Popover class="relative" v-slot="{ open }">
          <PopoverButton
            :class="[
              open ? 'text-primary-dark-900' : 'text-primary-dark-700',
              'group ml-6 inline-flex items-center rounded-md text-base font-medium hover:text-primary-dark-900 hover:outline-none hover:ring-2 hover:ring-primary-500 hover:ring-offset-2',
            ]"
          >
            <Icon
              name="charm:menu-hamburger"
              :class="[
                open ? 'text-primary-dark-700' : 'text-primary-dark-500',
                'h-10 w-10 group-hover:text-gray-500',
              ]"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute left-1/3 z-10 mt-3 w-screen max-w-xs -translate-x-1/4 transform px-2 sm:px-0"
            >
              <div
                class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div
                  class="relative grid gap-6 bg-primary-light-50 px-5 py-6 sm:gap-8 sm:p-8"
                >
                  <NuxtLink
                    :external="true"
                    v-for="link in links"
                    :key="link.name"
                    :href="link.href"
                    :class="[
                      $route.path === link.href
                        ? 'bg-primary-400'
                        : 'bg-primary-light-50',
                      '-m-3 block rounded-md p-3 transition duration-150 ease-in-out hover:bg-primary-500/50',
                    ]"
                  >
                    <p class="text-base font-medium text-primary-dark-900">
                      {{ link.name }}
                    </p>
                  </NuxtLink>
                </div>
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>

      <div class="justify-self-end mr-8">
        <BaseButton
          :icon="
            {
              auto: 'material-symbols:contrast',
              dark: 'ph:moon-fill',
              light: 'ph:sun-dim-bold',
            }[mode]
          "
          screenReaderLabel="Toggle Mode"
          iconSize="h-6 w-6"
          @click="next()"
        />
      </div>
    </div>
  </div>
</template>
