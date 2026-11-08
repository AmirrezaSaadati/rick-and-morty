<script setup lang="ts">
import type { CharactersPage } from '~/types/rick-and-morty'

defineProps<{
  data?: CharactersPage | null
  status: 'idle' | 'pending' | 'success' | 'error'
  hasError: boolean
  search: string
  page: number
}>()
defineEmits<{ refresh: []; pageChange: [page: number] }>()
</script>

<template>
  <main class="mx-auto max-w-[1680px] px-5 py-12 sm:px-10 sm:py-16 lg:px-[7.5rem]">
    <div class="mb-9 flex flex-wrap items-end justify-between gap-3">
      <div><p class="text-xs font-bold uppercase tracking-[0.22em] text-[#b5e42e]">Characters</p><h1 class="mt-2 text-2xl font-bold sm:text-3xl">{{ search ? `Results for “${search}”` : 'Meet the multiverse' }}</h1></div>
      <p v-if="data" class="text-sm text-[#9ba0a5]">{{ data.info.count }} characters</p>
    </div>
    <div v-if="status === 'pending'" class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"><CharacterCardSkeleton v-for="item in 12" :key="item" /></div>
    <div v-else-if="hasError" class="rounded-xl border border-red-400/30 bg-red-950/30 p-6"><p class="font-semibold text-red-200">We couldn't load the characters.</p><BaseButton class="mt-4" @click="$emit('refresh')">Try again</BaseButton></div>
    <div v-else-if="!data?.results.length" class="rounded-xl border border-white/10 bg-[#292b2d] px-6 py-16 text-center"><p class="text-xl font-semibold">No characters found</p><p class="mt-2 text-[#9ba0a5]">Try a different character name.</p></div>
    <div v-else class="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7"><CharacterCard v-for="character in data.results" :key="character.id" :character="character" /></div>
    <div class="mt-12 sm:mt-16"><BasePagination v-if="data" :page="page" :pages="data.info.pages" @change="$emit('pageChange', $event)" /></div>
  </main>
</template>
