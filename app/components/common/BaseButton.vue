<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'button' | 'submit' | 'reset'
  leadingIcon?: string
  trailingIcon?: string
  disabled?: boolean
}>(), { type: 'button', disabled: false })
</script>

<template>
  <button :type="type" :disabled="disabled" class="inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-[#b5e42e] px-5 py-3 font-semibold text-[#101110] transition hover:bg-[#c7ef50] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-40">
    <slot name="leading-icon" :icon="leadingIcon">
      <BaseIcon v-if="leadingIcon" :name="leadingIcon" :size="18" />
    </slot>
    <slot />
    <slot name="trailing-icon" :icon="trailingIcon">
      <BaseIcon v-if="trailingIcon" :name="trailingIcon" :size="18" />
    </slot>
  </button>
</template>
