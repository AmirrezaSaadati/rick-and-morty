<script setup lang="ts">
defineProps<{ modelValue: string }>()
defineEmits<{ 'update:modelValue': [value: string]; submit: [] }>()
</script>

<template>
  <form class="flex w-full max-w-3xl" role="search" @submit.prevent="$emit('submit')">
    <TextField :model-value="modelValue" label="Search for characters" type="search" placeholder="Search for characters..." autocomplete="off" class="rounded-r-none" @update:model-value="$emit('update:modelValue', $event)" />
    <IconButton type="submit" icon="Search" label="Search" class="size-auto w-16 rounded-l-none sm:hidden" />
    <span class="hidden sm:contents">
      <BaseButton type="submit" leading-icon="Search" class="rounded-l-none px-7">Search</BaseButton>
    </span>
  </form>
</template>
