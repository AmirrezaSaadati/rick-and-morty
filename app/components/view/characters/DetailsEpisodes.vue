<script setup lang="ts">
import type { EpisodeSummary } from '~/types/rick-and-morty'
defineProps<{ episodes: EpisodeSummary[] }>()
</script>

<template>
  <section class="mt-16 sm:mt-24">
    <div class="mb-7 flex items-end justify-between gap-4"><div><p class="text-xs font-bold uppercase tracking-[0.22em] text-[#b5e42e]">Appearances</p><h2 class="mt-2 text-2xl font-bold sm:text-3xl">Episodes</h2></div><span class="text-sm text-[#92979c]">{{ episodes.length }} episodes</span></div>
    <ol class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <li v-for="episode in episodes" :key="episode.id" class="rounded-xl border border-white/8 bg-[#292b2d] p-5 transition hover:border-[#b5e42e]/50"><div class="flex items-center justify-between gap-3"><span class="font-bold text-[#b5e42e]">{{ episode.episode }}</span><span class="text-xs text-[#858a8f]">{{ episode.air_date }}</span></div><p class="mt-3 font-semibold text-white">{{ episode.name }}</p></li>
    </ol>
  </section>
</template>
