<template>
  <main class="grid grid-cols-7 w-7/9 mt-16">
    <div>
      <BaseButton
        icon="material-symbols:arrow-back-ios-new"
        screenReaderLabel="Back"
        @click="$router.back()"
      />
    </div>
    <ContentDoc class="col-span-5" v-slot="{ doc }">
      <BaseTitle>{{ doc.title }}</BaseTitle>
      <ContentRenderer :value="doc" class="col-span-5" />
    </ContentDoc>
  </main>
</template>
