<script setup lang="ts">
const props = withDefaults(defineProps<{ src: string; alt: string; eager?: boolean }>(), { eager: false })
const initials = computed(() => props.alt.split(/\s+/).slice(0, 2).map(word => word[0]).join('').toUpperCase())
</script>

<template>
  <BaseImage :src="src" :alt="alt" width="300" height="300" :loading="eager ? 'eager' : 'lazy'" :fetchpriority="eager ? 'high' : 'auto'" class="size-full bg-[radial-gradient(circle_at_50%_35%,#495037,#292b2d_68%)]" image-class="size-full object-cover">
    <template #placeholder>
      <div class="absolute inset-0 grid place-items-center" aria-hidden="true"><span class="text-4xl font-black tracking-tight text-[#b5e42e]/35 sm:text-5xl">{{ initials }}</span></div>
    </template>
    <template #error="{ retry }">
      <BaseButton class="absolute inset-x-4 bottom-4 bg-black/55 px-3 py-2 text-xs text-white backdrop-blur hover:bg-black/75" :aria-label="`Retry loading ${alt}'s image`" @click="retry">Retry image</BaseButton>
    </template>
  </BaseImage>
</template>
