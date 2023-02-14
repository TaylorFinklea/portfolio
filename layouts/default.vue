<template>
  <div class="inset-0 flex justify-center sm:px-12 dark:bg-black">
    <div
      class="w-full bg-white ring-1 ring-primary-light-100 dark:bg-primary-dark-900 dark:ring-primary-dark-300/20 max-w-screen-lg h-full"
    >
      <ClientOnly>
        <NavBar />
      </ClientOnly>
      <div
        class="p-12 bg-white dark:bg-primary-dark-900 w-full h-full min-h-screen flex flex-col items-center"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
