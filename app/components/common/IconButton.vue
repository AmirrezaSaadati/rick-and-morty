<script setup lang="ts">
withDefaults(defineProps<{
  icon: string
  label: string
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}>(), { type: 'button', disabled: false })
</script>

<template>
  <button :type="type" :disabled="disabled" :aria-label="label" class="grid size-12 cursor-pointer place-items-center rounded-md bg-[#b5e42e] text-[#101110] transition hover:bg-[#c7ef50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40">
    <BaseIcon :name="icon" :size="21" />
  </button>
</template>
