<script setup lang="ts">
const props = defineProps<{ page: number; pages: number }>()
const emit = defineEmits<{ change: [page: number] }>()
const visiblePages = computed(() => [...new Set([1, props.pages, props.page - 1, props.page, props.page + 1])].filter(page => page > 0 && page <= props.pages).sort((a, b) => a - b))
</script>

<template>
  <nav v-if="pages > 1" class="flex items-center justify-center gap-2" aria-label="Character pages">
    <IconButton icon="ChevronLeft" label="Previous page" class="size-10 border border-white/10 bg-transparent text-white hover:border-[#b5e42e] hover:bg-transparent" :disabled="page === 1" @click="emit('change', page - 1)" />
    <template v-for="(item, index) in visiblePages" :key="item">
      <span v-if="index && item - visiblePages[index - 1]! > 1" class="px-1 text-[#92979c]">…</span>
      <button type="button" class="grid size-10 cursor-pointer place-items-center rounded-lg border text-sm font-semibold transition" :class="item === page ? 'border-[#b5e42e] bg-[#b5e42e] text-[#111]' : 'border-white/10 hover:border-[#b5e42e]'" :aria-current="item === page ? 'page' : undefined" @click="emit('change', item)">{{ item }}</button>
    </template>
    <IconButton icon="ChevronRight" label="Next page" class="size-10 border border-white/10 bg-transparent text-white hover:border-[#b5e42e] hover:bg-transparent" :disabled="page === pages" @click="emit('change', page + 1)" />
  </nav>
</template>
