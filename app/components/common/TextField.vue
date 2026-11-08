<script setup lang="ts">
defineOptions({ inheritAttrs: false })
defineProps<{ modelValue: string; label: string }>()
defineEmits<{ 'update:modelValue': [value: string] }>()
</script>

<template>
  <label class="contents">
    <span class="sr-only">{{ label }}</span>
    <input
      v-bind="$attrs"
      :value="modelValue"
      class="min-w-0 flex-1 rounded-md border border-white/10 bg-[#35373a]/95 px-5 py-4 text-sm text-white outline-none placeholder:text-[#b1b4b7] focus:border-[#b5e42e]"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    >
  </label>
</template>
