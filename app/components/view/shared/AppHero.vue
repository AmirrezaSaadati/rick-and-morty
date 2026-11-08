<script setup lang="ts">
defineProps<{ compact?: boolean }>()
</script>

<template>
  <header class="relative overflow-hidden border-b-4 border-[#a8d52b] bg-[#0e0e0e]">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(156,210,34,0.48),_rgba(14,14,14,0.2)_36%,_#0e0e0e_72%)]" />
    <div class="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,#0e0e0e)]" />
    <div class="relative mx-auto flex h-full max-w-[1680px] flex-col px-5 pt-8 sm:px-10 sm:pt-12 lg:px-[7.5rem]">
      <AppLogo />
      <div class="flex flex-1 items-end pb-8 sm:pb-12 mt-6"><slot /></div>
    </div>
  </header>
</template>
