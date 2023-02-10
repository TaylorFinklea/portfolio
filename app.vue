<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  @apply transition ease-linear delay-150
}
.page-enter-from,
.page-leave-to {
  @apply blur-sm grayscale
}
</style>
