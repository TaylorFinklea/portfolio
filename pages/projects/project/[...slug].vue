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
      <h1 class="base-h1 col-span-5">{{ doc.navigation.title }}</h1>
      <span class="base-subtitle col-start-2 col-span-5">{{
        doc.navigation.description
      }}</span>
      <NuxtImg
        :src="doc.navigation.image"
        class="rounded-2xl col-span-5 col-start-2"
      />
      <article
        class="article article-h1 article-h2 article-h3 article-prose-code col-start-2 col-span-5 mt-4"
      >
        <ContentRenderer :value="doc" />
    </article>
    </ContentDoc>
  </main>
</template>
