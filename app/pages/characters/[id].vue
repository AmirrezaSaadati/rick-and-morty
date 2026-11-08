<script setup lang="ts">
import { characterService } from '~/services/character.service'

const route = useRoute()
const characterId = computed(() => String(route.params.id))

const { data: character } = await useAsyncData(`character-${characterId.value}`, async () => {
  return characterService.getCharacter(characterId.value)
})

const description = computed(() => {
  if (!character.value) return ''
  const type = character.value.type ? ` (${character.value.type})` : ''
  return `${character.value.name} is a ${character.value.status.toLowerCase()} ${character.value.species.toLowerCase()}${type} from ${character.value.origin.name}. This character was last known to be at ${character.value.location.name}.`
})

useSeoMeta({
  title: () => character.value ? `${character.value.name} · Rick and Morty` : 'Character · Rick and Morty',
  description: () => description.value,
  ogImage: () => character.value?.image
})
</script>

<template>
  <div v-if="character">
    <DetailsHero />
    <main class="mx-auto max-w-[1440px] px-5 py-10 sm:px-10 sm:py-16 lg:px-[7.5rem]">
      <DetailsOverview :character="character" :description="description" />
      <DetailsEpisodes :episodes="character.episode" />
    </main>
  </div>
</template>
