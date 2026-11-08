<script setup lang="ts">
import type { CharacterSummary } from '~/types/rick-and-morty'
defineProps<{ character: CharacterSummary }>()
</script>

<template>
  <NuxtLink :to="`/characters/${character.id}`" class="group overflow-hidden rounded-2xl border border-white/8 bg-[#292b2d] shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-[#b5e42e]/50 hover:shadow-[0_18px_45px_rgba(0,0,0,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#b5e42e]">
    <div class="aspect-square overflow-hidden bg-[#4e5053]"><CharacterImage :src="character.image" :alt="character.name" class="transition duration-500 group-hover:scale-[1.04]" /></div>
    <div class="p-4 sm:p-5">
      <div class="min-w-0">
        <h2 class="truncate text-base font-bold text-white sm:text-lg">{{ character.name }}</h2>
        <p class="mt-1 truncate text-xs text-[#92979c]">{{ character.location.name }}</p>
      </div>
      <div class="mt-3"><StatusBadge :status="character.status" :species="character.species" /></div>
    </div>
  </NuxtLink>
</template>
