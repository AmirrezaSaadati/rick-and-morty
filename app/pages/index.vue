<script setup lang="ts">
import { characterService } from '~/services/character.service'

const route = useRoute()
const router = useRouter()
const search = ref(typeof route.query.name === 'string' ? route.query.name : '')
const submittedSearch = computed(() => typeof route.query.name === 'string' ? route.query.name : '')
const currentPage = computed(() => Math.max(1, Number(route.query.page) || 1))

const { data, status, error, refresh } = await useAsyncData(
  'characters',
  () => characterService.getCharacters(currentPage.value, submittedSearch.value),
  { watch: [currentPage, submittedSearch] }
)

useSeoMeta({ title: 'Rick and Morty Characters', description: 'Search and explore every Rick and Morty character.' })

function submitSearch() {
  router.push({ query: { ...(search.value.trim() ? { name: search.value.trim() } : {}), page: 1 } })
}

function changePage(page: number) {
  router.push({ query: { ...(submittedSearch.value ? { name: submittedSearch.value } : {}), page } })
  if (import.meta.client) window.scrollTo({ top: 180, behavior: 'smooth' })
}
</script>

<template>
  <div>
    <AppHero>
      <CharacterSearch v-model="search" @submit="submitSearch" />
    </AppHero>
    <CharacterList :data="data" :status="status" :has-error="Boolean(error)" :search="submittedSearch" :page="currentPage" @refresh="refresh" @page-change="changePage" />
  </div>
</template>
