<script setup lang="ts">
// 02/10/2023
// defineProps cannot use globally defined types due to this bug
// https://github.com/vuejs/core/issues/4294
type TalentGroup = {
  label: string
  items: string[]
}

const props = defineProps<TalentGroup>()
</script>
<template>
  <div class="dark:border-primary-600 border-l-2 mb-16">
    <span class="pl-6 dark:text-primary-light-200">
      {{ props.label }}
    </span>
    <ul class="grid grid-cols-5">
      <li v-for="item in props.items" class="flex pb-10 pl-10 pt-3 last:pb-0">
        <h3 class="pb-1">
          <Icon name="radix-icons:dash" />
          {{ item }}
        </h3>
      </li>
    </ul>
  </div>
</template>
