<script setup lang="ts">
import type { CharacterDetail } from '~/types/rick-and-morty'
defineProps<{ character: CharacterDetail; description: string }>()
</script>

<template>
  <section class="grid gap-8 lg:grid-cols-[380px_1fr] lg:gap-16">
    <div class="overflow-hidden rounded-2xl border border-white/10 bg-[#292b2d] shadow-2xl"><div class="aspect-square w-full"><CharacterImage :src="character.image" :alt="character.name" eager /></div></div>
    <div class="flex flex-col justify-center">
      <div class="flex flex-wrap items-baseline gap-x-4 gap-y-2"><h1 class="text-4xl font-black tracking-tight sm:text-5xl">{{ character.name }}</h1><span class="text-base text-[#9ba0a5]">{{ character.location.name }}</span></div>
      <div class="mt-5"><StatusBadge :status="character.status" :species="character.species" /></div>
      <p class="mt-8 max-w-3xl text-base leading-8 text-[#c2c6c9] sm:text-lg">{{ description }}</p>
      <dl class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <div v-for="item in [['Gender', character.gender], ['Species', character.species], ['Origin', character.origin.name], ['Location', character.location.name]]" :key="item[0]" class="rounded-xl border border-white/8 bg-[#292b2d] p-4"><dt class="text-xs uppercase tracking-wider text-[#8c9196]">{{ item[0] }}</dt><dd class="mt-2 text-sm font-semibold text-white">{{ item[1] }}</dd></div>
      </dl>
    </div>
  </section>
</template>
