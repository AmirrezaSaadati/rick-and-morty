<script setup lang="ts">
import type { Component } from 'vue'

const props = withDefaults(defineProps<{ name: string; size?: number }>(), { size: 20 })
const iconModules = import.meta.glob<Component>('./icons/*Icon.vue')

const icon = computed(() => {
  const loader = iconModules[`./icons/${props.name}Icon.vue`]
  return loader ? defineAsyncComponent(loader) : null
})
</script>

<template>
  <component :is="icon" v-if="icon" :width="size" :height="size" aria-hidden="true" />
</template>
