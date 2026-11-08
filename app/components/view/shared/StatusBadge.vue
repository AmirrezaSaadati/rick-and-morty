<script setup lang="ts">
const props = defineProps<{ status: string; species?: string }>()
const dotClass = computed(() => props.status.toLowerCase() === 'alive' ? 'bg-[#27e68b]' : props.status.toLowerCase() === 'dead' ? 'bg-[#ff3434]' : 'bg-[#a7adb3]')
</script>

<template>
  <span class="inline-flex items-center gap-2 text-xs text-[#d4d7da] sm:text-sm"><span class="size-2 rounded-full" :class="dotClass" /><span>{{ status }}<template v-if="species"> · {{ species }}</template></span></span>
</template>
