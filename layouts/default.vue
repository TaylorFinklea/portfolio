<template>
  <div className="inset-0 flex justify-center sm:px-12 dark:bg-black">
    <div
      className="w-full bg-white ring-1 ring-primary-light-100 dark:bg-primary-dark-800 dark:ring-primary-dark-300/20"
    >
      <NavBar />
      <div
        class="p-12 bg-white dark:bg-primary-dark-800 w-full h-full min-h-screen flex flex-col items-center"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
