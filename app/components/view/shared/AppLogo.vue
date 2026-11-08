<template>
  <NuxtLink to="/" class="inline-flex items-center" aria-label="Rick and Morty characters">
    <BaseImage src="/images/logo.png" alt="Rick and Morty" width="116" height="36" loading="eager" fetchpriority="high" class="header-logo h-9 w-[116px]" image-class="h-9 w-[116px] object-contain" />
  </NuxtLink>
</template>

<style scoped>
.header-logo { display: block; }
</style>
